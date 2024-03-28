import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from "react-router-dom";

function Layout({currentUser}) {
    console.log("cu:",currentUser)
  return (
    <div className="flex h-screen w-screen">
      {/* Sidebar */}
      <div className="bg-gray-800">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <Header currentUser={currentUser} />

        {/* Outlet */}
        <div className="flex-1 overflow-y-auto bg-white">
          <Outlet />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
