import React, { useState, useEffect } from "react";
import Text from "../global/Text";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../../../firebase.config";
import { toast } from "react-toastify";

const ItemInfo = (props) => {
  const navigate = useNavigate();
  const [data, setdata] = useState({});

  //---->
  const { id } = useParams(); //param got id from url so url change first then we grab id from useparams
  console.log("this is params id ", id);

  useEffect(() => {
    const SingleData = async () => {
      const docRef = doc(db, "CompleteItems", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists(id)) {
        console.log("Document data:", docSnap.data());
        setdata(docSnap.data());
      } else {
        console.log("No such document!");
        return null;
      }
    };
    SingleData();
  }, [id]);

  const [user, setuser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentuser) => {
      setuser(currentuser);
    });
  }, []);

  const SubmitItem = async () => {
    try {
      const cartRef = doc(db, `${user.uid}`, id);
      await setDoc(cartRef, data);

      // console.log("func called");
      toast.success("Item Added to Cart");
      navigate("/carts");
      // alert("Advertisement Added successfully");
    } catch (error) {
      toast.error(error);
      // console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className=" bg-[#F9F1E7] h-[100px] w-full" />
      <div className="flex flex-col gap-[16px] max-w-[60%] border-[1px] p-8  border-t-[#cdcaca] border-t-4 rounded-2xl shadow-xl mt-[68px]">
        <div className="flex flex-col w-full">
          <div className="text-[42px] font-[400] text-[#000] leading-[62px]">
            {data.title}{" "}
          </div>

          <div className="flex justify-between items-center w-full p-[16px] ">
            <img
              className="w-[300px] h-[300px] rounded-md object-cover "
              src={data.img}
              alt="media image"
            />
            <div className="flex flex-col gap-[20px] w-[50%]">
              <div className=" flex justify-between w-full">
                <Text text={data.type} head="Media" />
                <Text text={data.size} head="Size" />
                <Text text={data.illuminate} head="illumination" />
                <Text text={`${data.area} Sq.Ft`} head="Total Area" />
              </div>
              <Text
                text={` ${data.location} , ${data.locality}, ${data.city} , ${data.pincode}`}
                head="Location"
              />
              <div className="text-[12px] font-[400] text-[#000] leading-[20px] text-start ">
                {data.desc}
              </div>
              <div className=" flex justify-between w-full">
                <Text text={` ₹ ${data.monthlyprice}`} head="Monthly" />
                <Text text={` ₹ ${data.perdayprice}`} head="Per Day" />
                <button
                  className="flex items-center justify-center p-4 border-[1px] border-[#000] rounded-xl w-[200px] text-[20px] text-[#000] font-[400] hover:bg-[#e7e7e7]"
                  onClick={() => {
                    SubmitItem();
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;
