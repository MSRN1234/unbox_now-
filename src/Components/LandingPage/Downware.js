import "./Landing.css";
import Towhom from "./Image/towhom.png";
import whodoyou from "./Image/Clients.jpg";
import Meeting from "./Image/Meeting.png";
import Clon from "./Image/Clon.png";
import Stars from "./Image/star.png";

function App() {
  return (
    <div className="downware">
      <div className="row">
        <div className="col-6 comrades">
          <img src={whodoyou} alt="whodoyou" />
          <div className="Upon">
            <img src={Meeting} alt="Meeting" />
          </div>
          <div className="Clon">
            <img src={Clon} alt="Clone" />
          </div>
          <div style={{ marginTop: "345px", marginLeft: "40px" }}>
            <a href="/">
              <span
                style={{
                  backgroundColor: "#DDF2FF",
                  padding: "5px",
                  borderRadius: "3px",
                  color: "black",
                }}
                className="bi bi-arrow-left"
              ></span>
            </a>
            <a href="/">
              <span
                style={{
                  backgroundColor: "#DDF2FF",
                  padding: "5px",
                  borderRadius: "3px",
                  marginLeft: "10px",
                  color: "black",
                }}
                className="bi bi-arrow-right"
              ></span>
            </a>
          </div>
        </div>

        <div className="col-6 comrades-side">
          <div className="Singlestar">
            <img src={Stars} alt="Stars" />
          </div>
          <div className="whodo">
            <img src={Towhom} alt="towhom" height={150} width={540} />
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

export default App;
