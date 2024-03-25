import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Layout = () => {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
        <div className="bg-slate-400">
            <Sidebar />
        </div>
        <div className="p-4">
            header
        </div>
        <div>
            {<Outlet />}
        </div>
    </div>
    )
}

export default Layout