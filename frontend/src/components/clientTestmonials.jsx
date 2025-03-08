import React from "react";
import { motion } from "framer-motion";

export default function ClientTestimonials() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-green-200 to-yellow-100 py-16">
      <div className="max-w-[1400px] w-full text-center">
        <motion.h2 
          className="text-gray-800 text-6xl font-bold mb-16"
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          Client Testimonials
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            { 
              quote: "Vibrant and encouraging enthusiasm", 
              text: "Absolutely fulfilling project collaboration. Rio turned all of our ideas into beautiful visual tools – all while maintaining a vibrant and encouraging enthusiasm.", 
              name: "Crowd Zero, Shopping Platform" 
            },
            { 
              quote: "A truly inspiring designer", 
              text: "Rio’s grasp of digital art is truly inspiring. You’ll surely learn a lot of amazing stuff during the project process with Rio.", 
              name: "Sari Purdue, Social Media Influencer" 
            },
            { 
              quote: "Add a one-liner testimonial", 
              text: "Boost your product and service’s credibility by adding testimonials from your clients. People love recommendations so feedback from others who’ve tried it is invaluable.", 
              name: "Viggo Cimmaron, Online Store Owner" 
            }
          ].map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-10 rounded-xl shadow-2xl hover:shadow-3xl transition duration-300 transform hover:scale-110"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <p className="text-green-800 italic font-semibold text-2xl">"{testimonial.quote}"</p>
              <hr className="my-6 border-t-4 border-yellow-500 w-20 mx-auto" />
              <p className="text-gray-700 text-lg">{testimonial.text}</p>
              <p className="mt-6 font-bold text-gray-900 text-xl">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
