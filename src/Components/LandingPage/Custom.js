import "./Landing.css";
import lowmoq from "./Image/lowmoq (1).png";
import shirt from "./Image/shirt.png";
import hamper from "./Image/hamper.png";
import yourchoice from "./Image/yourchoice.png";
import GiftBox from "./Image/GiftBox.png";
import Spring from "./Image/Spring.png";

export default function Custom() {
  return (
    <>
      <div className="GiftBox">
        <img src={GiftBox} alt="GiftBox" />
      </div>
      <div className="spring">
        <img src={Spring} alt="Spring" />
      </div>
      <div>
        <img alt="yourchoice"
          src={yourchoice}
          style={{
            height: "95px",
            width: "950px",
            marginLeft: "20%",
            marginTop: "40px",
          }}
        />
      </div>
      <div className="Downware1">
        <div className="box1">
          <div className="circle1">
            <img className="imgcir1" alt="lowmoq" src={lowmoq} />
          </div>
          <div className="circle2">
            <img className="imgcir2" alt="shirt" src={shirt} />
          </div>
          <div className="circle3">
            <img className="imgcir3" alt="hamper" src={hamper} />
          </div>
        </div>

        <div className="box2">
          <a
            href="/"
            style={{
              marginTop: "2px",
              fontWeight: "bolder",
              color: "#225779",
              textDecoration: "auto",
              marginLeft: "332px",
            }}
          >
            {" "}
            Low MOQ ?
          </a>
          <a
            href="/"
            style={{
              marginTop: "2px",
              fontWeight: "bolder",
              color: "#225779",
              textDecoration: "auto",
              marginLeft: "270px",
            }}
          >
            {" "}
            Brand Customization ?
          </a>
          <a
            href="/"
            style={{
              marginTop: "2px",
              fontWeight: "bolder",
              color: "#225779",
              textDecoration: "auto",
              marginLeft: "272px",
            }}
          >
            {" "}
            Need hampers ?
          </a>
        </div>

        <div className="box3">
          <div
            className="communderline"
            style={{ marginLeft: "353px" }}
          ></div>
          <div
            className="communderline"
            style={{ marginLeft: "353px" }}
          ></div>
          <div
            className="communderline"
            style={{ marginLeft: "383px" }}
          ></div>
        </div>

        <div className="box4">
          <p className="crcl1text">
            Not to worry, we
            <br /> will work it out
          </p>
          <p className="crcl2text">
            Customizing products <br /> just for your brand
          </p>
          <p className="crcl3text">
            Customize your hamper? <br />
            We take care of it
          </p>
        </div>
      </div>
    </>
  );
}
