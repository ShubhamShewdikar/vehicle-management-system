import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react'
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Layout from "./components/common/Layout";
import VehicleManagement from "./components/VehicleManagement";
import DriverManagement from "./components/DriverManagement";

const AppRoutes = () => {

  const [currentUser, setCurrentUser] = useState()
  return (
    <BrowserRouter>
        <Routes>
            <Route path="login" element={ <Login setCurrentUser={setCurrentUser}/> } />

            {<Route path="/" element={<Layout /> }>
              {/* <Route index path="/" element={ <Dashboard />} /> */}
              <Route path="vehicle-management" element={<VehicleManagement />}/>
              <Route path="driver-management" element={<DriverManagement />}/>
            </Route>}
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes