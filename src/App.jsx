import { BrowserRouter, Route, Routes } from "react-router-dom";
import Service from "./components/services/Service";
import AboutUs from "./components/about/AboutUs";
import ContactUs from "./components/contact/ContactUs";
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
