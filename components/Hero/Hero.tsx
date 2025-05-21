import Image from "next/image";
import React from "react";
import { BsStarHalf } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='relative w-full h-[110vh] sm:h-screen bg-[url("/images/bg.png")] bg-cover bg-center flex justify-center flex-col'>
      <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* text content */}
        <div>
          <p className="text-sm sm:text-base md:text-xl font-bold text-white">
            Make the smartest investment
          </p>
          <h1 className="text-2xl lg:text-4xl md:text-3xl mt-6  mb-6font-bold text-white leading-[2.5rem] md:leading-[3.5rem]">
            Discover the world of crypto with {""}{" "}
            <span className="text-red-700">Techs</span>
          </h1>
          <p className="text-sm sm:text-sm md:text-base font-medium text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ea
            incidunt corrupti voluptatem sequi saepe sed ratione ut libero,
            tempore expedita rem enim ipsam architecto vel voluptate consectetur
            consequatur quia esse consequuntur unde placeat est deleniti!
          </p>
          {/* Rating */}
          <div className=" flex sm:flex-row flex-col sm:items-center sm:space-x-10 mt-6">
            <div className="flex items-center space-x-4">
              <Image
                src="/images/google.png"
                alt="google"
                width={40}
                height={40}
              />

              <div>
                <div className="flex items-center space-x-2">
                  <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                    4.5
                  </h1>
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 w-4 h-4" />
                    <FaStar className="text-yellow-400 w-4 h-4" />
                    <FaStar className="text-yellow-400 w-4 h-4" />
                    <FaStar className="text-yellow-400 w-4 h-4" />
                    <BsStarHalf className="text-yellow-400 w-4 h-4" />
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-300">
                  Best Rated on Google
                </p>
              </div>
            </div>

            <div className="flex mt-6 sm:mt-0 items-center space-x-4">
              <Image
                src="/images/linkedin.png"
                alt="ln"
                width={40}
                height={40}
              />
              <div>
                <div className="flex items-center space-x-2">
                  <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                    4.7
                  </h1>
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 w-4 h-4" />
                    <FaStar className="text-yellow-400 w-4 h-4" />
                    <FaStar className="text-yellow-400 w-4 h-4" />
                    <FaStar className="text-yellow-400 w-4 h-4" />
                    <BsStarHalf className="text-yellow-400 w-4 h-4" />
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-300">
                  Best Rated on Linkedin
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row w-fit sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#_"
              className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-700 rounded-xl group"
            >
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-500 rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                Get Free Trail
              </span>
            </a>
            <a
              href="#_"
              className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-blue-900 rounded-xl group"
            >
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-blue-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-blue-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                Create Account
              </span>
            </a>
          </div>
        </div>
        {/* Image */}
        <div className="mx-auto hidden xl:block">
            <Image src="/images/f1.png" alt="hero" width={900} height={900} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
