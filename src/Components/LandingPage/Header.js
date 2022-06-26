import Enquire from "./Enquire";
import "./Header.css";
import Happiness from "./Images/contentLogo.png";
import HappinessMob from "./Images/happiness_mob.png";

import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="Box">
      <div className="Header ">
        <div className="common container">
          <Navbar />
          <div className="center">
            <img src={Happiness} alt="Image" className="Image1" />
            <img src={HappinessMob} alt="Image" className="Image2" />
          </div>
          <div className="paramain">
            <p>
              It is always a right reason to gift someone!We help you
              <br /> Create a truly memorable gifting experience!What are you
              <br />
              Waiting for?
            </p>
          </div>
          <div className="content">
            <button className="explorebtn">
              Explore
              <span className="explorebtn1 bi bi-arrow-right-short"></span>
            </button>
            <div className="Enmodal">
              <Enquire />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
