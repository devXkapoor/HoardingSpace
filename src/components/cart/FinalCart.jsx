import React, { useState, useEffect } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../../../firebase.config";
import Text from "../global/Text";
import deleat from "../../assets/global/DeleatIcon.svg";
import { onAuthStateChanged } from "firebase/auth";
import CartTotal from "./CartTotal";
import PageType from "../global/PageType";
import calender from "../../assets/CalenderIcon.svg";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

const FinalCart = () => {
  const [data, setData] = useState([]);
  const [user, setuser] = useState({});
  let [color, setColor] = useState("#ffba08");
  let [loading, setLoading] = useState(false);

  // const { id } = useParams(); //param got id from url so url change first then we grab id from useparams

  useEffect(() => {
    onAuthStateChanged(auth, (currentuser) => {
      setuser(currentuser);
    });
  }, []);

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
      setData(datalist);
      setLoading(false);
    } catch (err) {
      toast.error(err);
      // console.log(err);
    }
  };
  // const DeleatItem = async (id) => {
  //   try {
  //     await deleteDoc(doc(db, `${user.uid}`, id));
  //     toast.success("Item deleated successfully");
  //     console.log(id);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);
  // setLoading(true);

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
                Total Items: 0{data.length}
              </div>
            </div>
            {data.map((item, index) => (
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
                      // onClick={DeleatItem}
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
                        <Text text={` ₹ ${item.monthlyprice}`} head="Monthly" />
                        <Text text={` ₹ ${item.perdayprice}`} head="Per Day" />
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
          <CartTotal />
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
