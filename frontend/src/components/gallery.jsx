import React from "react";
import { motion } from "framer-motion";

// Import images from assets folder
import img1 from "../assets/download.jpeg";
import img2 from "../assets/download1.jpeg";
import img3 from "../assets/download2.jpeg";
import img4 from "../assets/download3.jpeg";
import img5 from "../assets/download.jpeg";
import img6 from "../assets/download.jpeg";

// Gallery Items Data
const galleryItems = [
  { img: img1, title: "Food Donation Drive" },
  { img: img2, title: "Community Kitchen" },
  { img: img3, title: "School Meal Program" },
  { img: img4, title: "Zero Waste Campaign" },
  { img: img5, title: "Food Distribution" },
  { img: img6, title: "Sustainable Farming" },
];

const Gallery = () => {
  return (
    <section className="bg-gradient-to-r from-green-200 to-yellow-100 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          className="text-green-900 text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Suvidha Foundation Gallery
        </motion.h2>
        <p className="text-green-800 text-lg mb-8">
          Showcasing our initiatives to save food and serve communities
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {galleryItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img src={item.img} alt={item.title} className="w-full h-56 object-cover" />
            <div className="p-4 text-center bg-green-50">
              <p className="text-green-700 font-semibold italic">
                {item.title} - <span className="text-gray-600">Impact Initiative</span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
