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
        image: "https://bentos-react.vercel.app/assets/work1-CBmW8qa2.jpg",
        title: "Website",
        name: "Responsive Web Development ",
        path: "",
      },
      {
        image: "https://bentos-react.vercel.app/assets/work4-MDM2TfKy.jpg",
        title: "Website",
        name: "Responsive Web Development ",
        path: "",
      },
      {
        image: "https://bentos-react.vercel.app/assets/work4-MDM2TfKy.jpg",
        title: "Website",
        name: "Responsive Web Development ",
        path: "",
      },

      {
        image: "https://bentos-react.vercel.app/assets/work2-DtmWxhl8.jpg",
        title: "Website",
        name: "Responsive Web Development ",
        path: "",
      },

      {
        image: "https://bentos-react.vercel.app/assets/work3-BeTDGQxd.jpg",
        title: "Website",
        name: "Responsive Web Development ",
        path: "",
      },
    ],

    TechnicalSupport: [
      {
        image: "https://bentos-react.vercel.app/assets/work4-MDM2TfKy.jpg",
        title: "Engr. Bello Tongo",
        name: "",
        path: "",
      },
    ],
    CloudSolutions: [
      {
        image: "",
        title: "Engr. Bello Tongo",
        name: "",
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
            className={`tab-button py-2 px-1 cursor-pointer font-thin text-xl text-stone-300 hover:text-tomato ${
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
          className="w-full  grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-x-[30px] gap-y-[40px] "
        >
          {WorksForActiveTab.map((work, index) => (
            <div
              key={index}
              className={`animated overflow-hidden relative flex flex-col gap-5 justify-center items-center m-auto w-full lg:w-[323px]    hover:transform-gpu hover:scale-110 hover:duration-700  hover:transition-transform hover:ease-in-out  transition-transform duration-700 ease-in-out ${
                index <= 3 ? " " : ""
              }`}
            >
              <section className="name-position-section flex flex-col shadow-2xl rounded-2xl border border-neutral gap-y-[30px] overflow-hidden h-[320px] w-full bg-stone-900 bg-opacity-30 justify-start items-start">
                <div className="group relative w-full flex justify-center items-center">
                  <Image
                    src={work.image}
                    alt={work.name}
                    width={300}
                    height={300}
                    className="h-[150px] w-full md:h-auto lg:h-[200px] lg:w-[323px] hover:scale-105 hover:transition-all hover:duration-1000 hover:ease-in-out ease-in-out duration-1000 transition-all"
                  />
                  <section className="profile-links-section absolute bottom-0 left-0 right-0 bg-neutral-800 bg-opacity-60 h-[250px] opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0 transition-all duration-300 flex flex-col  justify-center items-center">
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

      {totalWorksForActiveTab > 4 && (
        <div className="w-full flex justify-center mt-4">
          <p
            onClick={() => setShowMore(!showMore)}
            className="py-2 text-xl  cursor-pointer font-medium hover-line mr-auto ml-7 bg-tomato p-1 w-[40px] hover:border-r-8  hover:border-r-lime-800 hover:transition-transform transition-transform flex justify-center items-center  rounded-[50%]"
          >
            {showMore ? <FontAwesomeIcon icon={faMinusCircle} className=" "/> : <FontAwesomeIcon icon={faPlusCircle} className=" "/>}
          </p>
        </div>
      )}
    </div>
  );
};

export default Tabs;
