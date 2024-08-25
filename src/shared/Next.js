
// CustomNextButton.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const CustomNextButton = ({ onClick, className }) => (
  <button
    className={`bg-tomato  text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-lg  
    hover:border hover:bg-transparent hover:border-lime-800  outline-none  focus:bg-transparent focus:border-lime-800 focus:outline
    border-r-8  border-r-lime-800
     ${className}`}
    onClick={onClick}
  >
    <FontAwesomeIcon icon={faChevronRight} />
  </button>
);

export default CustomNextButton;
