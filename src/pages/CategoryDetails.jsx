import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const CategoryDetails = () => {
    const {id} = useParams();
    console.log(id);
    const [craft,setCrafts] =useState({});
    useEffect(() => {
     fetch(`https://canvas-crafts-hub-server.vercel.app/categoryDetails/${id}`)
         .then(res => res.json())
         .then((data) => {
          setCrafts(data);
     })
 },[id])
    return (
        <div className="container mx-auto"> 
      <div className="flex flex-col md:flex-col lg:flex-row  gap-3 justify-center mx-5">
        <div className="w-full lg:w-1/2  bg-[#23BE0A0D] rounded-2xl items-center p-2 flex   justify-center">
          <img className="w-full " src={craft.image} alt="" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col ">
          <h2 className="text-[40px] font-bold text-gray-500">{craft.item_name}</h2>
          <p className="mt-4 mb-6 font-medium text-xl text-gray-500">Subcategory Name: {craft.subcategory_Name}</p>
          <p className="mt-4 mb-6 font-medium text-xl text-gray-500">Short Description: {craft.short_description}</p>
          <p className="mt-4 mb-6 font-medium text-xl text-gray-500">Price: {craft.price}</p>
          <p className="mt-4 mb-6 font-medium text-xl text-gray-500">Rating: {craft.rating}</p>
          <p className="mt-4 mb-6 font-medium text-xl text-gray-500">Processing Time: {craft.processing_time}</p>
       
        </div>
      </div>
    </div>
    );
};

export default CategoryDetails;