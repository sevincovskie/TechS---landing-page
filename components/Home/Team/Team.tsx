import BoxText from "@/components/Helper/BoxText";
import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-5 items-center">
        {/* Text Content */}
        <div className="lg:col-span-2">
          <BoxText>Our Team</BoxText>
          <h1 className="mt-4 text-xl md:text-2xl font-bold text-gray-800">
            {" "}
            Our Team of Excetional Talent , Innovation and Vision
          </h1>
          <p className="mt-4 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos odio
            molestiae perferendis nesciunt neque.
          </p>
          {/* button */}
          <div className="mt-8">
            <a
              href="#_"
              className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
            >
              <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
              <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-blue-600 rounded-full blur-md"></span>
                <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-red-500 rounded-full blur-md"></span>
              </span>
              <span className="relative text-white">Join our team</span>
            </a>
          </div>
        </div>
        {/* Image Content */}
        <div className="mt-8 sm:flex items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:col-span-3">
          <div data-aos="" data-aos-anchor-placement="top-center" className="relative overflow-hidden">
            <Image
              src="/images/ceo.jpeg"
              alt="ceo"
              width={350}
              height={350}
              className="rounded-lg"
            />
            <div className="absolute w-full bg-gray-200 h-[4rem] p-4 bottom-0">
              <p className="tex-lg text-gray-800 font-bold">Josh Mon</p>
              <p className="text-gray-700">Founder</p>
            </div>
          </div>
           <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100" className="relative overflow-hidden">
            <Image
              src="/images/d.jpeg"
              alt="co-founder"
              width={350}
              height={350}
              className="rounded-lg"
            />
            <div className="absolute w-full bg-gray-200 h-[4rem] p-4 bottom-0">
              <p className="tex-lg text-gray-800 font-bold">Jason Hardy</p>
              <p className="text-gray-700">Co-Founder</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Team;
