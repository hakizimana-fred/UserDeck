import { useState, useEffect } from "react"
import axios from 'axios'
import { Modal } from "./components/Modal";
import Header from "./components/Header";
import Search from "./components/Search";
import Table from "./components/Table";
import { useLocalStorage } from "./hooks/useLocaStorage";
import { User } from "./types";

function App() {
  //const [users, setUsers] = useState<User[]>([])
  const [users, setUsers] = useLocalStorage('users', []) 
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [userData, setUserData] = useState<User>({ name: '', email: '', phone:''})

   const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}`)
        setUsers(data)
      }catch(error) {
        console.error('Something went wrong while fetching users', error)
      }
      
    }

    fetchUsers()

  }, [setUsers])

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6">

      <Header openModal={openModal} /> 
      <Search />

       <Table users={users} />        

        {isModalOpen && (
          <Modal closeModal={closeModal} />
        )}
      
    
      </div>
  )
}

export default App
