import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CraftsDetails = () => {
   const {id} = useParams();
   console.log(id);
   const [craft,setCrafts] =useState({});
   useEffect(() => {
    fetch(`http://localhost:5000/carftsDetails/${id}`)
        .then(res => res.json())
        .then((data) => {
         setCrafts(data);
    })
},[id])
    return (
        <div>
           <div className="flex   gap-3 justify-center items-center">
        <div className="w-1/2  bg-[#23BE0A0D] rounded-2xl items-center p-2 flex   justify-center">
          <img className="w-full " src={craft.image} alt="" />
        </div>
        <div className="w-1/2 text-center ">
          <h2 className="text-[40px] font-bold text-[#131313]">{craft.item_name}</h2>
          <p className="mt-4 mb-6 font-medium text-xl text-[#131313CC]">Subcategory Name: {craft.subcategory_Name}</p>
          <p className="mt-4 mb-6 font-medium text-xl text-[#131313CC]">Short Description: {craft.short_description}</p>
          <p className="mt-4 mb-6 font-medium text-xl text-[#131313CC]">Price: {craft.price}</p>
          <p className="mt-4 mb-6 font-medium text-xl text-[#131313CC]">Rating: {craft.rating}</p>
          <p className="mt-4 mb-6 font-medium text-xl text-[#131313CC]">Processing Time: {craft.processing_time}</p>
          <p className="mt-4 mb-6 font-medium text-xl text-[#131313CC]">Customization status: {craft.customization}</p>
          <p className="mt-4 mb-6 font-medium text-xl text-[#131313CC]">Stock Status: {craft.stockStatus}</p>
         
          

          
        </div>
      </div>
        </div>
    );
};

export default CraftsDetails;