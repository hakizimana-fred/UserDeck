import React from 'react'
import { User } from '../types'
import { TableRow } from './TableRow'

export default function Table({users}: {users: User[]}) {

  return (
    <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full bg-gray-800 border-gray-700">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Name</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Email</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Phone</th>
                <th className="py-3 px-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {users.map((user: User) => (
                <TableRow key={user.id} user={user} /> 
              ))}
            </tbody>
          </table>
        </div>
  )
}
