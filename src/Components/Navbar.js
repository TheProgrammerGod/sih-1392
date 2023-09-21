import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi'; // Import the Trash icon from Heroicons

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Display the Trash icon */}
        <HiOutlineTrash className="w-12 h-12 text-white" /> {/* Adjust the width and height as needed */}
        <ul className="flex space-x-4">
          <li className="nav-item">
            <a href="/" className="hover:underline">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="hover:underline">About</a>
          </li>
          <li className="nav-item">
            <a href="/services" className="hover:underline">Services</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="hover:underline">Contact</a>
          </li>
        </ul>
        <div className="flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Register
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Log In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
