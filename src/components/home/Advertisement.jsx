import AdvertiseItem from "./AdvertiseItem";
import Button from "../global/Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// firebase -->
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase.config";

const Advertisement = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let datalist = [];
      try {
        const querySnapshot = await getDocs(collection(db, "CompleteItems"));
        querySnapshot.forEach((doc) => {
          datalist.push({ id: doc.id, ...doc.data() });
        });
        console.log(datalist);
        setdata(datalist);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    console.log(data);
  }, []);

  const items = data.slice(0, 8);

  return (
    <>
      <div className="flex flex-col items-center justify-center max-w-[1236px] my-[30px]">
        <div className="text-[40px] font-[700] text-[#3A3A3A] my-[20px] ">
          Outdoor Advertising
        </div>

        <div className="flex flex-wrap gap-[32px] w-full">
          {items.map((item, key) => (
            <AdvertiseItem
              key={key}
              heading={item.type}
              text={item.location}
              price={item.monthlyprice}
              img={item.img}
              id={item.id}
            />
          ))}
        </div>
        <div
          className="w-[245px] h-[48px] my-[60px] hover:cursor-pointer"
          onClick={() => navigate("/shop")}
        >
          <Button name={"Show more"} type={"border"} />
        </div>
      </div>
    </>
  );
};

export default Advertisement;
