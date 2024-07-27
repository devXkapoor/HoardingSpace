import Dropdown from "../global/Dropdown";
import PageType from "../global/PageType";
import AdvertiseItem from "../home/AdvertiseItem";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// firebase -->
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase.config";

const Shop = () => {
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

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full \">
        <PageType page="Outdore Advertisement" />
        <div className="flex justify-center gap-[64px] w-full bg-[#F9F1E7] py-[24px]  ">
          <Dropdown name="Location" />
          <Dropdown name="Ad Option" />
          <Dropdown name="Media Type" />
          <Dropdown name="Tags" />
          <Dropdown name="LIT/ NONLIT" />
        </div>
        <div className="flex flex-wrap gap-[32px] w-[75%] mt-[46px]">
          {data.map((item, key) => (
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

        {/* ---> Pagenation Button  */}
        <div className="flex flex-col items-center w-full my-[32px]">
          <div className="flex justify-center gap-[32px] w-full  ">
            <div className=" flex items-center h-[60px]  rounded-[10px] bg-[#B88E2F] px-[30px] ">
              <p className="text-[20px] text-[#FFF] font-[400] p-0">1</p>
            </div>
            <div className=" flex items-center  h-[60px]  rounded-[10px] bg-[#F9F1E7] px-[30px] ">
              <p className="text-[20px] text-[#000] font-[400] p-0">2</p>
            </div>
            <div className=" flex items-center h-[60px]  rounded-[10px] bg-[#F9F1E7] px-[30px] ">
              <p className="text-[20px] text-[#000] font-[400] p-0">3</p>
            </div>
            <div className=" flex items-center h-[60px]  rounded-[10px] bg-[#F9F1E7] px-[30px] ">
              <p className="text-[20px] text-[#000] font-[400] p-0">NEXT </p>
            </div>
          </div>
          <div className="text-[16px] text-[#000] font-[400] my-[20px] ">
            Showing 1-16 of 32 results
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
