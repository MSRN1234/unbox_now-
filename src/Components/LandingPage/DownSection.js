import "./Header.css";
import lowmoq from "./Images/lowmoq (1).png";
import shirt from "./Images/shirt.png";
import hamper from "./Images/hamper.png";
import yourchoice from "./Images/yourchoice.png";
import yourchoice2 from "./Images/choice_mob.png";

export default function DownSection() {
  return (
    <>
      <div className="Choice">
        <img alt="yourchoice" src={yourchoice} className="ChoiceImg" />
        <img alt="yourchoice" src={yourchoice2} className="ChoiceImg2" />
      </div>

      <div className="Downware1">
        <div className="box1">
          <div className="circle1">
            <img className="imgcir1" alt="lowmoq" src={lowmoq} />
            <div className="text">
              <a href="/">Low MOQ ?</a>
            </div>
            <div className="communderline"></div>
            <p className="text">
              Not to worry, we
              <br /> will work it out
            </p>
          </div>
        </div>

        <div className="box2">
          <div className="circle2">
            <img className="imgcir2" alt="shirt" src={shirt} />
            <div className="text">
              <a href="/">Brand Customization ?</a>
            </div>
            <div className="communderline"></div>
            <p className="text">
              Customizing products <br /> just for your brand
            </p>
          </div>
        </div>

        <div className="box3">
          <div className="circle3">
            <img className="imgcir3" alt="hamper" src={hamper} />
            <div className="text">
              <a href="/"> Need hampers ?</a>
            </div>
            <div className="communderline"></div>
            <p className="text">
              Customize your hamper? <br />
              We take care of it
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
