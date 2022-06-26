import React from "react";
import plenty from "./Image/plenty options.png";
import shoe from "./Image/Shoe.png";
import dress from "./Image/dress.png";
import cake from "./Image/cake.png";
import cloth from "./Image/men clothes.png";
import teddy from "./Image/teddy.png";
import flower from "./Image/flowers.png";
import watch from "./Image/watch.png";
import batman from "./Image/lego Batman.png";
import "./Center.css";
import Stars from "./Image/stars.png";
import gift from "./Image/gift3.png";

export default function Center() {
  return (
    <div>
      <div className="plenty">
        <img src={plenty} alt="plenty" />
      </div>
      <div className="stars">
        <img src={Stars} alt="Stars" />
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
      <div
        className="cards d-flex flex-wrap flex-row"
        style={{
          display: "flex",
          marginLeft: "12%",
        }}
      >
        <div
          className="card cardd"
          style={{
            width: "16.2rem",
            height: "12.5rem",
            border: "none",
            backgroundColor: "#C9FFE2",
          }}
        >
          <img className="card-image-top" src={shoe} alt="shoe" />
          <a
            href="/"
            className=" btn btn-info card-header"
            style={{
              position: "absolute",
              marginTop: "198px",
              width: "16.2rem",
              height: "3rem",
              fontSize: "1.2rem",
              backgroundColor: "#225779",
            }}
          >
            Show now
          </a>
        </div>
        <div
          className="card dressImage"
          style={{
            width: "261px",
            height: "165px",
            border: "none",
            backgroundColor: "#c9ffe2",
          }}
        >
          <img className="card-image-top" src={dress} alt="dress" />
        </div>
        <div
          className="card cardd"
          style={{
            width: "260px",
            height: "230px",
            border: "none",
            backgroundColor: "#C9FFE2",
          }}
        >
          <img className="card-image-top" src={cake} alt="cake" />
        </div>
        <div
          className="card Cloth"
          style={{
            width: "261px",
            height: "165px",
            border: "none",
            backgroundColor: "#c9ffe2",
          }}
        >
          <img className="card-image-top" src={cloth} alt="cloth" />
        </div>
      </div>

      <div
        className="cards d-flex flex-wrap flex-row"
        style={{ display: "flex", marginLeft: "12%" }}
      >
        <div
          className="card Teddy"
          style={{
            width: "261px",
            height: "165px",
            border: "none",
            backgroundColor: "#c9ffe2",
          }}
        >
          <img className="card-image-top" src={teddy} alt="teddy" />
        </div>

        <div
          className="card Flower"
          style={{
            width: "260px",
            height: "230px",
            border: "none",
            backgroundColor: "#C9FFE2",
          }}
        >
          <img className="card-image-top" src={flower} alt="flower" />
        </div>

        <div
          className="card Watch"
          style={{
            width: "261px",
            height: "165px",
            border: "none",
            backgroundColor: "#c9ffe2",
          }}
        >
          <img className="card-image-top" src={watch} alt="watch" />
        </div>

        <div
          className="card Batman"
          style={{
            width: "260px",
            height: "230px",
            border: "none",
            backgroundColor: "#C9FFE2",
          }}
        >
          <img className="card-image-top" src={batman} alt="batman" />
        </div>
        <div className="gift">
          <img src={gift} alt="gift" />
        </div>
      </div>

      <div className="explo" style={{ marginTop: "15px" }}>
        <a href="/" className="btnlink">
          Explore more <span className="bi bi-arrow-right-short"></span>
        </a>
      </div>
    </div>
  );
}
