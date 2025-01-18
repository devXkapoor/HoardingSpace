import Dropdown from "../global/Dropdown";
import PageType from "../global/PageType";
import AdvertiseItem from "../home/AdvertiseItem";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";

// Firebase imports
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase.config";

const Shop = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(id || "");
  const [codeSearch, setCodeSearch] = useState("");
  const [city, setCity] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    // Fetch data from Firestore
    const fetchData = async () => {
      try {
        setLoading(true);
        const datalist = [];
        const querySnapshot = await getDocs(collection(db, "CompleteItems"));
        querySnapshot.forEach((doc) => {
          datalist.push({ id: doc.id, ...doc.data() });
        });
        setData(datalist);
        setFilteredData(datalist);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const searchByQuery = () => {
    const tempData = data.filter(
      (item) =>
        (city ? item?.city?.toLowerCase() === city.toLowerCase() : true) &&
        (item?.type?.toLowerCase()?.includes(search.toLowerCase()) ||
          item?.location?.toLowerCase()?.includes(search.toLowerCase()) ||
          item?.pincode?.toLowerCase()?.includes(search.toLowerCase()))
    );
    setFilteredData(tempData);
  };

  const searchByCode = () => {
    const tempData = data.filter((item) =>
      item?.itemCode?.toLowerCase()?.includes(codeSearch.toLowerCase())
    );
    setFilteredData(tempData);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <PageType page="Outdoor Advertisement" />

      {/* Search and Filter Section */}
      <div className="flex flex-col items-center gap-4 w-full">
        {/* General Search */}
        <div className="flex justify-center gap-4 mt-12 w-[70%]">
          <input
            className="h-14 w-2/5 border border-gray-300 pl-3 rounded-md"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Enter type (e.g., Billboard)"
          />

          <select
            className="h-14 w-52 border border-gray-300 pl-3 rounded-md text-gray-800"
            onChange={(e) => setCity(e.target.value)}
            defaultValue=""
          >
            <option value="" disabled>
              Select a city
            </option>
            <option value="Agra">Agra</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Ajmer">Ajmer</option>
            <option value="Aligarh">Aligarh</option>
            <option value="Amritsar">Amritsar</option>
            <option value="Aurangabad">Aurangabad</option>
            <option value="Bareilly">Bareilly</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Bhopal">Bhopal</option>
            <option value="Bhilwara">Bhilwara</option>
            <option value="Bikaner">Bikaner</option>
            <option value="Bilaspur">Bilaspur</option>
            <option value="Bhuvneshwar">Bhuvneshwar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Chennai">Chennai</option>
            <option value="Coimbatore">Coimbatore</option>
            <option value="Cuttack">Cuttack</option>
            <option value="Dehradun">Dehradun</option>
            <option value="Delhi">Delhi</option>
            <option value="Dhanbad">Dhanbad</option>
            <option value="Durgapur">Durgapur</option>
            <option value="Faridabad">Faridabad</option>
            <option value="Ganganagar">Ganganagar</option>
            <option value="Gaziabad">Gaziabad</option>
            <option value="Ghaziabad">Ghaziabad</option>
            <option value="Gorakhpur">Gorakhpur</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Guntur">Guntur</option>
            <option value="Gurgaon ">Gurgaon </option>

            <option value="Guwahati">Guwahati</option>
            <option value="Gwalior">Gwalior</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Indore">Indore</option>
            <option value="Jabalpur">Jabalpur</option>
            <option value="Jalandhar">Jalandhar</option>
            <option value="Jalgaon">Jalgaon</option>
            <option value="Jamnagar">Jamnagar</option>
            <option value="Jamshedpur">Jamshedpur</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Jodhpur">Jodhpur</option>
            <option value="Jhansi">Jhansi</option>
            <option value="Kanpur">Kanpur</option>
            <option value="Kolhapur">Kolhapur</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Lucknow">Lucknow</option>
            <option value="Ludhiana">Ludhiana</option>
            <option value="Manglore">Manglore</option>
            <option value="Mathura">Mathura</option>
            <option value="Meerut">Meerut</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Nagpur">Nagpur</option>
            <option value="Nashik">Nashik</option>
            <option value="Noida">Noida</option>
            <option value="Panchkula">Panchkula</option>
            <option value="Pathankot">Pathankot</option>
            <option value="Patna">Patna</option>
            <option value="Pondicherry">Pondicherry</option>
            <option value="Pune">Pune</option>
            <option value="Raipur">Raipur</option>
            <option value="Rajkot">Rajkot</option>
            <option value="Ranchi">Ranchi</option>
            <option value="Rourkela">Rourkela</option>
            <option value="Satna">Satna</option>
            <option value="Shimla">Shimla</option>
            <option value="Solapur">Solapur</option>
            <option value="Surat">Surat</option>
            <option value="Thane">Thane</option>
            <option value="Udaipur">Udaipur</option>
            <option value="Ujjain">Ujjain</option>
            <option value="Vadodara">Vadodara</option>
            <option value="Varanasi">Varanasi</option>
            <option value="Vishakhapatnam">Vishakhapatnam</option>
          </select>

          <button
            onClick={searchByQuery}
            className="text-lg text-white bg-yellow-600 hover:bg-yellow-500 w-24 h-14 font-semibold rounded-md"
          >
            Search
          </button>
        </div>

        {/* Searching by Code */}
        <div className="flex flex-col w-1/2 items-start mt-2">
          <div className="flex items-center justify-end w-full">
            <span className="text-md text-gray-800 mr-2">Search by code</span>
            <input
              className="h-4 w-4 cursor-pointer mt-1"
              type="checkbox"
              checked={toggle}
              onChange={() => setToggle(!toggle)}
            />
          </div>
          {toggle && (
            <div className="flex items-center mt-2 w-full">
              <input
                className="h-14 w-[88%] border pl-3 rounded-md"
                type="text"
                value={codeSearch}
                onChange={(e) => setCodeSearch(e.target.value)}
                placeholder="Enter code"
              />
              <button
                onClick={searchByCode}
                className="text-lg text-white bg-yellow-600 hover:bg-yellow-500 w-24 h-14 font-semibold rounded-md ml-4"
              >
                Search
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Loading and Data Display */}
      {loading ? (
        <ClipLoader
          className="my-20"
          color="#ffba08"
          loading={loading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : filteredData.length > 0 ? (
        <div className="flex justify-center items-center w-full">
          <div className="grid grid-cols-4 gap-12 mt-12 mb-14">
            {filteredData.map((item, index) => (
              <AdvertiseItem
                key={index}
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
      ) : (
        <div className="flex justify-center items-center w-full my-20">
          <p className="text-lg text-gray-500 font-medium">
            No data found for the selected criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default Shop;
