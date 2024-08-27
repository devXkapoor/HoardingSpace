import { BrowserRouter, Route, Routes } from "react-router-dom";
import Service from "./components/services/Service";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop";
import Contact from "./components/contact/Contact";
import Header from "./components/global/Header";
import Footer from "./components/footer/Footer";
import City from "./components/city-listing/City";
import Login from "./components/auth/user/Login";
import SignUp from "./components/auth/user/SignUp";
import AdvertiseItem from "./components/home/AdvertiseItem";
import ItemInfo from "./components/cart/ItemInfo";
import FinalCart from "./components/cart/FinalCart";
import Cart from "./components/cart/Cart";
import AdvertiserSignUp from "./components/auth/advertisers/AdvertiserSignUp";
import AdvertiserLogin from "./components/auth/advertisers/AdvertiserLogin";
import LoginType from "./components/auth/LoginType";
import Order from "./components/orders/Order";

function App() {
  return (
    <>
      <div className=" max-w-[1920px]">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/services" element={<Service />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/shop/:id" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart/:id" element={<ItemInfo />} />

            <Route path="/carts" element={<FinalCart />} />

            <Route path="/city" element={<City />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/advertiserSignup" element={<AdvertiserSignUp />} />
            <Route path="/advertiserLogin" element={<AdvertiserLogin />} />
            <Route path="/loginType" element={<LoginType />} />
            <Route path="/orders" element={<Order />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
