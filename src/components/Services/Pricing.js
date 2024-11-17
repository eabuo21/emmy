import React from "react";
import PriceTabs from "./Pricetabs";

export default function Pricing() {
  return (
    <div className=" w-full flex flex-col justify-start items-center gap-y-[40px] h-[fixed] bg-neutral-900 bg-opacity-65 shadow-[40px] rounded-md md:rounded-xl  mx-auto lg:w-[1200px] md:px-4 md:h-[fixed] p-3 md:p-5 mb-9 ">
      <section className="headings-section w-full  gap-y-[20px] flex flex-col ">
        <h6 className="text-stone-500 font-medium font-lato text-base md:text-xl text-center mt-4">
          Pricing
        </h6>
        <p className="text-xl text-stone-300 font-medium font-lato md:text-5xl text-center">
          Flexible Pricing Plans
        </p>
      </section>
      <PriceTabs />
    </div>
  );
}
