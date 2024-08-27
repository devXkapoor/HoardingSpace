import Dropdown from "../global/Dropdown";
import PageType from "../global/PageType";
import AdvertiseItem from "../home/AdvertiseItem";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";

// firebase -->
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase.config";

const Shop = () => {
  const { id } = useParams();

  const [data, setdata] = useState([]);
  let [color, setColor] = useState("#ffba08");
  let [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(id);
  const [media, setMedia] = useState(id);

  useEffect(() => {
    const fetchData = async () => {
      let datalist = [];
      try {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, "CompleteItems"));
        querySnapshot.forEach((doc) => {
          datalist.push({ id: doc.id, ...doc.data() });
        });
        console.log(datalist);
        setdata(datalist);
        setLoading(false);
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
        <div className="flex justify-center gap-[4px] w-full my-[52px]  ">
          <input
            className="h-[56px] w-[40%] border-[1px] border-[#66666659] pl-[12px] rounded-md "
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="eg- Billboard"

            // value={price}
          />

          <button
            onClick={() => setMedia(search)}
            className="  text-[18px] text-[#FFF] bg-[#B88E2F] hover:bg-[#a37c20] w-[100px] h-[54px] font-[600] cursor-pointer rounded-md"
          >
            Search
          </button>
        </div>
        {/* <div className="flex flex-wrap gap-[32px] w-[75%] mt-[46px]"> */}
        {loading ? (
          <ClipLoader
            className="my-[84px]"
            color={color}
            loading={loading}
            // cssOverride={override}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <div className="flex justify-center items-center w-full ">
            <div className="flex flex-wrap gap-[48px] max-w-[85%] mt-[46px] pl-12 mb-[56px]">
              {media === "all" ? setMedia("") : ""}
              {data
                .filter((item) => {
                  return media.toLowerCase() === item.type.toLowerCase()
                    ? item
                    : item.type.toLowerCase().includes(media.toLowerCase());
                })
                .map((item, key) => (
                  <AdvertiseItem
                    key={key}
                    heading={item.type}
                    text={item.location}
                    price={item.monthlyprice}
                    img={item.img}
                    discount={item.discount}
                    discountPerc={item.discountPerc}
                    id={item.id}
                  />
                ))}
            </div>
          </div>
        )}

        {/* {data.map((item, key) => (
            <AdvertiseItem
              key={key}
              heading={item.type}
              text={item.location}
              price={item.monthlyprice}
              img={item.img}
              id={item.id}
            />
          ))} */}
        {/* </div> */}

        {/* ---> Pagenation Button  */}
        {/* <div className="flex flex-col items-center w-full my-[32px]">
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
          
        </div> */}
      </div>
    </>
  );
};

export default Shop;
