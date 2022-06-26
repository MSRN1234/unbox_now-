import React from "react";
import shoe from "./Images/Shoe.png";
import dress from "./Images/dress.png";
import cake from "./Images/cake.png";
import cloth from "./Images/men clothes.png";
import teddy from "./Images/teddy.png";
import flower from "./Images/flowers.png";
import watch from "./Images/watch.png";
import batman from "./Images/lego Batman.png";
import "./Header.css";
import gift from "./Images/gift3.png";

export default function CartSection() {
  return (
    <div>
      <div className="cartsection">
        <div className="cards d-flex flex-wrap flex-row">
          <div
            className="card cardd"
            style={{
              border: "none",
              backgroundColor: "#C9FFE2",
            }}
          >
            <img className="card-image-top" src={shoe} alt="shoe" />
            <a
              id="btnshow"
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
              border: "none",
              backgroundColor: "#c9ffe2",
            }}
          >
            <img className="card-image-top" src={dress} alt="dress" />
          </div>
          <div
            className="card CartCake"
            style={{
              border: "none",
              backgroundColor: "#C9FFE2",
            }}
          >
            <img className="card-image-top" src={cake} alt="cake" />
          </div>
          <div
            className="card Cloth"
            style={{
              border: "none",
              backgroundColor: "#c9ffe2",
            }}
          >
            <img className="card-image-top" src={cloth} alt="cloth" />
          </div>
        </div>

        <div className="cardss d-flex flex-wrap flex-row">
          <div
            className="card Teddy"
            style={{
              border: "none",
              backgroundColor: "#c9ffe2",
            }}
          >
            <img className="card-image-top" src={teddy} alt="teddy" />
          </div>

          <div
            className="card Flower"
            style={{
              border: "none",
              backgroundColor: "#C9FFE2",
            }}
          >
            <img className="card-image-top" src={flower} alt="flower" />
          </div>

          <div
            className="card Watch"
            style={{
              border: "none",
              backgroundColor: "#c9ffe2",
            }}
          >
            <img className="card-image-top" src={watch} alt="watch" />
          </div>

          <div
            className="card Batman"
            style={{
              border: "none",
              backgroundColor: "#C9FFE2",
            }}
          >
            <img className="card-image-top" src={batman} alt="batman" />
          </div>
        </div>
      </div>

      <div className="explo">
        <a href="/" className="btnlink">
          Explore more <span className="bi bi-arrow-right-short"></span>
        </a>
      </div>
    </div>
  );
}
