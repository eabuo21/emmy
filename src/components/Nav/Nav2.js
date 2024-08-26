// Navigation.js
import React, { useEffect } from "react";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faPortrait } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faFacebook,
  faXTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Nav2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menu2Open, setMenu2Open] = useState(false);

  const navigationLinks = [
    { name: "About", to: "/about" },

    { name: "Services", to: "/services" },
    { name: "Works", to: "/works" },
    { name: "Contact", to: "/contact" },
  ];

  const socials = [
    {
      icon: faPortrait,
      path: "",
    },
    {
      icon: faLinkedinIn,
      path: "",
    },
    {
      icon: faFacebook,
      path: "",
    },
    {
      icon: faXTwitter,
      path: "",
    },
    {
      icon: faGithub,
      path: "",
    },
  ];

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [menuOpen]);

  return (
    <Disclosure
      as="nav"
      className=" bg-black  p-2   flex flex-row   px-5 mt-8  lg:px-[6rem]  h-20   sticky top-0 left-0 right-0 z-50 "
    >
      {({ open }) => (
        <>
          <div className=" mx-auto grid grid-cols-2   md:grid-cols-3 items-center justify-evenly w-full  ">
            {/* Logo */}
            <div className="flex-shrink-0 text-white  mr-auto  flex flex-row gap-x-5">
              {socials.map((items, index) => (
                <Link
                  key={index}
                  href={items.path}
                  target="_blank"
                  className="text-white hover:text-[#ec6952]  "
                >
                  <FontAwesomeIcon icon={items.icon} className="" />
                </Link>
              ))}
            </div>

            {/* Navigation Links */}
            <div className=" desktop-navigation   hidden   mx-auto  md:flex lg:flex-row space-x-4  justify-start  items-center  ">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.to}
                  className="text-white hover:text-[#ec6952] font-thin  text-base "
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className=" hidden   md:flex  justify-start items-start  bg-transparent shadow-2xl  w-[fixed]  border border-[#ec6952] rounded-md p-1 ml-auto ">
              <Link href="#">
                <section className="button-section  font-thin    w-[100px] rounded-md flex flex-col justify-center items-center p-2 text-base  animate-pulse  text-white  bg-transparent hover:bg-[#ec6952]  ">
                  Hire Me
                </section>
              </Link>
            </div>

            {/* Hamburger Menu (visible on large screens) */}
            {/* Mobile Menu Button (hidden on large screens) */}
            <div className="md:hidden ml-auto  mr-5  text-2xl ">
              <Disclosure.Button
                className="text-white"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span className="sr-only">Open Menu</span>
                <FontAwesomeIcon icon={faBars} className="" />
              </Disclosure.Button>
            </div>
          </div>

          {/* Mobile Menu (hidden on large screens) */}
          <Transition
            show={menuOpen}
            as={Fragment}
            enter="transition-transform  duration-700 ease-in-out "
            enterFrom="-translate-y-full "
            enterTo="translate-y-0"
            leave="transition-transform  duration-700 ease-in-out "
            leaveFrom="translate-y-0"
            leaveTo="-translate-y-full"
          >
            <Disclosure.Panel className="md:hidden  bg-zinc-800  mt-[4rem]  bg-opacity-90  h-[400px] fixed inset-0 z-50 w-auto flex flex-col justify-center items-center gap-4 text-2x transition-transform  duration-700 ease-in-out l">
              <div className="flex flex-col  justify-center items-center space-y-4 p-4">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.to}
                    className="text-white hover:text-stone-300 font-lato font-thin  text-xl "
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="    lg:flex  justify-start items-start  bg-transparent shadow-2xl  w-[fixed]  border border-[#ec6952] rounded-md p-1 ml-auto ">
                  <Link href="#" onClick={() => setMenuOpen(false)}>
                    <section className="button-section  font-thin    w-[100px] rounded-md flex flex-col justify-center items-center p-2 text-base  animate-pulse  text-white  bg-transparent hover:bg-[#ec6952]  ">
                      Hire Me
                    </section>
                  </Link>
                </div>

                <button
                  onClick={() => setMenuOpen(false)}
                  className="close-button text-4xl text-white border-2 border-grey  p-1"
                >
                  X
                </button>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default Nav2;
