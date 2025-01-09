import React from "react";
import "./App.css";
import ReportsPage from "./ReportsPage";
import AddEventPage from "./AddEventPage";
import DashboardPage from "./DashBoardPage";
import EventsPage from "./EventsPage";

const App = () => {
  return (
    <div className="app">
      {/*<ReportsPage />*/}
      {/*<AddEventPage />*/}
      {/*<DashboardPage />*/}
      <EventsPage />
    </div>
  );
};

export default App;
