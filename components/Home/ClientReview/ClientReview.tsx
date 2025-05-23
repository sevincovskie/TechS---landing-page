import React from "react";
import ClientReviewCard from "./ClientReviewCard";

const ClientReview = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-100">
      {/* Heading */}
      <h1 className="text-center text-2xl text-blue-950 font-bold">
        What your Clients says?
      </h1>

      {/* Sub heading */}
      <p className="mt-3 text-center font-medium text-gray-700 w-[90%] mx-auto sm-w:[70%] md:w-[50%]">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        accusamus sed, et corporis culpa modi amet porro aut. Quod, sequi!
      </p>

      {/* grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mt-16 w-[80%] mx-auto">
       <div>
         <ClientReviewCard
          image="/images/u1.png"
          name="Elon Musk"
          rating="4.5" />
       </div>
       <div>
         <ClientReviewCard
          image="/images/u1.png"
          name="Elon Musk"
          rating="4.5" />
       </div>
       <div>
         <ClientReviewCard
          image="/images/u1.png"
          name="Elon Musk"
          rating="4.5" />
       </div>
       <div>
         <ClientReviewCard
          image="/images/u1.png"
          name="Elon Musk"
          rating="4.5" />
       </div>
       
       
      </div>
    </div>
  );
};

export default ClientReview;
