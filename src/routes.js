import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react'
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import VehicleManagement from "./components/VehicleManagement";
import DriverManagement from "./components/DriverManagement";
import Layout from "./components/common/Layout";
import RentCar from "./components/RentCar";
// import AuthLayout from "./components/auth/AuthLayout";

const AppRoutes = () => {

  const [currentUser, setCurrentUser] = useState()
  return (
    <BrowserRouter>
        <Routes>
          {/* <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={ <Login setCurrentUser={setCurrentUser}/> } />
            <Route path="logout" element={ <Login setCurrentUser={setCurrentUser}/> } />
            <Route path="forgot-password" element={ <Login setCurrentUser={setCurrentUser}/> } />
            <Route path="sign-up" element={ <Login setCurrentUser={setCurrentUser}/> } />
          </Route> */}

          <Route path="login" element={ <Login setCurrentUser={setCurrentUser}/> } />
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={ <Dashboard />} />
            <Route path="vehicle-management" element={<VehicleManagement />} />
            <Route path="driver-management" element={<DriverManagement />} />
            <Route path="rent-car" element={<RentCar />} />
          </Route>

          {/* <Route path="/user" element={<Layout />}>
            <Route></Route>
          </Route> */}
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes