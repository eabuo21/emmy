import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMap } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import ContactForm from "./Form";

export default function Contact() {
  var cards = [
    {
      icon: faPhone,
      title: "Phone",
      number: "+234 567 890 1234",
    },
    {
      icon: faEnvelope,
      title: "Email",
      email: "info@example.com",
    },
    {
      icon: faMap,
      title: "Location",
      address: "Lagos Nigeria",
    },
  ];

  return (
    <div className=" w-full flex flex-col justify-start items-center gap-y-[30px] h-[fixed] bg-neutral-900 bg-opacity-65 shadow-[40px] rounded-[45px] mx-auto lg:w-[1200px] md:px-4 md:h-[fixed] p-3 md:p-6   mb-9 mt-9">
      <section className="headings-section w-full ">
        <h6 className="text-stone-500 font-thin font-lato text-base md:text-xl text-center mt-4">
          Contact
        </h6>
        <p className="text-xl text-stone-300 font-thin font-lato md:text-5xl text-center">
          Get in Touch with Me!
        </p>
      </section>

      <section className="flex flex-col  justify-center items-center  gap-x-[40px] gap-y-[30px] p-2   lg:flex-row  lg:px-[]   mt-9  ">
        <div className=" context-container     border border-neutral rounded-md  w-full h-[500px] mb-auto  bg-neutral-900 bg-opacity-65  flex flex-col justify-start items-center  p-2   gap-y-[20px]  md:p-4 md:w-[300px]  ">
          {cards.map((card, index) => (
            <div
              key={index}
              className=" w-full flex flex-col gap-y-[5px] justify-start items-start h-[fixed]    px-4"
            >
              <FontAwesomeIcon
                icon={card.icon}
                className="text-tomato border-l-8 border-l-lime-800   font-thin text-base  md:text-base "
              />
              <h4 className="text-stone-300  font-thin font-lato text-xl   md:text-base">
                {card.title}
              </h4>
              <Link href={`tel: ${card.number}`}>
                <h6 className="text-stone-500 font-thin font-lato text-base   md:text-base">
                  {card.number}
                </h6>
              </Link>

              <Link href={`mailto: ${card.email}`}>
                <h6 className="text-stone-500 font-thin font-lato text-base   md:text-base">
                  {card.email}
                </h6>
              </Link>

              <h6 className="text-stone-500 font-thin font-lato text-base   md:text-base">
                {card.address}
              </h6>
            </div>
          ))}
        </div>

        <div className="   p-6  flex flex-col gap-y-[20px] justify-center items-start px-2    w-full h-[fixed] bg-neutral-900 bg-opacity-65     border border-neutral rounded-md  md:px-[2rem] md:w-[600px]    md:h-[500px]  ">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
