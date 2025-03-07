import { User } from '../types'
import { useAppDispatch } from '../hooks/useRedux'
import { deleteUser } from '../redux/slices/userSlice'



export function TableRow({user}: {user: User}) {
  const dispatch = useAppDispatch()

  const handleDelete = (id: string) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this user?");
    if (isConfirmed) {
        dispatch(deleteUser(id));
    }
  }
  return (
    <tr key={user.id} className="hover:bg-gray-700">
    <td className="py-4 px-4 whitespace-nowrap text-sm font-medium text-white">{user.name}</td>
    <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-300">{user.email}</td>
    <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-300">{user.phone}</td>
    <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-300 text-right">
      <button 
        className="text-blue-400 hover:text-blue-300 mr-3 transition-colors duration-200"
      >
        Edit
      </button>
      <button 
        className="text-red-400 hover:text-red-300 transition-colors duration-200"
        onClick={() => handleDelete(user?.id)}
      >
        Delete
      </button>
    </td>
  </tr>
  )
}
