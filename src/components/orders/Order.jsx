import PageType from "../global/PageType";
import CartItem from "../cart/CartItem";
import Button from "../global/Button";
// --->firebase
import React, { useState, useEffect } from "react";
import { getDocs, collection, doc, getDoc } from "firebase/firestore";
import { db, auth } from "../../../firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

const Order = () => {
  const [user, setuser] = useState({});
  const [data, setData] = useState([]);
  const [orderDetails, setOrderDetails] = useState({});
  let [color, setColor] = useState("#ffba08");
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (currentuser) => {
      setuser(currentuser);
    });
  }, []);

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);

  const fetchData = async () => {
    let datalist = [];

    try {
      setLoading(true);
      const orderDocRef = doc(db, "Orders", `User${user.uid}`);
      const cartItemsSubcollectionRef = collection(
        orderDocRef,
        `OrderUser${user.uid}`
      );
      const cartItemsSnapshot = await getDocs(cartItemsSubcollectionRef);
      cartItemsSnapshot.forEach((doc) => {
        datalist.push({ id: doc.id, ...doc.data() });
      });

      // order status geting --->

      // ----->
      setData(datalist);
      OrderDetails();

      setLoading(false);
    } catch (error) {
      toast.error("Error getting  items:", error);
    }
  };

  const OrderDetails = async () => {
    try {
      const orderDocRef = doc(db, "Orders", `User${user.uid}`);

      const orderDoc = await getDoc(orderDocRef);
      setOrderDetails(orderDoc.data());
    } catch (error) {
      console.error("Error fetching order details:", error);
      toast.error("Error fetching orders. Please try again.");
    }
  };
  console.log(orderDetails);
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
      {data.length === 0 ? (
        <div className="flex flex-col items-center justify-start w-full mb-[138px]">
          <PageType page="Order" />
          <div className="flex w-full justify-center text-[24px] font-semibold my-[84px] pb-[56px]">
            You haven't placed any order yet!!
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-start w-full mb-[138px]">
          <PageType page="Order" />
          <p className="text-[36px] font-small text-[#B88E2F] my-[68px]">
            Our Team Will Call you soon!!
          </p>
          <div className="flex justify-center gap-[68px] w-full ">
            <div className="flex flex-col items-center gap-[24px]  w-[50%] ">
              <div className="flex items-center w-full bg-[#F9F1E7] h-[55px]">
                <div className="text-[#000000] text-[16px] font-[700] ml-[16px]">
                  Total Items: 0{data.length}
                </div>
              </div>

              {data.map((item, key) => (
                <div className="flex justify-center items-center gap-[68px] w-full ">
                  <CartItem
                    key={key}
                    title={item.title}
                    type={item.type}
                    img={item.img}
                    monthlyprice={item.monthlyprice}
                    perdayprice={item.perdayprice}
                    discount={item.discount}
                    illuminate={item.illuminate}
                    size={item.size}
                    discountPerc={item.discountPerc}
                    orderStatus={item.orderStatus}
                  />
                </div>
              ))}
            </div>
            {/* procced to pay */}
            <div className="flex flex-col p-[16px] justify-center gap-[24px] items-center h-[300px] w-[400px] rounded-2xl border-y-4 border-x-2">
              <div className="text-[16px] text-center font-medium ">
                You can Buy when we confirm the availability of your orders!
              </div>

              <div className="w-[300px]">
                <Button
                  type="plain"
                  name="Procced To Pay"
                  onClick={() => navigate("/")}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Order;
