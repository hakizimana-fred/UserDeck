import { useReducer, useState } from "react";
import formReducer, { initialFormState } from "../redux/reducers/form";
import { ACTION_TYPES } from "../constants";
import { useAppDispatch } from "../hooks/useRedux";
import { addUser } from "../redux/slices/userSlice";


export function Modal({closeModal}: {closeModal: () => void}) {
   const [formState, dispatchForm] = useReducer(formReducer, initialFormState)
   const { name, email, phone } = formState
   const dispatch = useAppDispatch()
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatchForm({ 
        type: ACTION_TYPES.UPDATE_FORM,  
        payload: { name: e.target.name, value: e.target.value }
    });
  };

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (!validateForm(formState)) return
      dispatch(addUser({ ...formState}))
      dispatchForm({ type: ACTION_TYPES.CLEAR_FORM, payload: { name: '', value: '' } })
      setFormErrors({})
   }

   function validateForm(values: {name: string, email: string, phone: string}): boolean {
      if (!values.name) {
        setFormErrors((prev) => ({ ...prev, name: "Name is required" }));
        return false
      }else if (!values.email) {
        setFormErrors((prev) => ({ ...prev, email: "Email is required" }));
        return false
      }else if (!values.phone) {
        setFormErrors((prev) => ({ ...prev, phone: "Phone is required" }));
        return false
      }
      return true
   }
  

  return (
     <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div 
                className="fixed inset-0 transition-opacity" 
                aria-hidden="true"
              
              >
                <div className="absolute inset-0 bg-black opacity-75"></div>
              </div>

              <div className="inline-block align-bottom bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                      <h3 className="text-lg leading-6 font-medium text-white mb-6">
                        Create New User
                      </h3>
                      <form  className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                          />
                          {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                          />
                           {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">
                            Phone
                          </label>
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            value={phone}
                            onChange={handleChange}
                            placeholder="Phone"
                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                          />
                           {formErrors.phone && <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>}
                        </div>
                        <button
                    type="submit"
                 
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-emerald-600 text-base font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:ml-3 sm:w-auto sm:text-sm transition-colors duration-200"
                  >
                    Add User
                  </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  
                  <button
                    type="button"
                    onClick={closeModal} 
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-500 shadow-sm px-4 py-2 bg-gray-800 text-base font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition-colors duration-200"
                  >
                    Cancel
                  </button>
                </div>

              </div>
            </div>
          </div>
  )
}
