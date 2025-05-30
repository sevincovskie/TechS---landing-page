import React from "react";

type Props = {
  time: string;
  price: string;
};

const PriceCard = ({ time, price }: Props) => {
  return (
    <div className="bg-white rounded-lg p-8 relative border-t-4 border-red-700">
      <h1 className="text-blue-950 text-2xl font-bold">{time} Membership</h1>
      <p className="mt-4 text-gray-500 font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi,
        dignissimos veritatis mollitia.
      </p>
      {/* price */}
      <div className="mt-8">
        <div className="text-gray-700 font-semibold text-lg">
          <span className="text-4xl font-bold text-red-700">${price}</span>
          /Month
        </div>
      </div>
      {/* button */}
      <div className="mt-12">
        <a href="#_" className="relative inline-block text-lg group">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">Upgrade Now</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
      </div>
    </div>
  );
};

export default PriceCard;
