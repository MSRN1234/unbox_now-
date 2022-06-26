import "./Header.css";
// import green from "./Image/shopingcart.png";
import Want from "./Images/wanttotry.png";

export default function Greenboard() {
  return (
    <div className="greenBoard">
      <div>
        <img src={Want} className="inimg" alt="Want" />
      </div>
      <p className="shareus">
        Share us your requirements, likes and interests! We will curate a
        customized unboxing experience for you!
      </p>
      <div className="btngroup">
        <button className="sharebtn">Send a sample</button>
        <button
          className="enquirebtn"
          style={{ color: "#225779", fontWeight: "500" }}
        >
          Enquire now
        </button>
      </div>
    </div>
  );
}
