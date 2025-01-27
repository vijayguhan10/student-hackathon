import React from "react";
import { useLocation } from "react-router-dom";
import InitialRouter from "./Router/InitialRouter";
import Sidebar from "./components/SideBar";

const App = () => {
  const location = useLocation();
  const isHomePageOrSignup =
    location.pathname === "/" || location.pathname === "/signup";

  return (
    <div className="font-Comfortaa w-full ">
      {!isHomePageOrSignup && <Sidebar />}
      <div className={isHomePageOrSignup ? "w-full" : ""}>
        {!isHomePageOrSignup ? (
          <div className="ml-24 mr-5">
            <InitialRouter />
          </div>
        ) : (
          <InitialRouter />
        )}
      </div>
    </div>
  );
};

export default App;
