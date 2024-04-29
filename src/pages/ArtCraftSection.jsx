import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ArtCraftSection = () => {
    const [crafts, setCrafts] = useState([]);

  const { subcategory_Name } = useParams();

  useEffect(() => {
   
    fetch(`http://localhost:5000/subCategory/${subcategory_Name}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Data:", data);
        setCrafts(data);
      });
  }, [subcategory_Name]);
    return (
        <div>
           {crafts.map((p,index)=>(
            <div key={index}>
                <h1>{p.subcategory_Name}</h1>
                

            </div>
           ))} 
        </div>
    );
};

export default ArtCraftSection;