import React from "react";

const Signup = () => {
  return (
    <div className="h-screen bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: "url('src/assets/back.png')" }}>
      {/* Navbar */}
      <header className="w-full flex justify-between items-center p-4 bg-white shadow-md fixed top-0 left-0 right-0">
        <div className="flex items-center">
          <img src="src/assets/logo.png" alt="Suvidha Logo" className="h-10 mr-2" />
          <span className="text-xl font-bold text-green-700">Suvidha Foundation</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-green-700 font-semibold">Home</a></li>
            <li><a href="#" className="text-green-700 font-semibold">About Us</a></li>
            <li><a href="#" className="text-green-700 font-semibold">Programs</a></li>
            <li><a href="#" className="text-green-700 font-semibold">Contact Us</a></li>
            <li><a href="#" className="bg-green-600 text-white px-4 py-2 rounded">Login</a></li>
          </ul>
        </nav>
      </header>
      
      {/* Main Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mt-20 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-center mb-4">Welcome To</h2>
        <div className="text-4xl font-bold text-green-700 flex justify-center items-center">
          <span className="mr-2">Suvidha</span>
          <span className="text-orange-500">Share</span>
        </div>
        <form className="space-y-4 mt-6 w-full">
          <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border rounded" required />
          <input type="email" placeholder="Email Address" className="w-full px-4 py-2 border rounded" required />
          <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded" required />
          <input type="password" placeholder="Confirm Password" className="w-full px-4 py-2 border rounded" required />
          <label className="block">Select Role:</label>
          <select className="w-full px-4 py-2 border rounded" required>
            <option value="volunteer">Volunteer</option>
            <option value="donor">Donor</option>
            <option value="general">General User</option>
          </select>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Sign Up</button>
        </form>
        <p className="text-center mt-4">Already have an account? <a href="#" className="text-blue-600">Login Here</a></p>
      </div>
    </div>
  );
};

export default Signup;
