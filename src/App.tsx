import { useState, useEffect } from "react"
import { Modal } from "./components/Modal";
import Header from "./components/Header";
import Search from "./components/Search";
import Table from "./components/Table";

import { useAppDispatch, useAppSelector } from "./hooks/useRedux";
import { fetchUsers, selectUser } from "./redux/slices/userSlice";

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch()
 
  const users = useAppSelector(selectUser)

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers())
    }
  }, [dispatch, users.length])

  

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6">
      <Header openModal={openModal} /> 
      <Search />

       <Table users={users} />        

        {isModalOpen && (
          <Modal closeModal={closeModal}  />
        )}
      
    
      </div>
  )
}

export default App
