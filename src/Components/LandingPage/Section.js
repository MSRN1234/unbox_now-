import React from "react";
import Choose from "./Images/ChooseUnbox2.png";
import Plenty from "./Images/plenty options.png";
import UnboxC from "./Images/unbox_mob.png";
import Plenty2 from "./Images/options_mob.png";
import fast from "./Images/fast-delivery.png";
import support from "./Images/support.png";
import verified from "./Images/verified.png";
import India from "./Images/india.png";
import "./Header.css";

export default function Section() {
  return (
    <div>
      <div className="choose">
        <img src={Choose} alt="Choose" className="Img1" />
        <img src={UnboxC} alt="UnboxC" className="Img2" />
      </div>

      <div className="rowsE">
        <div className="fastd">
          <div>
            <div>
              <img src={fast} alt="fast" className="FastDelivery" />
            </div>
            <div className="contents">
              <h6>Fast delivery</h6>
              <div className="communderline"></div>
              <p className="Pfamily">
                Sending in some real quick appreciation <br /> shouldn't be a
                problem with UnBox
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src={India} alt="India" className="FastDelivery" />
            </div>
            <div className="contents">
              <h6>Pan India fullfillment</h6>
              <div className="communderline"></div>
              <p className="Pfamily">
                No matter where your employees <br /> are, near or far, we've
                got it covered
              </p>
            </div>
          </div>
        </div>

        <div className="VerifiedBrands">
          <div>
            <div>
              <img src={verified} alt="support" className="FastDelivery" />
            </div>
            <div className="contents">
              <h6>Verified brands</h6>

              <div className="communderline "></div>

              <p className="Pfamily">
                Brands that are totally gift worthy <br /> with your branding
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src={support} alt="support" className="FastDelivery" />
            </div>
            <div className="contents">
              <h6>24*7 services</h6>
              <div className="communderline"></div>
              <p className="Pfamily">
                Dreaming of gifts at midnight? We <br />
                hear you, loud & clear 24*7
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="plenty">
        <img src={Plenty} alt="plenty" className="Plenty1" />
        <img src={Plenty2} alt="plenty" className="Plenty2" />
      </div>

      <div className="btn-toolbar arrangebtn">
        <button className="btn">New joinee-kits</button>
        <button className="btn">Anniversary</button>
        <button className="btn">Occasion-based</button>
        <button className="btn">Festive</button>
        <button className="btn">General</button>
        <button className="btn">Eco-friendly</button>
      </div>
      <div className="para">
        <p>Umpteen options to choose from in all price range!</p>
      </div>
    </div>
  );
}
