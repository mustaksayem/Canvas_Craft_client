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
           <h1>{craft.price}</h1>
           <h1>{craft.picture}</h1>
        </div>
    );
};

export default CraftsDetails;