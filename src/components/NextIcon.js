import React from "react";
import "./NextIcon.css";
import { IoIosArrowDroprightCircle } from "react-icons/io";

function NextIcon({ onClick }) {
  return (
    <div className="next-icon-box" onClick={onClick}>
      <IoIosArrowDroprightCircle className="next-icon"/>
    </div>
  );
}

export default NextIcon;
