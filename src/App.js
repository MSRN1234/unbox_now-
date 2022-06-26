import "./App.css";
import Header from "./Components/LandingPage/Header";
import Content from "./Components/LandingPage/Content";
import Section from "./Components/LandingPage/Section";
import CartSection from "./Components/LandingPage/CartSection";
import Footer from "./Components/LandingPage/Footer";
import Comrade from "./Components/LandingPage/Comrade";
import DownSection from "./Components/LandingPage/DownSection";
import Greenboard from "./Components/LandingPage/Greenboard";

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Section />
      <CartSection />
      <Comrade />
      <DownSection />

      <Greenboard />
      <Footer />
    </div>
  );
}

export default App;
