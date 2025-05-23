"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const DashSidebar = () => {

    const [selected, setSelected] = useState("/");
    
      const menuItems = [
        { label: "Create Post", href: "/admin-dashboard?tab=create-posts" },
        { label: "Posts", href: "/admin-dashboard?tab=dashposts" },
        { label: "Users", href: "/admin-dashboard?tab=dashusers" },
        { label: "Comments", href: "/admin-dashboard?tab=dashcomments" },
      ];

  return (
    <div className='lg:h-[calc(100vh-5.5vh)] md:h-[calc(100vh-4vw] hidden md:flex lg:flex flex-col fixed md:w-[12vw] lg:w-[13vw] md:px-[1vw] lg:px-[1vw]' >

          <ul className="flex gap-[.3vw] flex-col">
      {menuItems.map((item) => (
        <Link href={item.href} key={item.href}>
          <li
            onClick={() => setSelected(item.href)}
            className={`px-[2vw] py-[.5vw] rounded-xl bg-green-200 ${
              selected === item.href ? 'border-2 border-prime bg-green-300' : 'border-2 border-zinc-300'
            } text-[1vw] text-medium text-zinc-700 transition-all duration-300 ease-in-out cussor-pointer hover:bg-green-400 hover:text-white`}
          >
            {item.label}
          </li>
        </Link>
      ))}
    </ul>
    </div>
  )
}

export default DashSidebar