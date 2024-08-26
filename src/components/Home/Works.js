import React from "react";
import Tabs from "./Workscards";

export default function works() {
  return (
    <div
      className="   w-full h-[fixed]  flex flex-col p-6  gap-y-[30px] justify-start items-start      bg-neutral-900 bg-opacity-65  shadow-2xl  rounded-md  
    lg:w-[1200px]  md:h-[fixed]  px-4 mx-auto  md:rounded-xl"
    >
      <section className="context-section  flex flex-col gap-y-[30px] justify-center items-center   mx-auto">
        <h1 className="text-xl font-lato font-thin text-stone-300 text-center   md:text-4xl mt-6">
          Works and Projects completed
        </h1>
        <p className="text-stone-500 text-base font-thin font-sans   md:text-xl  text-center    md:w-[80%]">
          Check out some of my awesome projects, meticulously crafted with love
          and dedication, each one reflecting the passion and soul I poured into
          every detail.
        </p>
      </section>

      <section className="tabs-section  h-[fixed]  w-full  lg:px-2     lg:w-full  md:px-4 md:w-auto    px-2 p-2">
        <Tabs />
      </section>
    </div>
  );
}
