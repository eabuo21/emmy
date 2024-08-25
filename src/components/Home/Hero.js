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
    <div className="main-container  grid grid-cols-1  mt-[30px] gap-y-[30px] gap-x-[30px]  md:flex md:flex-row  w-full justify-start items-start px-4    md:px-[2rem]">
      <section className="profiler-container  shadow-2xl  rounded-[45px]   w-full h-[600px] bg-neutral-900 bg-opacity-65  flex flex-col justify-start items-center  p-2   gap-y-[20px]  md:p-4 md:w-[500px] ">
        <div
          className="image-container  border-l-8 border-l-lime-800    w-full bg-tomato  rounded-[50%] p-2  flex flex-col justify-center items-center relative  h-auto   shadow-xl    md:w-[270px]  md:h-[280px]
        
        "
        >
          <Image
            src={Dev}
            alt="emmanuel"
            height={500}
            width={500}
            className=" w-full h-auto px-4 rounded-b-[50%]  scale-x-[-1] absolute left-0 right-0  bottom-5 border-b-3 border-b-lime-800"
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

      <section className="profiler-carousel-container  flex flex-col gap-y-[30px] justify-start items-start px-2    w-full h-[fixed] bg-transparent       md:w-[1200px] ">
        <section className="profiler-carousel-container  p-6  flex flex-col gap-y-[20px] justify-center items-start px-2    w-full h-[fixed] bg-neutral-900 bg-opacity-65  shadow-2xl  rounded-[45px]   md:px-[2rem] md:w-full  md:h-[500px] ">
          <h6 className="text-base text-stone-500 font-lato  md:text-xl">
            Hello There!
          </h6>
          <p className="text-xl  text-stone-300  font-lato    font-thin   md:text-3xl   md:w-[90%]">
            I’m Emmanuel Abuo, a Frontend Developer, and Technical Support
            Specialist Building user-centric Interfaces with pixel-perfect
            precision, and Delivering Technical Support Services to Streamline
            Business Operations
          </p>
          <p className=" flex flex-row gap-x-2 text-stone-500 font-thin font-sans text-base   justify-center items-center  md:text-xl ">
            <span className="bg-lime-800 rounded-[50%] w-4 h-4  animate-bounce "></span>{" "}
            Available for Freelancing
          </p>
          <a href="/public/assets/files/Abuo Emmanuel Otor.pdf" download>
            <Button />
          </a>
        </section>

        <section className="profiler-carousel-container  flex flex-col p-6  gap-y-[60px] justify-start items-start px-2    w-full h-[250px] bg-neutral-900 bg-opacity-65  shadow-2xl  rounded-[45px]   md:px-[2rem] md:w-full ">
          <h2 className="text-xl text-stone-300 font-bold  font-lato   mt-4  md:text-2xl">
            Companies Worked With
          </h2>
          {/* <Marquee
            speed={30}
            gradient={false}
            pauseOnHover={true}
            className="custom-marquee "
          >
            <div className="marquee-item flex flex-row gap-x-8 justify-between  items-center p-2 ">
              {logos.map((logo, index) => (
                <Link
                  key={index}
                  href={logo.link}
                  className=" flex flex-row gap-x-2 justify-center items-center "
                >
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <p className="text-sm font-medium text-stone-500 font-sans">
                    {logo.name}
                  </p>
                </Link>
              ))}
            </div>
          </Marquee> */}
        </section>
      </section>
    </div>
  );
}


// const logos = [
//   {
//     name: "Tongston",
//     logo: "/https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWZTc-7rgHelHD4VRyP0adZH8iNlM9nU8CNQ&s",
//     link: "https://tongston.com",
//   },
//   {
//     name: "Facebook",
//     image: "/public/assets/images/facebook.png",
//     link: "https://www.facebook.com/",
//   },
//   {
//     name: "Instagram",
//     image: "/public/assets/images/instagram.png",
//     link: "https://www.instagram.com/",
//   },
//   {
//     name: "Twitter",
//     image: "/public/assets/images/twitter.png",
//     link: "https://www.twitter.com/",
//   },
// ];