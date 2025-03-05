import { useState, useEffect } from "react"
import axios from 'axios'

function App() {
  const [users, setUsers] = useState()

  useEffect(() => {
    async function fetchUsers() {
      try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(data)
      }catch(error) {
        console.error('Something went wrong while fetching users', error)
      }
      
    }

    fetchUsers()

  }, [])

  console.log('well done') 
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6">

      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <svg className="w-8 h-8 mr-3 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
            <h1 className="text-2xl font-bold text-white">User Deck</h1>
          </div>
          <div className="flex space-x-3">
          
            <button className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-md text-sm font-medium">+ Create User</button>
          </div>
        </div>
        </div>

          <div className="mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-gray-800 border border-gray-700 text-white w-full py-2 pl-10 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
        </div>
      
    
      </div>
  )
}

export default App
