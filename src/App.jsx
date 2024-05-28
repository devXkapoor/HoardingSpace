import { BrowserRouter, Route, Routes } from "react-router-dom";
import Service from "./components/services/Service";
import AboutUs from "./components/about/AboutUs";
import ContactUs from "./components/contact/ContactUs";
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
