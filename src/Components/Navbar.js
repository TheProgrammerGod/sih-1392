import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi'; // Import the Trash icon from Heroicons
import LogoImg from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 font-Comfortaa">
      <div className="container max-w-[1400px] mx-auto flex justify-between items-center">
        <div className="">
          {/* <p className="text-[1rem]">E-WASTE LOCATOR</p> */}
          <img className='ml-[1.5rem] width-[200px] h-[40px]' src={LogoImg}></img>
        </div>
        <ul className=" w-[20%] flex justify-between items-center text-[0.8rem] mx-[1.5rem]">
          <li className="nav-item">
            <a href="/" className="p-[0.5rem]  hover:bg-gray-900 rounded-md  active:bg-gray-900">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="p-[0.5rem] hover:bg-gray-900 rounded-md">About</a>
          </li>
          <li className="nav-item">
            <a href="/services" className="p-[0.5rem] hover:bg-gray-900 rounded-md">Services</a>
          </li>
          <li className=" nav-item">
            <a href="/contact" className="p-[0.5rem] hover:bg-gray-900 rounded-md">Contact</a>
          </li>
        </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;
