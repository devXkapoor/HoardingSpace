import React, { useState, useEffect } from "react";
import {
  getDocs,
  getDoc,
  collection,
  deleteDoc,
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db, auth } from "../../../firebase.config";
import Text from "../global/Text";
import deleat from "../../assets/global/DeleatIcon.svg";
import { onAuthStateChanged } from "firebase/auth";
import CartTotal from "./CartTotal";
import PageType from "../global/PageType";
import calender from "../../assets/CalenderIcon.svg";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { data } from "autoprefixer";
import Button from "../global/Button";

const FinalCart = () => {
  const [cartdata, setCartData] = useState([]);
  const [user, setuser] = useState({});
  const [userData, setuserData] = useState({});
  let [color, setColor] = useState("#ffba08");
  let [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // const { id } = useParams(); //param got id from url so url change first then we grab id from useparams

  useEffect(() => {
    onAuthStateChanged(auth, (currentuser) => {
      setuser(currentuser);
    });
  }, []);

  useEffect(() => {
    if (user) {
      fetchData();
      getUserData();
    }
  }, [user]);

  console.log(user);

  const getUserData = async () => {
    try {
      const docRef = doc(db, "UserData", `${user.uid}`);
      const docSnap = await getDoc(docRef);

      setuserData(docSnap.data());
    } catch (err) {
      console.log("Erros in getting userdata", err);
    }
  };

  const fetchData = async () => {
    let datalist = [];
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, `${user.uid}`));
      querySnapshot.forEach((doc) => {
        datalist.push({ id: doc.id, ...doc.data() });
      });
      // console.log("datalist", user.uid, datalist);
      // console.log("function working");
      setCartData(datalist);
      setLoading(false);
    } catch (err) {
      toast.error(err);
      // console.log(err);
    }
  };
  const DeleatItem = async (id) => {
    try {
      await deleteDoc(doc(db, `${user.uid}`, id));
      toast.success("Item deleated successfully");
      // setLoading(false);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleatCart = async (id) => {
    try {
      await deleteDoc(doc(db, id));
      toast.success("Item deleated successfully");
      // setLoading(false);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  console.log("Got userdata", userData);

  const CreateOrder = async (cartdata, userData) => {
    try {
      const ordersCollectionRef = collection(db, "Orders");
      // Create a new order document with auto-generated ID
      const newOrderDocRef = doc(ordersCollectionRef, `User${user.uid}`);

      await setDoc(newOrderDocRef, userData);
      // console.log("getting userdata in function ", userData);

      // Add each cart item as a document in the 'cartItems' subcollection
      const cartItemsSubcollectionRef = collection(
        newOrderDocRef,
        `OrderUser${user.uid}`
      );

      // Map over cartdata and create promises for each item
      const cartItemsPromises = cartdata.map((item) => {
        const itemDocRef = doc(cartItemsSubcollectionRef);
        return setDoc(itemDocRef, {
          type: item.type,
          price: item.monthlyprice,
          location: item.location,
          locality: item.locality,
          city: item.city,
          img: item.img,
          title: item.title,

          // quantity: item.quantity,
        });
      });
      // Wait for all cart items to be added
      await Promise.all(cartItemsPromises);
      toast.success("Order has been placed successfully!");
      navigate("/orders");
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center w-full">
        <PageType page="Cart" />

        <ClipLoader
          className="my-[84px]"
          color={color}
          loading={loading}
          // cssOverride={override}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    <>
      <PageType page="Cart" />

      {user ? (
        <div className="flex w-full justify-center gap-[68px] mt-[68px]">
          <div className="flex flex-col w-auto gap-[20px]">
            <div className="flex items-center w-full bg-[#F9F1E7] h-[55px]">
              <div className="text-[#000000] text-[16px] font-[700] ml-[16px]">
                Total Items: 0{cartdata.length}
              </div>
            </div>
            {cartdata.map((item, index) => (
              <>
                <div
                  className="flex flex-col gap-[16px] w-[800px] p-4 shadow-md rounded-xl "
                  key={index}
                >
                  <div className="flex justify-between w-full ">
                    <div className="text-[16px] text-[#000] font-[500] ">
                      {item.title}
                    </div>
                    <img
                      className=" cursor-pointer"
                      onClick={() => {
                        DeleatItem(item.id);
                        // setLoading(true);
                      }}
                      src={deleat}
                      alt="deleat icon"
                    />
                  </div>
                  {/*  */}
                  <div className="flex justify-center items-center gap-[24px] w-full py-[4px]">
                    <img
                      className="h-[200px] w-[200px] object-cover "
                      src={item.img}
                      alt="image"
                    />
                    <div className="flex flex-col gap-[12px]">
                      <div className="flex justify-start gap-[96px]">
                        <Text text={`${item.type}`} head="Type" />
                        <Text text={` ₹ ${item.perdayprice}`} head="Per Day" />
                        <Text text={` ₹ ${item.monthlyprice}`} head="Monthly" />
                      </div>
                      <div className="flex justify-between ">
                        <div className="flex flex-col items-center gap-[14px]">
                          <div className="text-[16px] text-[#9F9F9F] font-[400]">
                            Calender
                          </div>

                          <img src={calender} alt="calender icon" />
                        </div>
                        <Text head="Start Date" text="29/05/24" />
                        <Text head="End Date" text="02/06/24" />
                        <div className="flex items-start flex-col gap-[16px] ">
                          <div className="text-[16px] text-[#000] font-[500]">
                            Total Days
                          </div>
                          <div className="text-[16px] text-[#000] font-[500]">
                            5
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between gap-[52px]">
                        <Text
                          head="Origional Price"
                          text={`₹ ${item.monthlyprice}`}
                        />
                        <Text head="After Discount" text="₹ 24100" />
                        <Text
                          className="mr-[52px]"
                          head="GST (18%)"
                          text="₹ 45890"
                        />
                        <div className="flex items-start flex-col gap-[16px]">
                          <div className="text-[16px] text-[#000] font-[500] mr-[38px]">
                            Total
                          </div>
                          <div className="text-[16px] text-[#000] font-[700]">
                            ₹ {item.monthlyprice}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          {/* <CartTotal /> */}
          <div className="flex flex-col p-[16px] items-center max-h-[400px] w-[400px] bg-[#F9F1E7] ">
            <div className="text-[32px] font-[600] text-[#000]">Cart Total</div>
            <div className="flex flex-col items-center justify-center my-[46px] w-full gap-[28px] ">
              <div className="flex  justify-center gap-[46px] w-full ">
                <a className="text-[16px] text-[#000] font-[500]">Subtotal</a>
                <a className="text-[16px] text-[#9F9F9F] font-[400]">
                  ₹ 25.00.000
                </a>
              </div>
              <div className="flex justify-center gap-[46px] w-full ">
                <a className="text-[16px] text-[#000] font-[500]">Total</a>
                <a className="text-[20px] text-[#B88E2F] font-[500]">
                  ₹ 25.00.000
                </a>
              </div>
            </div>

            <div
              className="py-[16px] w-[210px]"
              onClick={() => {
                CreateOrder(cartdata, userData);
                navigate("/orders");
              }}
            >
              <Button type="plain" name="PLACE  ORDER" />
            </div>
            {/* 
            <div
              className="text-[20px] text-[#111] font-[400] py-[16px] px-[68px] border-[2px] border-[#000] hover:bg-[#fce7ce] cursor-pointer"
              onClick={() => {
                CreateOrder(cartdata, userData);
                navigate("/orders");
              }}
            >
              Proceed To Buy
            </div> */}
          </div>
          {/*  */}
        </div>
      ) : (
        <div className="flex w-full justify-center text-[24px] font-semibold my-[84px] pb-[56px]">
          Please log in to see your cart
        </div>
      )}
    </>
  );
};

export default FinalCart;
