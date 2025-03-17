import React from "react";
import businessDiscussion from "../assets/businessDiscussion.webp";
import { GiHotMeal } from "react-icons/gi";
const ContactUs = () => {
  return (
    <div className="">
      {/* first containeer */}
      <div className=" flex main  bg-[#2d6a4f] mx-auto pt-[28px] pr-[58px] pb-[25px] pl-[115px] gap-x-10">
        {/* left container */}
        <div className="w-64 flex-1 ">
          <img
            className="h-64 w-96 object-cover"
            src={businessDiscussion}
            alt="Business Photo"
          />
        </div>
        {/* right container */}

        <div className="flex-1 flex w-32 p-3 flex-col bg-[#DED6C3] font-bold justify-center items-center space-y-4 max-w-[64%] ">
          <div>
            <span
              role="img"
              aria-label="delicious"
              className="text-8xl text-[#2d6a4f] mb-10"
            >
              <GiHotMeal />
            </span>
          </div>
          <div>
            <span className="text-[#2d6a4f]  mb-10">
              JOIN OVER 175,000 BUSINESSES FIGHTING{" "}
            </span>
          </div>
          <div>
            <span className="text-[#2d6a4f]  mb-10">FOOD WASTE WITH US</span>
          </div>
          <div>
            <button className="bg-[#2d6a4f] text-white px-6 py-2 rounded-full font-bold flex items-center gap-1">
              CONTACT US
            </button>
          </div>
        </div>
      </div>

      {/* Second container */}
      <div className=" flex w-full h-full pt-[20px] pr-[30px] pb-[10px] pl-[35px]  bg-[#ddd4c1]">
        {/* first container  */}
        <div className="flex-1">
          <div className="   text-[#2d6a4f] font-bold text-2xl/8">
            <p>Eat nutritous food because</p>

            <p>it makes your health so</p>
            <p>good.</p>
          </div>

          <div className="mb-8">
            <img
              src="src/assets/Suvidha_logo_transparent.png"
              alt="Suvidha Share"
              className=" object-contain"
            />
          </div>
          <p className="text-[#837a68]">
            &copy; 2025 Suvidha Foundation &#9679; All Rigths Reserved{" "}
          </p>
        </div>
        {/*Second container*/}
        <div className="flex-1">
          <p className="text-[#2d6a4f] text-xl font-bold">Get in touch</p>
          <br />
          <a className=" text-[#837a68]" href="">
            SuvdhaShare@gmail.com
          </a>

          <p className="mt-8 text-[#2d6a4f] text-xl font-bold">Headquarters</p>
          <br />
          <p className="text-[#837a68]">
            Suvidha Foundation, Motghare Bhavan,Saoner, Nagpur, Maharashtra,
            India Pincode - 441102
          </p>
        </div>
        {/* Third container */}
        <div className="flex-1">
          <p className="text-[#2d6a4f] text-xl font-bold">Useful</p> <br />
          <div className=" text-sm/8 text-[#837a68] font-semibold ">
            <div>
              <a href="">Certificates</a>
            </div>
            <div>
              <a href="">Platforms</a>
            </div>
            <div>
              <a href="">FAQ</a>
            </div>
            <div>
              <a href="">Legal and Privacy</a>
            </div>
            <div>
              <a href="">Blog</a>
            </div>
          </div>
        </div>
        {/* Fourth Container */}
        <div className="flex-1">
          <p className="text-[#2d6a4f] text-xl font-bold">Newsletter</p>
          <br />
          <div>
            <p className="text-[#837a68]">
              Sign Up here to get the latest news, updates and special offers
              delivered to your inbox
            </p>
          </div>
          <br />

          <div>
            <input
              className="w-full focus:outline-none"
              type="email"
              placeholder="Enter your email address"
            ></input>
            <hr className="h-px my-6 w-full bg-gray-200 border-0 dark:bg-gray-700" />
          </div>
          <div>
            <button className="text-[#837a68] bg-hover:bg-[#696969 ] rounded hover:bg-[#696969 ]">
              Submit &rarr;
            </button>
            <hr className="h-px my-6 w-1/4 bg-gray-200 border-0 dark:bg-gray-700" />
          </div>

          <div className="flex iteme-center space-x-6 ">
            {/* Facebook Icon */}
            <a href="" className="text-[#2d6a4f] hover:text-blue-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                class="w-8 h-8"
              >
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H7v-3h3.5V9.1c0-3.4 2-5.3 5.1-5.3 1.5 0 3 .3 3 .3v3.2h-1.7c-1.7 0-2.3 1-2.3 2.1V12h4l-.6 3H14v7A10 10 0 0 0 22 12Z" />
              </svg>
            </a>
            {/* Instagram Icon */}
            <a href="" className="text-[#2d6a4f] hover:text-pink-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                class="w-8 h-8"
              >
                <path d="M7.5 2A5.5 5.5 0 0 0 2 7.5v9A5.5 5.5 0 0 0 7.5 22h9a5.5 5.5 0 0 0 5.5-5.5v-9A5.5 5.5 0 0 0 16.5 2h-9Zm0 2h9A3.5 3.5 0 0 1 20 7.5v9a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 16.5v-9A3.5 3.5 0 0 1 7.5 4Zm9.75 2.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm0 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" />
              </svg>
            </a>
            {/* Twitter Incon */}
            <a href="" className="text-[#2d6a4f] hover:text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                class="w-8 h-8"
              >
                <path d="M22.5 5.9c-.8.4-1.6.6-2.5.8a4.2 4.2 0 0 0 1.8-2.3c-.8.5-1.7.9-2.6 1.1A4.1 4.1 0 0 0 12 8.2a11.7 11.7 0 0 1-8.5-4.3 4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.4-.2-2-.5v.1c0 2 .1 4 2.1 5.2-.6.2-1.2.3-1.8.1a4.1 4.1 0 0 0 3.8 2.8 8.3 8.3 0 0 1-6.1 1.7 11.8 11.8 0 0 0 6.4 1.9c7.8 0 12-6.5 12-12v-.6c.8-.5 1.6-1.2 2.2-2Z" />
              </svg>
            </a>
            {/* Linkedin Icon */}
            <a href="#" className="text-[#2d6a4f] hover:text-blue-900">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm13.5 11.5h-3v-5.6c0-1.3-.5-2.1-1.6-2.1-1.1 0-1.8.8-1.8 2v5.7h-3v-10h3v1.4c.8-1.1 2-1.7 3.3-1.7 2.4 0 4.1 1.6 4.1 4.9v5.4z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
