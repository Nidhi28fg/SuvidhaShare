import React from 'react';
import Background from '../assets/foodpic2.png';
import { GiForkKnifeSpoon } from "react-icons/gi";
import { MdFastfood } from "react-icons/md";
import { IoEarthSharp } from "react-icons/io5";
import { GiShop } from "react-icons/gi";


const WhyUseSuvidhaShare = () => {
  return (
    <div className="flex flex-col items-left justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url("${Background}")`,
      }}>
    <div className="bg-[#f9f3f0] rounded-2xl shadow-md p-8 w-96 text-center h-120 max-w-md">
        <h2 className="text-3xl font-extrabold text-red-500 mb-2 font-fredoka">Why Use</h2>
        <h1 className="text-4xl font-extrabold text-green-700 mb-6 font-fredoka">Suvidha Share </h1>
        <div className="border-t-2 border-orange-400 w-full mx-auto mb-8"></div>
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between space-x-4">
            <div className="flex-1 flex flex-col items-center gap-2">
                <span role="img" aria-label="delicious" className="text-5xl text-green-800">
                     < MdFastfood />
                  </span>
              <p className="text-green-700 text-base font-medium">
                Enjoy Good Food At 1/2 Price or Less
              </p>
            </div>

            <div className="flex-1 flex flex-col items-center gap-2">
            <span role="img" aria-label="rescue" className="text-5xl text-green-800">
                     <GiForkKnifeSpoon />
                  </span>
              <p className="text-green-700 text-base font-medium">Rescue Food Near You</p>
            </div>
          </div>

          <div className="flex justify-between space-x-4">
             <div className="flex-1 flex flex-col items-center gap-2">
               <span role="img" aria-label="environment" className="text-5xl text-green-800">
               <IoEarthSharp/>
                </span>
              <p className="text-green-700 text-base font-medium">
                Help The Environment By Reducing Food Waste
              </p>
            </div>

            <div className="flex-1 flex flex-col items-center gap-2">
            <span role="img" aria-label="shop" className="text-5xl text-green-800">
                  <GiShop />
                </span>
              <p className="text-green-700 text-base font-medium">
                Try Something New From Local Cafes, Bakeries Or Restaurants
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUseSuvidhaShare;