
export default function Header({openModal}: {openModal: () => void}) {
  return (
    <div className="max-w-6xl mx-auto">
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center">
      
        <h1 className="text-2xl font-bold text-white">User Deck</h1>
      </div>
      <div className="flex space-x-3">
      
        <button  onClick={openModal} className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-md text-sm font-medium">+ Create User</button>
      </div>
    </div>
    </div>


  )
}
