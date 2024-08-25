import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export default function Profile() {
  var exp = [
    {
      icon: faBookBookmark,
      date: "2023- Present",
      company: "Tongston Group",
      position: "Web Developer & IT Graduate Officer",
    },
    {
      icon: faBookBookmark,
      date: "2022- 2023",
      company: "CoffeyCrown HCS ",
      position: "Web Developer & IT Support Officer",
    },
    {
      icon: faBookBookmark,
      date: "2021 - 2022",
      company: "BJ-Tech",
      position: "Web Developer & Technical Trainer",
    },
    {
      icon: faBookBookmark,
      date: "Mar 2021 - Nov 2021",
      company: "NIPC",
      position: "Tech Support Intern",
    },
  ];

  var edu = [
    {
      icon: faGraduationCap,
      date: "2017 - 2023",
      school: "Unicross Calabar",
      degree: "B.Sc Computer Science",
    },
    {
      icon: faGraduationCap,
      date: "2014 - 2015",
      school: "Sadem Csc Inst Aks",
      degree: "Diploma System Admin",
    },
    {
      icon: faGraduationCap,
      date: "Jan 2024 - June 2024",
      school: "Alison",
      degree: "Certificate React-js Fundamentals",
    },
    {
      icon: faGraduationCap,
      date: "Jan 2024 - June 2024",
      school: "Coursera",
      degree: "Google Pro  Workspace Admin",
    },
  ];

  return (
    <div className="grid grid-cols-1 justify-center items-center w-full h-[fixed]      lg:grid-cols-2 mb-9">
      <section className="profiler-carousel-container  p-6  flex flex-col gap-y-[20px] justify-start  items-start px-2    w-full h-[fixed] bg-neutral-900 bg-opacity-65  shadow-[40px]  rounded-[45px]  mx-auto    md:px-[2rem] md:w-[550px]  md:h-[fixed] md:p-3 ">
        <h2 className="text-xl text-stone-300 font-thin  px-2  mt-3  font-lato   md:text-4xl  md:px-3 ">
          Experience
        </h2>
        <section className=" flex flex-col  gap-y-5 justify-start items-start px-2   md:px-3 ">
          {exp.map((cards, index) => (
            <div
              key={index}
              className="flex flex-row gap-x-5 justify-start items-center p-1 m-3 pb-2  w-[400px] h-[90px] border-b  md:pb-6  border-b-neutral "
            >
              <section className="icons-container bg-gray-300 flex flex-col justify-center items-center p-2 rounded-md w-[60px] h-[60px]  shadow-2xl ">
                <FontAwesomeIcon
                  icon={cards.icon}
                  className="text-tomato text-xl font-thin "
                />
              </section>
              <section className="contents-container  flex flex-col gap-y-2 justify-center  items-start m-6 ">
                <h6 className="text-base text-stone-500 font-lato ">
                  {cards.date}
                </h6>
                <h5 className="text-xl text-stone-300 font-thin font-lato md:text-xl">
                  {cards.company}
                </h5>
                <p className="text-stone-500 font-thin text-base font-sans  ">
                  {cards.position}
                </p>
              </section>
            </div>
          ))}
        </section>
      </section>

      <section className="profiler-carousel-container  p-6  flex flex-col gap-y-[20px] justify-start  items-start px-2    w-full h-[fixed] bg-neutral-900 bg-opacity-65  shadow-[40px]  rounded-[45px]  mx-auto    md:px-[2rem] md:w-[550px]  md:h-[fixed] md:p-3 ">
        <h2 className="text-xl text-stone-300 font-thin  px-2  mt-3  font-lato   md:text-4xl  md:px-3 ">
          Education
        </h2>
        <section className=" flex flex-col  gap-y-5 justify-start items-start px-2   md:px-3 ">
          {edu.map((cards, index) => (
            <div
              key={index}
              className="flex flex-row gap-x-5 justify-start items-center p-1 m-3 pb-2  w-[400px] h-[90px] border-b  md:pb-6  border-b-neutral "
            >
              <section className="icons-container bg-gray-300 flex flex-col justify-center items-center p-2 rounded-md w-[60px] h-[60px]  shadow-2xl ">
                <FontAwesomeIcon
                  icon={cards.icon}
                  className="text-tomato text-xl font-thin "
                />
              </section>
              <section className="contents-container  flex flex-col gap-y-2 justify-center  items-start m-6 ">
                <h6 className="text-base text-stone-500 font-lato ">
                  {cards.date}
                </h6>
                <h5 className="text-xl text-stone-300 font-thin font-lato md:text-xl">
                  {cards.school}
                </h5>
                <p className="text-stone-500 font-thin text-base font-sans  ">
                  {cards.degree}
                </p>
              </section>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
}
