import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react'
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const AppRoutes = () => {

  const [currentUser, setCurrentUser] = useState()
  return (
    <BrowserRouter>
        <Routes>
            { currentUser && <Route path="dashboard" element={ <Dashboard currentUser={currentUser} />} />}
            <Route path="login" element={ <Login setCurrentUser={setCurrentUser}/> } />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes