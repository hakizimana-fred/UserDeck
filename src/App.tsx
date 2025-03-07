import { useState, useEffect, useRef,  useMemo } from "react"
import { Modal } from "./components/Modal";
import Header from "./components/Header";
import Search from "./components/Search";
import Table from "./components/Table";

import { useAppDispatch, useAppSelector } from "./hooks/useRedux";
import { fetchUsers, selectUser } from "./redux/slices/userSlice";

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch()
  const searchRef = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
 
  const users = useAppSelector(selectUser)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers())
    }
  }, [dispatch, users.length])

  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);
  

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6">
      <Header openModal={openModal} /> 
      <Search value={searchTerm} ref={searchRef} onChange={handleSearchChange}  />

       <Table users={filteredUsers} openModal={openModal} />        

        {isModalOpen && (
          <Modal closeModal={closeModal}  />
        )}
      
    
      </div>
  )
}

export default App
