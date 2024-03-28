import React from "react";
import { SIDEBAR_LINKS } from "../../constants/navigation";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="flex flex-col items-center justify-center text-white w-60 py-4">
      <a className="mt-2 mb-4">
        <span className="text-2xl font-semibold">RentRide</span>
      </a>
      
      <div className="flex flex-col font-semibold w-full border-t-2 border-slate-400">
        {SIDEBAR_LINKS.map((item) => (
          <SidebarLink item={item} key={item.key} />
        ))}
      </div>
    </div>
  );
}

function SidebarLink({ item }) {
  return (
    <Link to={item.path} className="text-white hover:bg-gray-400 py-3 ps-5">
      {item.label}
    </Link>
  );
}
