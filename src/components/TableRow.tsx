import React from 'react'
import { User } from '../types'

export function TableRow({user}: {user: User}) {
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
      >
        Delete
      </button>
    </td>
  </tr>
  )
}
