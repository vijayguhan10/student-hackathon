const Sidebar = () => (
  <aside className="bg-white text-gray w-300 h-screen flex flex-col">
    <div className="p-4 text-xl font-bold">
      Sri Eshwar
    </div>
    <nav className="flex-1">
      <ul className="space-y-2 p-4 justify-center">
        <li className="hover:text-blue-600 p-2 rounded mx-px"><button>Dashboard</button></li>
        <li className="hover:text-blue-600 p-2 rounded"><button>Events</button></li>
        <li className="hover:text-blue-600 p-2 rounded"><button>Reports</button></li>
      </ul>
    </nav>
    <button className="p-4 text-red-500 hover:bg-red-600 hover:text-white">
      Logout
    </button>
  </aside>
);

export default Sidebar;