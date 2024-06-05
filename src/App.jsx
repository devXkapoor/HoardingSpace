import { BrowserRouter, Route, Routes } from "react-router-dom";
import Service from "./components/services/Service";
import AboutUs from "./components/about/AboutUs";
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
