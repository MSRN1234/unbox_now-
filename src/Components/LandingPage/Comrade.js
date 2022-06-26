import "./Header.css";
import Towhom from "./Images/towhom.png";
import Towhom2 from "./Images/choose_mob.png";
import whodoyou from "./Images/Clients.jpg";
import Meeting from "./Images/Meeting.png";
import Clon from "./Images/Clon.png";
import Stars from "./Images/star.png";

function Comrade() {
  return (
    <div className="downware">
      <div className="row">
        <div className="col-6 comrades" id="comrades">
          <img src={whodoyou} alt="whodoyou" />
          <div className="Upon">
            <img src={Meeting} alt="Meeting" />
          </div>
          <div className="Clon">
            <img src={Clon} alt="Clone" />
          </div>
          <div className="Buttons">
            <a href="/">
              <span className="bi bi-arrow-left"></span>
            </a>
            <a href="/">
              <span className="bi bi-arrow-right"></span>
            </a>
          </div>
        </div>

        <div className="col-6 comrades-side" id="paragraph">
          <div className="Singlestar">
            <img src={Stars} alt="Stars" />
          </div>
          <div className="whodo">
            <img src={Towhom} alt="towhom" className="imgN1" />
            <img src={Towhom2} alt="towhom" className="imgN2" />
          </div>
          <div className="box-example">
            <p style={{ marginBottom: "1px" }}>
              Choose your gifting person, may it be your new
            </p>
            <p style={{ marginBottom: "1px" }}>
              employee, best friend, colleague, father or mother! We
            </p>
            <p>have it all that gives everyone an Unboxing experience!</p>
          </div>
          <div>
            <a href="/" className="box-ex">
              Explore <span className="bi bi-arrow-right-short"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comrade;
