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
  const [filteredData, setFilteredData] = useState(data);
  let [color, setColor] = useState("#ffba08");
  let [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(id);
  const [media, setMedia] = useState(id);
  const [toggle, setToggle] = useState(false);

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
        setFilteredData(datalist);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    console.log(data);
  }, []);

  useEffect(() => {
    if (search != "all") {
      const tempData = [...data];
      setFilteredData(
        tempData.filter(
          (item) =>
            item?.type?.toLowerCase()?.includes(search.toLocaleLowerCase()) ||
            item?.location
              ?.toLowerCase()
              ?.includes(search.toLocaleLowerCase()) ||
            item?.city?.toLowerCase()?.includes(search.toLocaleLowerCase())
        )
      );
    }
  }, [data]);

  const searchByQuery = () => {
    const tempData = [...data];

    setFilteredData(
      tempData.filter(
        (item) =>
          item?.type?.toLowerCase()?.includes(search.toLocaleLowerCase()) ||
          item?.location?.toLowerCase()?.includes(search.toLocaleLowerCase()) ||
          item?.city?.toLowerCase()?.includes(search.toLocaleLowerCase()) ||
          item?.pincode?.toLowerCase()?.includes(search.toLocaleLowerCase())
      )
    );
  };

  const searchByCode = () => {
    const tempData = [...data];

    setFilteredData(
      tempData.filter((item) =>
        item?.itemCode?.toLowerCase()?.includes(search.toLocaleLowerCase())
      )
    );
  };

  // const filteredmedia = data.filter(
  //   (t) =>
  //     t.type.toLowerCase().includes(filter.toLowerCase()) ||
  //     t.city.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full \">
        <PageType page="Outdore Advertisement" />

        <div className="flex flex-col items-center gap-[4px] w-full ">
          <div className="flex justify-center gap-[4px] w-full mt-[52px]  ">
            <input
              className="h-[56px] w-[40%] border-[1px] border-[#66666659] pl-[12px] rounded-md "
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="eg- Billboard"

              // value={price}
            />

            <button
              onClick={searchByQuery}
              className="  text-[18px] text-[#FFF] bg-[#B88E2F] hover:bg-[#a37c20] w-[100px] h-[54px] font-[600] cursor-pointer rounded-md"
            >
              Search
            </button>
          </div>
          <div className="flex flex-col  w-[47%]  items-start justify-center mt-[24px] ">
            <div className="flex w-full justify-start items-center ml-2">
              <input
                className="h-[14px] w-[14px] cursor-pointer"
                type="checkbox"
                onClick={() => setToggle(!toggle)}
              />
              <div className="text-[18px] text-[#333333] font-[400] ml-2">
                Search by code
              </div>
            </div>
            <div className="flex w-full  justify-start my-2  ">
              {toggle && (
                <div className="flex w-full ">
                  <input
                    className="h-14 w-full border pl-3 rounded-md"
                    type="text"
                    onChange={(e) => {
                      setSearch(e.target.value);
                      searchByCode();
                    }}
                    placeholder="Enter code"
                  />
                  <button
                    // onChange={searchByCode}
                    onClick={searchByCode}
                    className="text-lg text-white bg-yellow-600 hover:bg-yellow-500 w-[100px] h-14 font-semibold cursor-pointer rounded-md ml-4"
                  >
                    Search
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
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
            <div className=" grid grid-cols-4 gap-12 max-w-[85%] mt-[46px] mb-[56px]">
              {media === "all" ? setMedia("") : ""}
              {filteredData.map((item, key) => (
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
      </div>
    </>
  );
};

export default Shop;
