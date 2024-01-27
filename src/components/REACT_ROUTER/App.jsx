import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/Errorpage";
import Home from './pages/Home'
import AddUser from './pages/Add User'
import UsersPage from "./User";
import ROUTES from "./pages/routes";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.USER} element={<UsersPage />} />
        <Route path={ROUTES.ADD_USER} element={<AddUser />} />
        <Route path={ROUTES.ERROR_PAGE} element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
