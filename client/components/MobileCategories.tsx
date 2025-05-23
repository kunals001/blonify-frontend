
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const MobileCategories = () => {

  const [selected, setSelected] = useState("/");

  const menuItems = [
    { label: "Daily", href: "/daily" },
    { label: "Mobiles", href: "/mobiles" },
    { label: "Laptops", href: "/laptops" },
  ];

  return (
    <div className="md:hidden w-full lg:hidden ">
         <ul className="flex gap-[1vw] overflow-y-hidden overflow-x-auto overflow-scroll [scrollbar-width:none] [-ms-overflow-style:none]">
      {menuItems.map((item) => (
        <Link href={item.href} key={item.href}>
          <li
            onClick={() => setSelected(item.href)}
            className={`px-[2vw] py-[.5vw] rounded-full bg-green-200 ${
              selected === item.href ? 'border-2 border-prime' : 'border-2 border-zinc-300'
            } text-center flex items-center justify-center text-[1.5vh] text-medium text-zinc-700 transition-all duration-300 ease-in-out`}
          >
            {item.label}
          </li>
        </Link>
      ))}
    </ul>
      </div>
  )
}

export default MobileCategories