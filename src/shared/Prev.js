// CustomPrevButton.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const CustomPrevButton = ({ onClick, className }) => (
  <button
    className={` text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-lg hover:bg-transparent
    bg-tomato  hover:border hover:border-lime-800 outline-none  focus:bg-transparent  focus:border-lime-800  border-l-8 border-l-lime-800
     ${className}`}
    onClick={onClick}
  >
    <FontAwesomeIcon icon={faChevronLeft} />
  </button>
);

export default CustomPrevButton;
