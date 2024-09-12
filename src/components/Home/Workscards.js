import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faPlusCircle,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const tabs = ["Software", "Technical Support", "Cloud Solutions"];

  const works = {
    Software: [
      {
        image: "/assets/images/works/tees24.png",
        title: "Website",
        name: "TEES-24  ",
        path: "https://tees24.vercel.app",
      },
      {
        image: "/assets/images/works/ventures.png",
        title: "Website",
        name: "Tongston Entrepreneurship  Ventures  ",
        path: "https://t-ventures.tongston.com",
      },
      {
        image: "/assets/images/works/coffey.png",
        title: "Website",
        name: "CoffeyCorwn  HealthCare Services  ",
        path: "https://coffeycrown.ca",
      },
      {
        image: "/assets/images/works/sosf.png",
        title: "Website",
        name: "Skills Outside School Foundation  ",
        path: "https://sosf.vercel.app",
      },

      {
        image: "/assets/images/works/cyber.png",
        title: "Website",
        name: "BenCyber 2000 ",
        path: "https://eabuo21.github.io/GeorgeCyber.com/",
      },

      {
        image: "/assets/images/works/folio.png",
        title: "Portfolio Site",
        name: "Personal Portfolio Website ",
        path: "https://fabzcode.vercel.app",
      },

      {
        image: "https://abuoe.vercel.app/assets/logbook-1ded4c0a.jpg",
        title: "Bsc Project Web App",
        name: "Electronic Logbook For Siwes  ",
        path: "https://github.com/eabuo21/Final-Year-Bsc-Project",
      },

      {
        image: "/assets/images/works/folio2.png",
        title: "Clients Portfolio Site",
        name: "Projects Portfolio  ",
        path: "https://abuoe.vercel.app",
      },

      {
        image: "https://abuoe.vercel.app/assets/Urld-8878851a.png",
        title: "Web App",
        name: "URL Shortener with Bitly API  ",
        path: "https://github.com/eabuo21/Url-Shorten",
      },

      {
        image: "/assets/images/works/holdings.png",
        title: "Website",
        name: "Tongston Entrepreneurship Holdings  ",
        path: "https://tongston.com",
      },
    ],

    TechnicalSupport: [
      {
        image: "/assets/images/works/console1.png",
        title: "Search Engine Optimization",
        name: "Tongston Entrepreneurship Group",
        path: "",
      },
      {
        image: "/assets/images/works/zoho.png",
        title:
          "Zoho Cloud Team Collaboration and Remote Workspace Implementation ",
        name: "ABC Multidisciplinary Consulting Services",
        path: "",
      },
      {
        image: "/assets/images/works/console2.png",
        title: "Search Engine Optimization",
        name: "Tongston Entrepreneurship Ventures",
        path: "",
      },

      {
        image: "/assets/images/works/zoho.png",
        title:
          " Zoho Cloud Team Collaboration and Remote Workspace Implementation ",
        name: "ChatDoct Nigeria",
        path: "",
      },
    ],
    CloudSolutions: [
      {
        image: "https://abuoe.vercel.app/assets/abc2-f58aabdc.png",
        title: "Email and Cloud Data Migration ",
        name: "Skills Outside School Foundation",
        path: "",
      },

      {
        image: "https://abuoe.vercel.app/assets/abc1-8596020a.png",
        title: "Email and Cloud Data Migration ",
        name: "PIF Africa",
        path: "",
      },

      {
        image: "https://abuoe.vercel.app/assets/abc2-f58aabdc.png",
        title: "Email and Cloud Data  Solutions ",
        name: "ABC Multidisciplinary Consulting Services",
        path: "",
      },

      {
        image: "/assets/images/works/chatdoct.png",
        title: "Email and Cloud Data Migration ",
        name: "ChatDoct Nigeria",
        path: "",
      },

      {
        image: "/assets/images/works/chcloud.png",
        title: "Email and Cloud Data Migration ",
        name: "Tongston Entrepreneurship Group",
        path: "",
      },
    ],
  };

  const getWorksForTab = (tabIndex) => {
    const tabKeys = Object.keys(works);
    const tabWorks = works[tabKeys[tabIndex]];
    return showMore ? tabWorks : tabWorks.slice(0, 3); // Show only 4 cards initially if showMore is false
  };

  const WorksForActiveTab = getWorksForTab(activeTab);
  const tabKeys = Object.keys(works);
  const totalWorksForActiveTab = works[tabKeys[activeTab]].length;

  return (
    <div className="tabs-component flex flex-col gap-y-[30px] ">
      <div className="tabs flex justify-start items-start ml-auto space-x-4 mb-4">
        {tabs.map((tab, index) => (
          <p
            key={index}
            className={`tab-button py-2 px-1 cursor-pointer font-thin text-sm text-stone-300 hover:text-tomato ${
              activeTab === index ? "text-tomato" : ""
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </p>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab} // Add key to ensure the animation triggers on tab change
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full  grid grid-cols-1 md:grid-cols-2  mx-auto  lg:grid-cols-3 justify-center items-center   md:gap-x-[30px] gap-y-[40px] "
        >
          {WorksForActiveTab.map((work, index) => (
            <div
              key={index}
              className={`animated overflow-hidden relative flex flex-col gap-5 justify-center items-center m-auto w-full   md:w-[400px] lg:w-[323px]    lg:hover:transform-gpu lg:hover:scale-110 hover:duration-700  lg:hover:transition-transform lg:hover:ease-in-out  lg:transition-transform lg:duration-700 lg:ease-in-out ${
                index <= 3 ? " " : ""
              }`}
            >
              <section className="name-position-section flex flex-col shadow-2xl rounded-md  md:rounded-xl border border-neutral gap-y-[30px] overflow-hidden  h-[270px] md:h-[380px]  lg:h-[320px] w-full bg-stone-900 bg-opacity-30 justify-start items-start">
                <div className="group relative w-full flex justify-center items-center">
                  <Image
                    src={work.image}
                    alt={work.name}
                    width={300}
                    height={300}
                    className="h-[150px] w-full  md:w-[400px] md:h-auto lg:h-[200px] lg:w-[323px] hover:scale-105 hover:transition-all hover:duration-1000 hover:ease-in-out ease-in-out duration-1000 transition-all"
                  />
                  <section className="profile-links-section absolute bottom-0 left-0 right-0 bg-neutral-800 bg-opacity-60  h-[270px] md:h-[380px]  lg:h-[320px] opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0 transition-all duration-300 flex flex-col  justify-center items-center">
                    <Link href={work.path} target="_blank">
                      <span className="bg-tomato border-l-8 border-l-lime-800   text-white flex flex-col  mt-9 animate-pulse  hover:animate-none  justify-center items-center rounded-[50%] p-2 w-[50px] h-[50px]">
                        <FontAwesomeIcon
                          icon={faArrowUp}
                          className="transform rotate-45"
                        />
                      </span>
                    </Link>
                  </section>
                </div>
                <div className="flex flex-col gap-y-2 justify-start items-start w-full px-2">
                  <h3 className="text-sm text-stone-500 font-lato font-thin md:text-base">
                    {work.title}
                  </h3>
                  <p className="text-stone-300 font-medium text-base font-sans md:text-xl">
                    {work.name}
                  </p>
                </div>
              </section>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {totalWorksForActiveTab > 3 && (
        <div className="w-full flex justify-center mt-4">
          <p
            onClick={() => setShowMore(!showMore)}
            className="py-2 text-xl  cursor-pointer font-medium hover-line mr-auto ml-7 bg-tomato p-1 w-[40px] hover:border-r-8  hover:border-r-lime-800 hover:transition-transform transition-transform flex justify-center items-center  rounded-[50%]"
          >
            {showMore ? (
              <FontAwesomeIcon icon={faMinusCircle} className=" " />
            ) : (
              <FontAwesomeIcon icon={faPlusCircle} className=" " />
            )}
          </p>
        </div>
      )}
    </div>
  );
};

export default Tabs;
