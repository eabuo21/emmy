import Button from "@/shared/Buttons";
import React from "react";
import Link from "next/link";

export default function Talk() {
  return (
    <div
      className=" w-full h-[fixed]  flex flex-col p-6  gap-y-[30px] justify-start items-center  px-2  mb-[3rem]  bg-neutral-900 bg-opacity-65  shadow-2xl  rounded-[45px]  
    md:w-[1200px] md:h-[350px]   mx-auto "
    >
      <h2 className="text-xl font-lato -300 font-thin   text-stone-300  text-center     mt-8  md:text-4xl">
        Are You Ready to kickstart your project with a touch of magic?
      </h2>
      <p className="text-base font-sans  font-thin  text-stone-500   text-center   md:text-2xl">
        Reach out and let&apos;s make it happen ✨. I&apos;m also available for
        full-time or Part-time opportunities to push the boundaries of
        collaboration and deliver exceptional work.
      </p>
      <Link href="/contact">
        <Button text=" Let's Talk " />
      </Link>
    </div>
  );
}
