import React from "react";
import { FaLinkedinIn, FaGooglePlay } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { HiArrowRight } from "react-icons/hi";
import { IoIosMail } from "react-icons/io";
import { BsYoutube } from "react-icons/bs";
import {RxDividerVertical} from "react-icons/rx"

import {NavLink } from "react-router-dom";
import Logo from "../../assets/KonsaCollege.png";

const CollegeFooter = () => {
  const Link = [
    { link: "ABOUT", route: "/particularcollege" },
    { link: "PRIVACY POLICY", route: "/particularcollege" },
    { link: "TERM OF USE", route: "/particularcollege" },
    { link: "CONTACT US", route: "/particularcollege" },
    { link: "SUPPORT US", route: "/particularcollege" },
    
  ];
  return (
    <>
      <div className="w-full h-[2vh] bg-[#EE7C00]"></div>
      <div className="w-full flex flex-col justify-center h-min-[45vh] bg-[#0E0E0E] text-white">
        <div className="w-full pt-5">
          <ul className="text-center align-middle ">
            {Link.map((item, id) => {
              return <React.Fragment key={id}>
                  <NavLink key={id} to={item.route}>
                    <li>{item.link}</li>
                  </NavLink>
                  <br />
                </React.Fragment>
            })}
          </ul>
        </div>

        <div className="flex  justify-center py-1">
          <div className=" flex flex-row gap-x-6 text-black">
            <FaGooglePlay
              size={40}
              className="bg-white rounded-full p-2 cursor-pointer hover:text-green-500 ease-in-out duration-300 hover:scale-105"
            />
            <FaLinkedinIn
              size={40}
              className="bg-white rounded-full p-2 cursor-pointer hover:text-green-500 ease-in-out duration-300 hover:scale-105"
            />
            <FiInstagram
              size={40}
              className="bg-white rounded-full p-2 cursor-pointer hover:text-green-500 ease-in-out duration-300 hover:scale-105"
            />
            <IoIosMail
              size={40}
              className="bg-white rounded-full p-2 cursor-pointer hover:text-green-500 ease-in-out duration-300 hover:scale-105"
            />
            <BsYoutube
              size={40}
              className="bg-white rounded-full p-2 cursor-pointer hover:text-green-500 ease-in-out duration-300 hover:scale-105"
            />
          </div>
        </div>

        <div className="flex  justify-center">
          <img src={Logo} alt="logo"></img>
        </div>

        <h2 className="text-center p-1">Subscribe to Our Newsletter</h2>

        <div className=" flex flex-row justify-center">
          <div className=" bg-white rounded-lg px-2">
            <input
              className="p-2 w-[70vw] md:w-[50vw] lg:w-[30vw] text-gray-500 text-center text-base focus:outline-none"
              placeholder="Please enter your mobile no"
            />
            <button className="bg-white text-gray-500">
              <div className="flex flex-row justify-around items-center text-2xl">
                | 
                {/* &#8594; */}
                {/* <RxDividerVertical size={40}/> */}
                <HiArrowRight size={30} className="mt-1"/>

              </div>
            </button>
          </div>
        </div>

        <h2 className="text-center py-5">Konsa College @ Copyright 2022</h2>
      </div>
    </>
  );
};
export default CollegeFooter;
