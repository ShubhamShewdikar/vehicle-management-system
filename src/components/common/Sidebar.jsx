import React from 'react'
import { SIDEBAR_LINKS } from '../../constants/navigation'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="flex flex-col w-60 p-4 text-white ">
        <div className="flex-1 font-semibold">
            {SIDEBAR_LINKS.map((item) => (
                <SidebarLink item={item} key={item.key}>
                    {item.label}
                </SidebarLink>
            ))}
        </div> 
    </div>
  )
}

function SidebarLink ({item}) {
    return (
        <Link to={item.path}>
            {item.label}
        </Link>
    )
}
