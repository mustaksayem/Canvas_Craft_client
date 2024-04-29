import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ArtCraftSection = () => {
  const [crafts, setCrafts] = useState([]);

  const { subcategory_Name } = useParams();

  useEffect(
    () => {
      fetch(`http://localhost:5000/subCategory/${subcategory_Name}`)
        .then(res => res.json())
        .then(data => {
          console.log("Data:", data);
          setCrafts(data);
        });
    },
    [subcategory_Name]
  );
  return (
    <div>
      <h1>This is art craft</h1>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
     {crafts.map((p, index) => (
        <div key={index}>
          <div className=" rounded-lg flex-col w-full bg-white dark:bg-slate-700 border border-stone-300  text-gray-600 dark:text-gray-200 ">
            
              <div className="w-full">
                <img src={p.image} alt="Image" className="object-cover image-full w-full h-52" />
              </div>
            
            <div className="space-y-3 p-2 ">
              <p className=" text-lg font-semibold pl-2">{p.item_name}</p>
              <p className="text-lg   font-semibold pl-2">Sub Category Name : {p.subcategory_Name}</p>
              <p className="text-lg   font-semibold pl-2">Stock Status : {p.stockStatus}</p>
              <p className="text-lg   font-semibold pl-2 ">Price : {p.price}</p>
              <p className="text-lg   font-semibold pl-2">Rating : {p.rating}</p>
              <p className="text-lg   font-semibold pl-2">Customization : {p.customization} </p>
              <div className="w-full">
                <Link to={`/categoryDetails/${p._id}`}>
                  <button className="text-white w-full p-2 bg-green-500 font-bold">
                    View Details
                  </button>
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

export default ArtCraftSection;
