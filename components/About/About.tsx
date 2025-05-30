import Image from "next/image";
import React from "react";
import BoxText from "../Helper/BoxText";

const About = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/*image content */}
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
          <Image src="/images/s.png" width={600} height={600} alt="about" />
        </div>
        {/*text content */}
        <div>
          <BoxText>About Us</BoxText>
          <h1 className="text-2xl sm:text-3xl fond-bold text-gray-900 mt-3 loading-[2.5rem] sm:leading-[3rem]">
            Everything You Need To Know About Crypto Trading
          </h1>
          <p className="mt-3 leading-relaxed text-sm sm:text-base text-gray-600">
            {" "}
            &quot;Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
            expedita suscipit inventore natus eos impedit fugiat sint qui optio
            repellendus nostrum cum quo neque tempore alias. Debitis ab dolor
            libero. &quot;
          </p>

          <button className="mt-5 border-[#f68967] text-[#f68967] pb-1 border-b-2 font-bold">
            Learn More &#8594;{" "}
          </button>
          <div className="mt-8 border-l-2 border-gray-200">
            <div className="ml-6">
              <p className="text-gray-700 font-medium ">
                &quot; Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Saepe, quas delectus quibusdam suscipit impedit placeat . &quot;
              </p>
              <div className="flex items-center space-x-6 mt-6">
                <Image
                  src="/images/u1.png"
                  width={40}
                  height={40}
                  alt="user"
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium">Elon Musk</p>
                  <p className="text-gray-700 text-sm">CEO, Tesla</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
