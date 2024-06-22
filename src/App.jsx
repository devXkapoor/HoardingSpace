import { BrowserRouter, Route, Routes } from "react-router-dom";
import Service from "./components/services/Service";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop";
import Contact from "./components/contact/Contact";
import Header from "./components/global/Header";
import Footer from "./components/footer/Footer";
import Cart from "./components/cart/Cart";
import City from "./components/city-listing/City";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";

function App() {
  return (
    <>
      {/* <div className="flex flex-col items-center max-w-[1920px]"> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/services" element={<Service />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/city" element={<City />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* </div> */}
    </>
  );
}

export default App;
