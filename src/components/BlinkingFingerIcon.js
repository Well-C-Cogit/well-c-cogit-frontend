import React from "react";
import "./BlinkingFingerIcon.css";

function BlinkingFingerIcon() {
  const finger = "/images/ic_finger.PNG";

  return (
    <div className="blinking-finger">
      <img src={process.env.PUBLIC_URL + finger} alt="blinking-finger-img"/>
    </div>
  );
}

export default BlinkingFingerIcon;
