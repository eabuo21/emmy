import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Button = ({
  text = "Get Resume",
  icon = faChevronDown,
  onClick,
  className = "",
  iconClassName = "",
  buttonStyles = {},
  iconStyles = {},
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-[190px] h-[50px] p-2 flex flex-row gap-x-2 justify-center items-center text-stone-200 font-bold font-sans text-base rounded-full border-r-8 border-r-lime-800 shadow-stone-700 bg-tomato border border-neutral hover:bg-transparent group hover:transition-colors hover:duration-700 hover:ease-in-out transition-colors duration-700 ease-in-out ${className}`}
      style={buttonStyles}
    >
      {text}
      <FontAwesomeIcon
        icon={icon}
        className={`font-black text-white animate-bounce group-hover:animate-none group-hover:text-lime-800 ${iconClassName}`}
        style={iconStyles}
      />
    </button>
  );
};

export default Button;
