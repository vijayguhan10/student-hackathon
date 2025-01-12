import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";

const Layout = () => (
  <div className="flex h-screen">
    <Sidebar />
    <main className="flex-1 ml-64 bg-gray-100">
      <Outlet />
    </main>
  </div>
);

export default Layout;
