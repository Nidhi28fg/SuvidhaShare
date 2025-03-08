import React from 'react';
import Background from '../assets/food.png';
import { GiHotMeal } from "react-icons/gi";
import { FaPeopleCarry } from "react-icons/fa";
import { GiFoodTruck } from "react-icons/gi";


const Nutrition = () => {
  return (
    <div  className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{
       backgroundImage: `url("${Background}")`
      }}
    >
      <h1 className="text-white text-5xl font-bold mb-16">
        Nourishing Communities, One Meal at a Time
      </h1>
      <div className="flex justify-around w-full max-w-7xl p-2 text-white font-bold">
        <div className="flex flex-col items-center text-center ">
           <span role="img" aria-label="delicious" className="text-8xl text-white mb-10">
                               < GiHotMeal />
                            </span>
          <h2 className="text-4xl mb-6">Rescued Meals</h2> 
          <div className="border-t-2 border-orange-400 my-4 w-3/4 mx-auto"></div>
          <p className="text-3xl">Fresh, surplus food shared with those in need</p>
        </div>

        <div className="flex flex-col items-center text-center">
        <span role="img" aria-label="delicious" className="text-8xl text-white mb-10">
                               < FaPeopleCarry />
                            </span>
          <h2 className="text-4xl mb-6">Community Dining</h2>
          <div className="border-t-2 border-orange-400 my-4 w-3/4 mx-auto"></div>
          <p className="text-3xl">Everyone deserves a warm meal join us in sharing</p>
        </div>

        <div className="flex flex-col items-center text-center">
        <span role="img" aria-label="delicious" className="text-8xl text-white mb-10">
                               < GiFoodTruck />
                            </span>
          <h2 className="text-4xl mb-6">Save Surplus</h2>
          <div className="border-t-2 border-orange-400 my-4 w-3/4 mx-auto"></div>
          <p className="text-3xl">Partnering with food businesses to reduce waste</p>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
