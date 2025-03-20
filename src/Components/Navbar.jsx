import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className='bg-white shadow-md'>
      {/* UPPER PART */}
      <div className="flex ">
        <img src="/logo.svg" className='w-[122px] my-2 mx-6' />
        <div className=" bg-[#f2f6ff] p-2.5 rounded-tl-2xl rounded-br-2xl">
          <div className="flex items-center gap-1 ">
            <IoLocationOutline />cxccxcx
            <p>411014</p>
            <IoChevronDown />
          </div>
          <span>Mumbai</span>

        </div>
      </div>


      {/* LOWER PART */}
    </nav>
  )
}

export default Navbar
