import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CraftSection = () => {
  const [limitedCrafts, setLimitedCrafts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/add");
        const data = await response.json();
        const slicedCrafts = data.slice(0, 6);
        console.log(slicedCrafts);
        setLimitedCrafts(slicedCrafts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container   py-8 bg-slate-50 dark:bg-slate-700  ">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-600 py-4  dark:text-gray-200">Art and Craft Items</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {limitedCrafts.map((craft, index) => (
          <div key={index} className="relative  w-full">
            <div className=" rounded-lg w-full bg-white dark:bg-slate-700 border border-stone-300  text-gray-600 dark:text-gray-200 ">
              <div className="flex justify-center relative rounded-lg  overflow-hidden h-52">
                <div className="w-full">
                  <img src={craft.image} alt="Image" className="object-cover w-full h-52" />
                </div>
              </div>
              <div className="space-y-3 p-2 ">
                <p className=" text-lg font-semibold pl-2">{craft.item_name}</p>
                <p className="text-lg   font-semibold pl-2">Sub Category Name : {craft.subcategory_Name}</p>
                <p className="text-lg   font-semibold pl-2">Stock Status : {craft.stockStatus}</p>
                <p className="text-lg   font-semibold pl-2 ">Price : {craft.price}</p>
                <p className="text-lg   font-semibold pl-2">Rating : {craft.rating}</p>
                <p className="text-lg   font-semibold pl-2">
                  <span className="text-lg   font-semibold">Customization : {craft.customization}</span>
                </p>
                <div className="w-full">
                  <Link to={`/carftsDetails/${craft._id}`}>
                    <button className="text-white w-full p-3  bg-green-500 dark:bg-blue-950 font-bold  flex justify-center items-center">View Details</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CraftSection;
