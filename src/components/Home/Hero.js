import React from "react";
import Image from "next/image";
import Link from "next/link";
import Dev from "/public/assets/images/dev.png";
import Marquee from "react-fast-marquee";

import {
  faReact,
  faHtml5,
  faCss3,
  faGit,
  faJs,
} from "@fortawesome/free-brands-svg-icons";

import { faDeskpro } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@/shared/Buttons";

export default function Hero() {
  const items = [
    {
      iconss: faHtml5,
    },
    {
      iconss: faCss3,
    },

    {
      iconss: faJs,
    },
    {
      iconss: faReact,
    },
    {
      iconss: faGit,
    },
    {
      iconss: faDeskpro,
    },
  ];

  return (
    <div className="main-container  grid grid-cols-1  mt-[30px] gap-y-[30px] gap-x-[30px]  md:flex md:flex-row  w-full justify-start items-start px-4    md:px-[2rem]  ">
      <section className="profiler-container  shadow-2xl    rounded-md md:rounded-xl   w-full h-[fixed] bg-neutral-900 bg-opacity-65  flex flex-col justify-start items-center  p-2   gap-y-[20px]  md:p-4 md:w-[500px] ">
        <div
          className="image-container  border-l-8 border-l-lime-800    w-[300px] bg-tomato  rounded-[50%] p-3  flex flex-col justify-center items-center relative  h-[300px]   shadow-xl    md:w-[270px]  md:h-[280px]
        
        "
        >
          <Image
            src={Dev}
            alt="emmanuel"
            height={500}
            width={500}
            className=" w-full h-[340px] px-4 rounded-b-[50%]  scale-x-[-1] absolute left-0 right-0  bottom-5 border-b-3 border-b-lime-800 md:h-auto"
          />
        </div>

        <div className="name-role-description-container  flex flex-col gap-y-4 justify-center items-center ">
          <h1 className="text-xl  font-bold text-stone-300  font-lato   md:text-2xl ">
            Emmanuel Abuo
          </h1>
          <h2 className="text-base font-medium text-stone-500 md:xl font-sans ">
            Software Engineer
          </h2>
          <p className="text-sm font-medium text-stone-500 md:text-base text-center   font-sans ">
            I am a passionate software engineer with a background in web
            development and a strong desire to learn and grow.
          </p>
        </div>
        <div className="icons-container  flex flex-row flex-wrap  gap-x-3 justify-center items-center  ">
          {items.map((item, index) => (
            <FontAwesomeIcon
              key={index}
              icon={item.iconss}
              className=" text-base  text-cyan-600  hover:transform-gpu hover:scale-105  hover:translate-y-2 hover:transition-all hover:duration-1000 hover:ease-linear  transition-all duration-1000 ease-linear   border border-stone-300 rounded-[50%] p-2"
            />
          ))}
        </div>
      </section>

      <section className="profiler-carousel-container  flex flex-col gap-y-[30px] justify-start items-start   w-full h-[fixed] bg-transparent     md:px-2      md:w-[1200px] ">
        <section className="profiler-carousel-container  p-6  flex flex-col gap-y-[20px] justify-center items-start px-2    w-full h-[fixed] bg-neutral-900 bg-opacity-65  shadow-2xl  rounded-md  md:rounded-xl   md:px-[2rem] md:w-full  lg:h-[500px] ">
          <h6 className="text-base text-stone-500 font-lato  font-medium  md:text-xl">
            Hello There!
          </h6>
          <p className="text-xl  text-stone-300  font-lato    font-medium   md:text-3xl  w-full   lg:w-[90%]">
            I’m Emmanuel Abuo, a Frontend Developer, and Technical Support
            Specialist Building user-centric Interfaces with pixel-perfect
            precision, and Delivering Technical Support Services to Streamline
            Business Operations
          </p>
          <p className=" flex flex-row gap-x-2 text-stone-500 font-medium font-sans text-base   justify-center items-center  md:text-xl ">
            <span className="bg-lime-800 rounded-[50%] w-4 h-4  animate-bounce "></span>{" "}
            Available for Freelancing
          </p>
          <a href="/assets/files/Abuo Emmanuel Otor.pdf" download>
            <Button />
          </a>
        </section>

        <section className="profiler-carousel-container  flex flex-col    p-6  gap-y-[60px] justify-start items-start       md: px-2    w-full h-[250px] bg-neutral-900 bg-opacity-65  shadow-2xl  rounded-md  md:rounded-xl  md:w-[500px]  md:px-[2rem] lg:w-[820px] ">
          <h2 className="text-xl text-stone-300 font-bold  font-lato   mt-4  md:text-2xl">
            Companies Worked With
          </h2>
          <Marquee
            speed={30}
            gradient={false}
            pauseOnHover={true}
            className="custom-marquee h-full overflow-hidden"
          >
            <div className="marquee-item flex flex-row gap-x-8 justify-center items-center">
              <Marquee
                speed={10}
                gradient={false}
                pauseOnHover={true}
                className="custom-marquee  h-full "
              >
                <div className="marquee-item flex flex-row gap-x-8 justify-center  items-center ">
                  <div className="item-1 text-xl font-black  bg-clip-text bg-gradient-to-r from-stone-300  via-stone-400  to-stone-700  text-transparent  md:text-3xl  font-[fantasy]">
                    {" "}
                    NIPC{" "}
                  </div>
                  <div className="item-1 text-xl font-black  bg-clip-text bg-gradient-to-r from-stone-300  via-stone-400  to-stone-700  text-transparent  md:text-3xl  font-[fantasy]">
                    {" "}
                    COFFEYCROWN{" "}
                  </div>
                  <div className="item-1 text-xl font-black  bg-clip-text bg-gradient-to-r from-stone-300  via-stone-400  to-stone-700  text-transparent  md:text-3xl  font-[fantasy]">
                    {" "}
                    BJ-TECH{" "}
                  </div>
                  <div className="item-1 text-xl font-black  bg-clip-text bg-gradient-to-r from-stone-300  via-stone-400  to-stone-700  text-transparent  md:text-3xl  font-[fantasy]">
                    {" "}
                    TONGSTON{" "}
                  </div>
                  <div className="item-1 text-xl font-black  bg-clip-text bg-gradient-to-r from-stone-300  via-stone-400  to-stone-700  text-transparent  md:text-3xl  font-[fantasy]">
                    {" "}
                    GALAXY-BACKBONE{" "}
                  </div>
                  <div className="item-1 text-xl font-black  bg-clip-text bg-gradient-to-r from-stone-300  via-stone-400  to-stone-700  text-transparent  md:text-3xl  font-[fantasy]">
                    {" "}
                    UPWORK{" "}
                  </div>
                  <div className="item-1 text-xl font-black  bg-clip-text bg-gradient-to-r from-stone-300  via-stone-400  to-stone-700  text-transparent  md:text-3xl  font-[fantasy]">
                    {" "}
                    FIVERR{" "}
                  </div>
                  <div className="item-1 text-xl font-black  bg-clip-text bg-gradient-to-r from-stone-300  via-stone-400  to-stone-700  text-transparent  md:text-3xl  font-[fantasy]">
                    {" "}
                    FREELANCER{" "}
                  </div>
                </div>
              </Marquee>
            </div>
          </Marquee>
        </section>
      </section>
    </div>
  );
}
