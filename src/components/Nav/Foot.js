import React from "react";
import Link from "next/link";

export default function Foot() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full h-[170px]  p-2  md:h-[100px] grid grid-cols-1  justify-center  mx-auto md:mx-0   md:justify-start items-center  gap-x-[100px]    md:grid-cols-2  bg-blend-darken">
      <section className="copy-right-section w-full px-2   flex justify-start items-start  md:px-4">
        <p className="text-base font-thin font-sans text-stone-300   md:text-base ">
          &copy; {currentYear}
          <Link href="/">
            {" "}
            <span className="text-tomato ">Emmanuel </span>
          </Link>
          . All rights reserved.
        </p>
      </section>

      <section className="copy-right-section w-full px-2  mb-auto  md:mb-0  flex justify-start items-start   md:px-4  ">
        <p className="text-base font-thin font-sans text-stone-300   md:text-base   md:ml-auto ">
          Developed By{" "}
          <Link
            href="https://linkedin.com/in/emmanuel-abuo-b41453206"
            target="_blank"
          >
            {" "}
            <span className="text-lime-800 ">E A </span>
          </Link>{" "}
          Inspired by{" "}
          <a
            href="https://preview.themeforest.net/item/bentos-personal-portfolio-react-template/full_screen_preview/53917243?_ga=2.150210814.934736169.1724331990-616607837.1724331990&_gac=1.250074612.1724331990.Cj0KCQjww5u2BhDeARIsALBuLnPZNtxV9kCaZ5RXhPwgUOA0Vf7rWW0HKHW99MwiZyopnsjX5GMuOt8aAu0bEALw_wcB"
            target="_blank"
            className="text-blue-700"
          >
            {" "}
            themforest.net{" "}
          </a>
        </p>
      </section>
    </div>
  );
}
