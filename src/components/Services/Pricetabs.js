import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faPlusCircle,
  faMinusCircle,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import Button from "@/shared/Buttons";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";


const PriceTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const tabs = [
    "SEO Optimization",
    "Website Development",
    "Cloud Solutions",
    "Tech Support",
    "Network Admin",
    "Social Media",
  ];
  const works = {
    SEO: [
      // Basic Plan
      {
        title: "Basic Plan",
        description: <p>Ideal for small businesses with basic SEO needs.</p>,
        rate: "$100",
        time: "/hour",
        lists: [
          "Keyword Research",
          "On-page SEO",
          "Content Optimization",
          "Basic Analytics Setup",
        ],
      },
      // Gold Plan
      {
        title: "Gold Plan",
        description: (
          <p>Enhanced SEO services with additional features and support.</p>
        ),
        rate: "$200",
        time: "/hour",
        lists: [
          "Advanced Keyword Research",
          "On-page & Off-page SEO",
          "Content Optimization",
          "Advanced Analytics Setup",
          "Monthly SEO Reporting",
        ],
      },
      // Platinum Plan
      {
        title: "Platinum Plan",
        description: (
          <p>Comprehensive SEO package with premium features and support.</p>
        ),
        rate: "$300",
        time: "/hour",
        lists: [
          "Comprehensive Keyword Research",
          "On-page & Off-page SEO",
          "Content Optimization",
          "Custom Analytics Setup",
          "Weekly SEO Reporting",
          "Competitor Analysis",
        ],
      },
    ],

    WebDev: [
      // Basic Plan
      {
        title: "Basic Plan",
        description: <p>Perfect for startups, small Business and Professionals Portfolios.</p>,
        rate: "$500",
        time: "/project",
        lists: [
          "Responsive Design",
          "SEO-friendly Code",
          "Cross-Browser Compatibility",
          "Basic Custom Features",
        ],
      },
      // Gold Plan
      {
        title: "Gold Plan",
        description: <p>For growing businesses needing additional features.</p>,
        rate: "$1000",
        time: "/project",
        lists: [
          "Advanced Responsive Design",
          "SEO-friendly Code",
          "Cross-Browser Compatibility",
          "Enhanced Custom Features",
          "Basic E-commerce Functionality",
        ],
      },
      // Premium Plan
      {
        title: "Premium Plan",
        description: <p>Full-featured development for complex projects.</p>,
        rate: "$1500",
        time: "/project",
        lists: [
          "Premium Responsive Design",
          "SEO-friendly Code",
          "Cross-Browser Compatibility",
          "Advanced Custom Features",
          "E-commerce Integration",
          "Performance Optimization",
        ],
      },
    ],

    Cloud: [
      // Basic Plan
      {
        title: "Basic Plan",
        description: <p>Basic cloud setup and support for small businesses.</p>,
        rate: "$200",
        time: "/hour",
        lists: [
          "AWS Setup",
          "Basic Azure Integration",
          "Initial Data Migration",
          "Basic Continuous Monitoring",
        ],
      },
      // Gold Plan
      {
        title: "Gold Plan",
        description: <p>Enhanced cloud services with additional support.</p>,
        rate: "$400",
        time: "/hour",
        lists: [
          "Advanced AWS Setup",
          "Advanced Azure Integration",
          "Full Data Migration",
          "Enhanced Continuous Monitoring",
          "Monthly Performance Reports",
        ],
      },
      // Platinum Plan
      {
        title: "Platinum Plan",
        description: <p>Comprehensive cloud solutions with premium support.</p>,
        rate: "$600",
        time: "/hour",
        lists: [
          "Premium AWS & Azure Setup",
          "Comprehensive Data Migration",
          "Advanced Continuous Monitoring",
          "Dedicated Cloud Support",
          "Weekly Performance Reports",
        ],
      },
    ],

    Tech: [
      // Basic Plan
      {
        title: "Basic Plan",
        description: <p>Essential technical support for small businesses.</p>,
        rate: "$150",
        time: "/hour",
        lists: [
          "Basic Technical Support",
          "Database Management",
          "Cloud-based Tools Setup",
          "Deployment & Maintenance",
        ],
      },
      // Gold Plan
      {
        title: "Gold Plan",
        description: (
          <p>Enhanced technical support with additional services.</p>
        ),
        rate: "$300",
        time: "/hour",
        lists: [
          "Enhanced Technical Support",
          "Advanced Database Management",
          "Cloud-based Tools Optimization",
          "Advanced Deployment & Maintenance",
          "Monthly Performance Reports",
        ],
      },
      // Platinum Plan
      {
        title: "Platinum Plan",
        description: <p>Comprehensive support with premium features.</p>,
        rate: "$450",
        time: "/hour",
        lists: [
          "Premium Technical Support",
          "Comprehensive Database Management",
          "Advanced Cloud-based Tools Integration",
          "Premium Deployment & Maintenance",
          "Weekly Performance Reports",
          "24/7 Support",
        ],
      },
    ],

    Network: [
      // Basic Plan
      {
        title: "Basic Plan",
        description: <p>Fundamental network support for small setups.</p>,
        rate: "$200",
        time: "/hour",
        lists: [
          "Basic Network Support",
          "Network Setup & Configuration",
          "Firewall Configuration",
          "Basic Monitoring & Maintenance",
        ],
      },
      // Gold Plan
      {
        title: "Gold Plan",
        description: <p>Enhanced network services with additional features.</p>,
        rate: "$400",
        time: "/hour",
        lists: [
          "Advanced Network Support",
          "Network Optimization",
          "Advanced Firewall Configuration",
          "Enhanced Monitoring & Maintenance",
          "Monthly Network Performance Reports",
        ],
      },
      // Platinum Plan
      {
        title: "Platinum Plan",
        description: (
          <p>Premium network solutions with comprehensive support.</p>
        ),
        rate: "$600",
        time: "/hour",
        lists: [
          "Premium Network Support",
          "Comprehensive Network Optimization",
          "Premium Firewall Configuration",
          "Advanced Monitoring & Maintenance",
          "Weekly Network Performance Reports",
          "24/7 Network Support",
        ],
      },
    ],

    Media: [
      // Basic Plan
      {
        title: "Basic Plan",
        description: <p>Initial media management and support.</p>,
        rate: "$250",
        time: "/hour",
        lists: [
          "Basic Media Management",
          "Social Media Setup",
          "Basic Content Creation",
          "Initial Analytics Setup",
        ],
      },
      // Gold Plan
      {
        title: "Gold Plan",
        description: <p>Enhanced media services with additional features.</p>,
        rate: "$500",
        time: "/hour",
        lists: [
          "Enhanced Media Management",
          "Social Media Strategy",
          "Advanced Content Creation",
          "Monthly Analytics Reports",
          "Campaign Management",
        ],
      },
      // Platinum Plan
      {
        title: "Platinum Plan",
        description: <p>Comprehensive media solutions with premium support.</p>,
        rate: "$750",
        time: "/hour",
        lists: [
          "Premium Media Management",
          "Comprehensive Social Media Strategy",
          "Premium Content Creation",
          "Weekly Analytics Reports",
          "Campaign Optimization",
          "Dedicated Media Specialist",
        ],
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
          className="w-full  grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-x-[45px] gap-y-[40px] "
        >
          {WorksForActiveTab.map((work, index) => (
            <div
              key={index}
              className={`animated  px-3  group   relative flex flex-col gap-y-3 justify-start  items-start m-auto w-full lg:w-[323px]  h-[fixed]  lg:h-[400px] rounded-2xl    border border-neutral md:px-4  ${
                index <= 3 ? " " : ""
              }`}
            >
              <div className=" flex flex-col gap-y-[10px] mt-[4rem]  w-full  group-hover:opacity-0 translate-y-0  transition-transform duration-700 ease-in-out   group-hover:translate-y-full   group-hover:transition-transform  group-hover:ease-in-out  group-hover:duration-700">
                <h3 className="text-stone-300  font-thin font-lato text-xl    md:text-3xl ">
                  {work.title}
                </h3>
                <h6 className="text-stone-500 font-thin font-sans text-base md:text-xl ">
                  {work.description}
                </h6>
                <h3 className="text-tomato  font-thin font-lato text-xl    md:text-3xl ">
                  {work.rate}{" "}
                  <span className="text-stone-500 text-base font-thin font-sans md:text-xl">
                    {" "}
                    {work.time}{" "}
                  </span>
                </h3>
              </div>
              <div className="requirements-container absolute top-0 left-0 right-0 w-full h-[fixed] flex flex-col justify-between items-start lg:h-[400px] lg:w-[260px] opacity-0 translate-x-0 group-hover:transition-transform group-hover:opacity-100 group-hover:translate-x-20 group-hover:bg-zinc-950 group-hover:rounded-md group-hover:shadow-2xl group-hover:duration-700 group-hover:ease-in-out duration-700 ease-in-out group-hover:border-b-8 group-hover:border-b-lime-800">
                <ul className="w-full list-disc text-stone-500 text-sm font-thin font-lato md:text-base flex flex-col justify-center items-start px-3 md:px-4 gap-y-[5px] flex-1">
                  {work.lists.map((list, listIndex) => (
                    <li key={listIndex}>{list}</li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button text="Order Now" icon={faShoppingCart} className="mb-4" />
                </Link>
              </div>
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

export default PriceTabs;
