import React from "react";
import { FaDribbble, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto item-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* 1st col */}
        <div className="space-y-5">
          <h1 className="font-bold text-lg">Solution</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-700">
            Enterprice
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-700">
            By Work flow
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-700">
            By Team
          </p>
        </div>
        {/* 2nd col */}
        <div className="space-y-5">
          <h1 className="font-bold text-lg">Company</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-700">
            About Us
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-700">
            News & Press
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-700">
            Our Customer
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-700">
            Leadership
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-700">
            Careers
          </p>
        </div>
        {/* 3rd col */}
        <div className="space-y-5">
          <h1 className="font-bold text-lg">Resources</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-700">
            Blog
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-700">
            Webinar & Events
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-700">
            Podcast
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-700">
            E-books & Guides
          </p>
        </div>
        {/* 4th col */}
        <div>
          <h1 className="font-bold text-lg">Contact Us</h1>
          <div className="mt-6">
            <h1 className="text-sm text-gray-600">Our Mobile Number</h1>
            <h1 className="text-base font-bold text-blue-950 mt-1">
              {" "}
              +994 999 99 99
            </h1>
          </div>
          <div className="mt-6">
            <h1 className="text-sm text-gray-600">Our Email</h1>
            <h1 className="text-base font-bold text-blue-950 mt-1">
              {" "}
              example@gmail.com
            </h1>
          </div>
        </div>
      </div>
      {/* bootom part */}
      <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p className="text-center md:text-left">Copyright © 2025. All rights reserved</p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span>Social :</span>
            <span className="text-gray-500 hover:text-blue-700">
                <FaFacebook/>
            </span>
            <span className="text-gray-500 hover:text-blue-700">
                <FaInstagram/>
            </span>
            <span className="text-gray-500 hover:text-blue-700">
                <FaDribbble/>
            </span>
            <span className="text-gray-500 hover:text-blue-700">
                <FaLinkedin/>
            </span>
        </div>
        </div>
    </div>
  );
};

export default Footer;
