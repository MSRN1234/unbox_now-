import Header from "./Header";
import Content from "./Content";
import Section from "./Section";
import CartSection from "./CartSection";
import Footer from "./Footer";
import Comrade from "./Comrade";
import DownSection from "./DownSection";
import Greenboard from "./Greenboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={[
              <Header />,
              <Content />,
              <Section />,
              <CartSection />,
              <Comrade />,
              <DownSection />,
              <Greenboard />,
              <Footer />,
            ]}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default LandingPage;
