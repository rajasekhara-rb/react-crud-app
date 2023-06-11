import React from "react";
import NavbarMain from "./components/NavbarMain";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile_Page/Profile";
import Edit from "./pages/Edit_Page/Edit";
import CreateUser from "./pages/Create_Page/CreateUser";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavbarMain />
      <Routes>
        <Route path="/" Component={Dashboard} />
        <Route path="/create" Component={CreateUser} />
        <Route path="/edit" Component={Edit} />
        <Route path="/profile" Component={Profile} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
