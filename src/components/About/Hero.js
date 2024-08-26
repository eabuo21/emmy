import React from "react";
import Button from "@/shared/Buttons";
import Dev from "/public/assets/images/dev.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="main-container  grid grid-cols-1  mt-[30px] gap-y-[30px] gap-x-[30px]  md:flex md:flex-row  w-full justify-start items-start px-4    md:px-[2rem] mb-9">
      <section className="profiler-container  shadow-2xl  rounded-md  md:rounded-xl   h-[330px]  w-full   md:h-[400px] bg-neutral-900 bg-opacity-65  flex flex-col justify-center items-center  p-2   gap-y-[20px]  md:p-4 md:w-[500px] ">
        <div
          className="image-container  border-l-8 border-l-lime-800    w-[300px] h-[300px] bg-tomato  rounded-[50%] p-2  flex flex-col justify-center items-center relative    shadow-xl    md:w-[270px]  md:h-[280px]
      
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
      </section>
      <section className="profiler-carousel-container  flex flex-col gap-y-[30px] justify-start items-start px-2 p-2   w-full h-[fixed] bg-transparent       md:w-[1200px] ">
        <section className="profiler-carousel-container  p-6  flex flex-col gap-y-[20px] justify-center items-start px-2    w-full h-[fixed] bg-neutral-900 bg-opacity-65  shadow-2xl  rounded-md  md:rounded-xl   md:px-[2rem] md:w-full  md:h-[fixed] ">
          <p className="text-xl  text-stone-300  font-lato    font-thin   md:text-3xl   md:w-[90%]">
            I am Emmanuel Abuo, a Web Developer and Cloud Solutions Specialist
          </p>
          <p className="text-base  text-stone-500  font-sans    font-thin   md:text-xl   lg:w-[90%]">
            I am a Nigeria-based web developer with a focus on web development,
            cloud solutions, and administration. My expertise also extends to
            technical support and administration, where I have gained a wealth
            of experience working across various fields and industries.
            <br />
            <nr />
            <br />I hold a degree in Computer Science from Cross River
            University of Technology. My education has equipped me with a strong
            technical foundation, and I am committed to continuous learning and
            professional growth. I adhere to the highest standards of
            professional ethics, ensuring that my work is not only technically
            sound but also aligned with the best practices and integrity in the
            industry.
          </p>

          <Link href="#">
            <Button text="Get In Touch " icon={faEnvelope} />
          </Link>
        </section>
      </section>
    </div>
  );
}
