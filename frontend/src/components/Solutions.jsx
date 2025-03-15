import React from "react";

const Solutions = () => {
  return (
    <section className="bg-[#E6F4EA] py-20">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-bold text-green-900">OUR SOLUTIONS</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
          We offer a range of solutions to empower the world's leading food distributors to avoid good food from going to waste.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
        <div className="bg-green-900 text-white rounded-2xl p-8 text-center w-72">
          <h3 className="text-2xl font-bold">SURPRISE BAGS</h3>
          <img src="src/assets/icons/first.png" alt="Surprise Bags" className="mx-auto w-20 h-20 mb-6" />
          <p className="text-lg mt-2">Unlock revenue from surplus food.</p>
        </div>

        <div className="bg-green-900 text-white rounded-2xl p-8 text-center w-72">
          <h3 className="text-2xl font-bold">COMMUNITY AWARENESS</h3>
          <img src="src/assets/icons/second.png" alt="Community Awareness" className="mx-auto w-20 h-20 mb-6" />
          <p className="text-lg mt-2">
            Educate communities on food waste and engage volunteers in food rescue initiatives.
          </p>
        </div>

        <div className="bg-green-900 text-white rounded-2xl p-8 text-center w-72">
          <h3 className="text-2xl font-bold">COLLABORATIONS & SOCIAL IMPACT</h3>
          <img src="src/assets/icons/third.png" alt="Collaborations" className="mx-auto w-20 h-20 mb-6" />
          <p className="text-lg mt-2">
            Build strategic partnerships with businesses and NGOs to enhance food distribution.
          </p>
        </div>

        <div className="bg-green-900 text-white rounded-2xl p-8 text-center w-72">
          <h3 className="text-2xl font-bold">SMART FOOD LOGISTICS</h3>
          <img src="src/assets/icons/forth.png" alt="Smart Food Logistics" className="mx-auto w-20 h-20 mb-6" />
          <p className="text-lg mt-2">
            Efficiently collect and deliver surplus food to minimize waste.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
