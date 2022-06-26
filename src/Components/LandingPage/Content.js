import React from "react";
import "./Header.css";
import Experience from "./Images/Gifting Exp.png";
import videoframe from "./Images/video frame.png";
import playbutton from "./Images/playicon.png";
import Exp from "./Images/exp works_mob.png";

export default function Content() {
  return (
    <div>
      <div className="VideoFrame">
        <img src={Experience} alt="Experience" className="Exp" />
        <img src={Exp} alt="Experience" className="Exp2" />
        <div>
          <img src={videoframe} alt="videoframe" className="videoframe" />
          <img src={playbutton} alt="playicon" className="playicon" />
        </div>
      </div>
    </div>
  );
}
