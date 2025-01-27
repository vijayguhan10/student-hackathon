import React from "react";
import "./App.css";
import ReportsPage from "./ReportsPage";
import AddEventPage from "./AddEventPage";
import DashboardPage from "./DashBoardPage";
import EventsPage from "./EventsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="events/addevent" element={<AddEventPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
