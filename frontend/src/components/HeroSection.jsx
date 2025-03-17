import React from "react";

const HeroSection = () => {
  return (
    <header className="relative bg-green-900 text-white text-center py-24 px-4">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('src/assets/back.png')" }}
      ></div>
      <div className="relative z-10">
        <h2 className="text-xl font-bold">Reduce Food Waste with Suvidha Share</h2>
        <h1 className="text-7xl font-extrabold my-6">Suvidha Share</h1>
        <p className="text-lg font-bold max-w-2xl mx-auto">
          Connecting Restaurants And Customers To Reduce Food Waste By Offering Leftover Meals At Great Discounts.
        </p>
      </div>
    </header>
  );
};

export default HeroSection;
