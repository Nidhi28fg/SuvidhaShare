import React, { useState } from 'react';
import Signlogo from "../assets/suvidhasharelogo.png";
import Food from "../assets/food.png";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();



  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https//localhost:500/signin', {
        email: email,
        password: password
      });

      if (response.status === 200) {
        console.log("Login successful:", response.data);
        localStorage.setItem('token', response.data.token);
        navigate('/dashboard');
      } else {
        console.error("Login failed:", response.data.message);
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert("An error occurred during login.");
      }
    }
  };

  



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100"
     style={{
             backgroundImage: `url("${Food}")`,
           }}
    >
      <div className="bg-white rounded-2xl shadow-2xl flex w-3/3 max-w-4xl">
        <div className="w-4/5 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold mt-2 text-left">Welcome To</h1>
          <img
            src={Signlogo}
            alt="Logo"
            className='w-100 h-50'
          />
        </div>

        <div className="w-4/5 py-10 px-8">
          <h2 className="text-5xl font-bold mb-6">Sign In</h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-2xl font-medium text-gray-700 mb-4">Email</label>
              <input
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-2xl font-medium text-gray-700 mb-4">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-gray-500"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? "HIDE" : "SHOW"}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" 
                     />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">
                Forget Password
              </a>
            </div>
            <div>
              <button type="submit" 
              className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white font-semibold" 
              >
                Sign In
              </button>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <a href="/SignUp" className="text-indigo-600 hover:text-indigo-500">
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;