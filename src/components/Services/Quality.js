import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faCode,
  faCloud,
  faDesktop,
  faNetworkWired,
  faSortNumericUpAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faDeskpro } from "@fortawesome/free-brands-svg-icons";

export default function Quality() {
  return (
    <div className=" w-full flex flex-col justify-start items-center gap-y-[30px] h-[fixed] bg-neutral-900 bg-opacity-65 shadow-[40px] rounded-[45px] mx-auto lg:w-[1200px] md:px-4 md:h-[fixed] p-3 md:p-3 mb-9 mt-9">
      <section className="headings-section w-full ">
        <h6 className="text-stone-500 font-thin font-lato text-base md:text-xl text-center mt-4">
          Services
        </h6>
        <p className="text-xl text-stone-300 font-thin font-lato md:text-5xl text-center">
          Quality Services
        </p>
      </section>

      <section
        className="cards.container  w-full  gap-x-[30px] gap-y-[50px] grid grid-cols-1 p-2 justify-center items-center    px-2    md:grid-cols-2   lg:px-6 lg:grid-cols-3 
     
      "
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className=" group  relative w-full h-[300px] flex flex-col gap-y-[30px] justify-center items-start  p-2  border-neutral border  rounded-md shadow-2xl  md:px-[3rem]  "
          >
            <FontAwesomeIcon
              icon={card.icon}
              className=" text-gray-400 text-xl font-thin  md:text-4xl"
            />
            <h3 className="text-stone-300 text-xl  font-thin font-lato   md:text-2xl">
              {card.title}
            </h3>
            <p className="text-stone-500 text-base font-thin font-sans  md:text-base">
              {card.text}
            </p>

            <div className="  absolute  w-full h-[300px] top-0 left-0 right-0 opacity-0 translate-y-0 transition-all duration-700 ease-in-out group-hover:opacity-100  group-hover:-translate-y-2   group-hover:border-b-8  group-hover:border-b-lime-800      cursor-pointer">
              {/* some specific contents goes in here  something doubled cards  */}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

var cards = [
  {
    icon: faGlobe,
    title: "SEO Optimization",
    text: (
      <p>
        Boost your online visibility with targeted SEO strategies. I optimize
        your site to rank higher in search results, attracting more traffic and
        potential clients.
      </p>
    ),
  },

  {
    icon: faCode,
    title: "Website Development",
    text: (
      <p>
        Get a custom website that stands out and drives results. I design and
        develop sites that are visually appealing, user-friendly, and
        conversion-focused.
      </p>
    ),
  },
  {
    icon: faCloud,
    title: "Cloud Solutions",
    text: (
      <p>
        Enhance your business with scalable, secure cloud solutions. I help you
        migrate, optimize, and innovate in the cloud, ensuring efficiency and
        growth.
      </p>
    ),
  },

  {
    icon: faDeskpro,
    title: "Tech Support",
    text: (
      <p>
        Keep your tech running smoothly with my reliable support. I handle
        troubleshooting and maintenance to minimize downtime and keep your
        business on track.
      </p>
    ),
  },
  {
    icon: faNetworkWired,
    title: "Network Admin",
    text: (
      <p>
        Secure and optimize your network with expert administration. I ensure
        your IT infrastructure is robust, reliable, and ready to support your
        business needs.
      </p>
    ),
  },
  {
    icon: faSortNumericUpAlt,
    title: "Social Media ",
    text: (
      <p>
        Grow your online presence with strategic social media management. I
        create engaging content and manage your platforms to build your brand
        and connect with your audience.
      </p>
    ),
  },
];
