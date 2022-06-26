import React from "react";
import logo from "./Images/Logo2.png";

export default function Footer() {
  return (
    <div className="footer-main">
      <div className="footer-section row">
        <div className="logoF col-3" id="Logo">
          <img src={logo} alt="logo" />
          <p className="mt-4">
            It is always a right reason to gift <br /> someone! We help you
            create a <br /> truly memorable gifting experience! <br /> What are
            you waiting for?
          </p>
        </div>
        <div className="col-2 section2" id="section1">
          <h5>Categories</h5>
          <div className="list-item1">
            <div>Welcome kit</div>
            <div>Anniversary</div>
            <div>Occasion-based</div>
            <div>Festive</div>
            <div>General</div>
            <div>Eco-friendly</div>
          </div>
        </div>
        <div className="col-2 section2" id="section2">
          <h5>Company</h5>
          <div className="list-item2">
            <div>Career</div>
            <div>About</div>
            <div>Our team</div>
          </div>
        </div>
        <div className="col-2 section2" id="section3">
          <h5>Support</h5>
          <div className="list-item3">
            <div>FAQs</div>
            <div>Support</div>
            <div>Feedback</div>
            <div>Enquiry</div>
            <div>Catalog</div>
          </div>
        </div>
        <div className="col-3 section2" id="MsgSection">
          <h5>Drop a message!</h5>
          <div>
            <form className="forminput">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control"
                />
              </div>

              <input
                type="text"
                placeholder="Email id"
                className="form-control"
              />
              <div>
                <textarea
                  rows={5}
                  cols="40"
                  placeholder=" Write your message"
                ></textarea>
              </div>
              <div className="submitt">
                <button className="btn" style={{ color: "white" }}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright &copy; 2022 Unboxnow Inc. All rights reserved</p>
      </div>
    </div>
  );
}
