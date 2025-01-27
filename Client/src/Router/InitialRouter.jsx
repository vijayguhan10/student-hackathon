import React from "react";
import "../App.css";
import ReportsPage from "../ReportsPage";
import AddEventPage from "../AddEventPage";
import DashboardPage from "../DashBoardPage";
import EventsPage from "../EventsPage";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../components/HomePage";
import Signup from "../components/Signups";
import Profile from "../Profile/Profile";
const InitialRouter = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="dashboard" element={<DashboardPage />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="events" element={<EventsPage />} />
    <Route path="reports" element={<ReportsPage />} />
    <Route path="events/addevent" element={<AddEventPage />} />
  </Routes>
);

export default InitialRouter;
