import { NavLink } from "react-router-dom";

const Sidebar = () => (
  <aside className="bg-white text-gray w-64 fixed h-screen flex flex-col">
    <div className="p-4 text-xl font-bold text-center">Sri Eshwar</div>
    <nav className="flex-1 pt-8">
      <ul className="space-y-2 p-0">
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-l-4 border-blue-600 pl-2 p-2 rounded block text-center"
                : "hover:text-blue-600 p-2 pl-2 rounded block text-center"
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-l-4 border-blue-600 pl-2 p-2 rounded block text-center"
                : "hover:text-blue-600 p-2 pl-2 rounded block text-center"
            }
          >
            Events
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reports"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-l-4 border-blue-600 pl-2 p-2 rounded block text-center"
                : "hover:text-blue-600 p-2 pl-2 rounded block text-center"
            }
          >
            Reports
          </NavLink>
        </li>
      </ul>
    </nav>
    <button className="p-4 text-red-500 hover:bg-red-600 hover:text-white text-center">
      Logout
    </button>
  </aside>
);

export default Sidebar;
