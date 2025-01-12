import { NavLink } from "react-router-dom";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";

const Sidebar = () => (
  <aside className="bg-white text-gray w-64 fixed h-screen flex flex-col border-r-2 shadow-lg">
    <div className="pt-4 ml-10">
      <img src="/logo.webp" alt="logo" className="w-33 h-auto " />
    </div>
    <nav className="flex-1 pt-8">
      <ul className="space-y-2 p-0">
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-l-4 border-blue-600 pl-3 pr-4 py-2 rounded flex items-center"
                : "hover:text-blue-600 text-gray-500 px-4 py-2 rounded flex items-center"
            }
          >
            <Squares2X2Icon className="h-5 w-5 mr-2 ml-12" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-l-4 border-blue-600 pl-3 pr-4 py-2 rounded flex items-center"
                : "hover:text-blue-600 text-gray-500 px-4 py-2 rounded flex items-center"
            }
          >
            <CalendarIcon className="h-5 w-5 mr-2 ml-12" />
            Events
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reports"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-l-4 border-blue-600 pl-3 pr-4 py-2 rounded flex items-center"
                : "hover:text-blue-600 text-gray-500 px-4 py-2 rounded flex items-center"
            }
          >
            <ChartBarIcon className="h-5 w-5 mr-2 ml-12" />
            Reports
          </NavLink>
        </li>
      </ul>
    </nav>
    <div className="flex justify-center items-center p-4">
      <ArrowRightStartOnRectangleIcon className="h-5 w-5 items-center text-red-500" />
      <button className="py-10 ml-2 justify-center text-red-500">Logout</button>
    </div>
  </aside>
);

export default Sidebar;
