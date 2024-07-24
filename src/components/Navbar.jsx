import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {Link } from 'react-router-dom'
const Navbar = () => {
    const [nav, setNav]= useState(false)

    const handleNav = ()=> {
      setNav(!nav)
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>
        EchoSparkSolutions
      </h1>
      <ul className='hidden md:flex'>
        <Link to="/" className="p-4">Home</Link>
        <Link to="/about" className="p-4">About</Link>
        <Link to="/services" className="p-4">Services</Link>
        <Link to="/products" className="p-4">Products</Link>
        <Link to="/contactus" className="p-4">Contact Us</Link>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/> }
        
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
      <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>
        EchoSparkSolutions
      </h1>
        <ul className='uppercase p-1'>
          <li className="p-5 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">Services</li>
          <li className="p-4 border-b border-gray-600">Products</li>
          <li className="p-4">Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
