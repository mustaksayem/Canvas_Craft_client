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
    <div className="container mx-auto px-4 py-8 bg-slate-50">
      <h2 className="text-2xl font-bold mb-4 text-center text-black py-4">Art and Craft Items</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {limitedCrafts.map((craft, index) => (
          <div key={index} className="relative mx-auto w-full">
            <div className=" p-4 rounded-lg bg-white">
              <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
                <div className="w-full">
                  <img src={craft.image} alt="Image" className="object-cover w-full h-52" />
                </div>
              </div>
              <div className="space-y-3">
                <p className=" text-lg font-semibold">{craft.item_name}</p>
                <p className="text-lg   font-semibold">Sub Category Name : {craft.subcategory_Name}</p>
                <p className="text-lg   font-semibold">Stock Status : {craft.stockStatus}</p>
                <p className="text-lg   font-semibold ">Price : {craft.price}</p>
                <p className="text-lg   font-semibold">Rating : {craft.rating}</p>
                <p className="text-lg   font-semibold">
                  <span className="text-lg   font-semibold">Customization : {craft.customization}</span>
                </p>
                <div>
                  <Link to={`/carftsDetails/${craft._id}`}>
                    <p className="text-white btn btn-primary font-bold  flex justify-center items-center">View Details</p>
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
