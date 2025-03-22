import React from "react";
import Logo from "../assets/suvidhasharelogo.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-2 bg-white shadow-md">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="User Profile" className=" w-48 h-25 bg-white" />
        <span className="text-gray-700 font-semibold text-lg"></span>
      </div>
      <div className="flex gap-4">
      <button className="bg-green-900 text-white px-8 py-2 rounded-full font-bold flex items-center gap-1">
          HOME
        </button>
        <button className="bg-green-900 text-white px-8 py-2 rounded-full font-bold flex items-center gap-1">
          ABOUT US
        </button>
        <button className="bg-green-900 text-white px-8 py-2 rounded-full font-bold flex items-center gap-1">
          PROGRAMS
        </button> 
        <button className="bg-green-900 text-white px-8 py-2 rounded-full font-bold flex items-center gap-1">
          CONTACT US
        </button>
        <button className="bg-green-900 text-white px-8 py-2 rounded-full font-bold flex items-center gap-1">
          SIGNUP
        </button>
      </div>
    </nav>
  );
};


export default Navbar;
