import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop";
import Contact from "./components/contact/Contact";
import Header from "./components/global/Header";
import Footer from "./components/footer/Footer";
import City from "./components/city-listing/City";
import Login from "./components/auth/user/Login";
import SignUp from "./components/auth/user/SignUp";
import ItemInfo from "./components/cart/ItemInfo";
import FinalCart from "./components/cart/FinalCart";
import AdvertiserSignUp from "./components/auth/advertisers/AdvertiserSignUp";
import AdvertiserLogin from "./components/auth/advertisers/AdvertiserLogin";
import LoginType from "./components/auth/LoginType";
import Order from "./components/orders/Order";
import AllServices from "./components/services/AllServices";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase.config";
import { doc, getDoc } from "firebase/firestore";
import UpdateProfile from "./components/auth/user/UpdateProfile";

function App() {
  const [inCompleteAccount, setIncomplete] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          const userDocRef = doc(db, "UserData", currentUser.uid);
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            console.log("User data:", userDocSnap.data());
            setIncomplete(false);
          } else {
            console.log("User data does not exist");
            setIncomplete(true);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        console.log("No user is signed in");
        setIncomplete(false);
      }
    });

    // Clean up the listener on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="max-w-[1920px]">
      <BrowserRouter>
        <Header />
        <Routes>
          {inCompleteAccount ? (
            <Route path="*" element={<UpdateProfile />} />
          ) : (
            <>
              <Route path="/update-profile" element={<UpdateProfile />} />
              <Route path="/" element={<Home />} />
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
              <Route path="/services" element={<AllServices />} />
            </>
          )}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
