import { Route, Routes } from "react-router-dom";
import Nav from "./layout/Nav.jsx"
import AboutUs from "./pages/AboutUs.js";
import Contacts from "./pages/Contacts.js";
import FAQ from "./pages/FAQ.js";
import Portfolio from "./pages/Portfolio.js";
import Products from "./pages/Products.js";
import Services from "./pages/Services.js";
import Calculation from "./pages/Calculation.js";
import MakeRequest from "./pages/MakeRequest.js";
import Home from "./pages/Home.js";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/faq" element={<FAQ />}/>
        <Route path="/contacts" element={<Contacts />}/>
        <Route path="/calculation" element={<Calculation />}/>
        <Route path="/make-request" element={<MakeRequest />}/>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
