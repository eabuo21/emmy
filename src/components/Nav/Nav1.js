import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

export default function Nav1() {
  return (
    <div className="w-full h-[60px]  bg-zinc-800   flex flex-row space-x-10 justify-between  items-center  p-2 overflow-hidden sticky top-0 left-0 right-0 2-50 ">
      <Link href="/">
        <section className="logo-container  w-[fixed] h-[fixed] flex flex-row gap-x-4  justify-start items-start  ">
          <FontAwesomeIcon
            icon={faHandPointer}
            className="  text-lime-800 text-3xl animate-bounce hover:animate-pulse  "
          />
          <h1 className="text-xl text-white font-thin ">Emmanuel </h1>
        </section>
      </Link>
      <div className="   flex  justify-start items-start  bg-transparent shadow-2xl   border border-lime-800 rounded-md p-2">
        <Link href="https://linkedin.com/in/emmanuel-abuo-b41453206" target="_blank">
          <section className="button-section  font-thin    w-[100px] rounded-md flex flex-col justify-center items-center p-1 text-base  animate-pulse  text-white  bg-lime-800">
            Connect
          </section>
        </Link>
      </div>
    </div>
  );
}
