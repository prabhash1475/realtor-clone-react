import React from "react";
import lodder from "../assets/svg/lodder.svg";

export const Spinner = () => {
  return (
    <div className=" flex fixed justify-center items-center top-0 bottom-0 right-0 left-0 z-50   ">
      <div>
        <img src={lodder} alt="lodding..." className="h-54" />
      </div>
    </div>
  );
};
