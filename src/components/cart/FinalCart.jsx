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
  const isRead = false;
  const orderStatus = "Pending";

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
      const querySnapshot = await getDocs(collection(db, `Cart${user.uid}`));
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
      await deleteDoc(doc(db, `Cart${user.uid}`, id));
      toast.success("Item deleated successfully");
      // setLoading(false);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleatCart = async () => {
    try {
      const collectionRef = collection(db, `Cart${user.uid}`);
      const querySnapshot = await getDocs(collectionRef);

      for (const documentSnapshot of querySnapshot.docs) {
        const docRef = doc(db, `Cart${user.uid}`, documentSnapshot.id);
        await deleteDoc(docRef); // Delete each document one by one
        console.log(`Deleted document with ID: ${documentSnapshot.id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log("Got userdata", userData);

  const CreateOrder = async (cartdata, userData) => {
    try {
      // const newUserData = [...userData, IsRead: isread];
      const ordersCollectionRef = collection(db, "Orders");
      const newOrderDocRef = doc(ordersCollectionRef, `User${user.uid}`);
      const newOrderData = {
        contact: userData.contact,
        fname: userData.fname,
        lname: userData.lname,
        email: userData.email,
        isRead,
      };
      await setDoc(newOrderDocRef, newOrderData);

      // await setDoc(newOrderDocRef, [...userData, isRead, orderStatus]);

      const cartItemsSubcollectionRef = collection(
        newOrderDocRef,
        `OrderUser${user.uid}`
      );

      // Map over cartdata and create promises for each item
      const cartItemsPromises = cartdata.map((item) => {
        const itemDocRef = doc(cartItemsSubcollectionRef);
        return setDoc(itemDocRef, {
          type: item.type,
          // price: item.monthlyprice,
          location: item.location,
          locality: item.locality,
          city: item.city,
          img: item.img,
          title: item.title,
          contactNumber: item.contactNumber,
          illuminate: item.illuminate,
          size: item.size,
          monthlyprice: item.monthlyprice,
          perdayprice: item.perdayprice,
          discount: item.discount,
          discountPerc: item.discountPerc,
          orderStatus,
          // quantity: item.quantity,
        });
      });
      // Wait for all cart items to be added
      await Promise.all(cartItemsPromises);
      handleDeleatCart();
    } catch (error) {
      console.error(error);
    } finally {
      toast.success("Order has been placed successfully!");
      navigate("/orders");
    }
  };

  const totalBill = cartdata.reduce((total, item) => {
    const price = parseFloat(item.monthlyprice); // Convert price to a number
    return total + (isNaN(price) ? 0 : price); // Add to total if valid number
  }, 0);

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
        <div>
          {cartdata.length === 0 ? (
            <div className="flex w-full justify-center text-[24px] font-semibold my-[84px] pb-[140px]">
              Your Cart is Empty!!
            </div>
          ) : (
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
                          className="h-[18px] w-[18px] hover:h-[20px] hover:w-[20px] cursor-pointer "
                          src={deleat}
                          onClick={() => DeleatItem(item.id)}
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
                          <div className="flex justify-start gap-[76px]">
                            <Text text={item.type} head="Type" />

                            <Text
                              text={` ₹ ${new Intl.NumberFormat().format(
                                item.monthlyprice
                              )}`}
                              head="Monthly"
                            />
                            <Text
                              text={` ₹ ${new Intl.NumberFormat().format(
                                item.perdayprice
                              )}`}
                              head="Per Day"
                            />
                          </div>
                          <div className="flex justify-start gap-[76px] ">
                            <div className="flex flex-col items-center gap-[14px]">
                              <div className="text-[16px] text-[#9F9F9F] font-[400]">
                                Calender
                              </div>

                              <img src={calender} alt="calender icon" />
                            </div>
                            <Text
                              text={`${item.illuminate}`}
                              head="Illumination"
                            />
                            <Text text={`${item.size}`} head="Size(Sq.Ft)" />
                          </div>
                          <div className="flex justify-between gap-[76px]">
                            <Text
                              head="Price"
                              text={`₹ ${new Intl.NumberFormat().format(
                                item.monthlyprice
                              )}`}
                            />
                            <Text
                              head="Discount"
                              text={`₹ ${new Intl.NumberFormat().format(
                                item.discount
                              )}`}
                            />
                            <Text
                              className="mr-[52px]"
                              head="Dicount(%)"
                              text={`${item.discountPerc} %`}
                            />
                            <div className="flex items-start flex-col gap-[16px]">
                              <div className="text-[16px] text-[#000] font-[500] mr-[38px] ">
                                Total
                              </div>
                              <div className="text-[16px] text-[#000] font-[700]">
                                ₹
                                {new Intl.NumberFormat().format(
                                  item.monthlyprice
                                )}
                                /-
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
              <div className="flex flex-col  items-center gap-[24px] py-[12px] h-[250px] w-[400px] bg-[#F9F1E7] ">
                <div className="text-[32px] font-[600] text-[#000]">
                  Cart Total
                </div>
                <div className="flex flex-col items-center justify-center w-full gap-[16px] ">
                  {/* <div className="flex  justify-center gap-[46px] w-full ">
                    <a className="text-[16px] text-[#000] font-[500]">
                      Subtotal
                    </a>
                    <a className="text-[16px] text-[#9F9F9F] font-[400]">
                      ₹ 25.00.000
                    </a>
                  </div> */}
                  <div className="flex justify-center  items-center gap-[16px] w-full ">
                    <a className="text-[22px] text-[#000] font-[500]">
                      Total Bill :
                    </a>
                    <div className="flex flex-col gap-[2px] text-[20px] text-[#B88E2F] font-[500]">
                      ₹ {new Intl.NumberFormat().format(totalBill)} /-
                      <div className="h-[2px] w-full bg-[#B88E2F]" />
                    </div>
                  </div>
                </div>

                <div
                  className="py-[16px] w-[210px]"
                  onClick={() => {
                    CreateOrder(cartdata, userData);
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
          )}
        </div>
      ) : (
        <div className="flex w-full justify-center text-[24px] font-semibold my-[84px] pb-[56px]">
          Please log in to see your cart!!
        </div>
      )}
    </>
  );
};

export default FinalCart;
