import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex flex-row bg-slate-100 h-screen w-screen">
        <div className="bg-slate-400">
            <Sidebar />
        </div>
        <div>
            <Header />
        </div>
        <div>
            { <Outlet /> }
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Layout