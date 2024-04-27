import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const Update = () => {

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
 const handleUpdate = (e) => {
    e.preventDefault();
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const info = { price, rating };
    console.log(info);
       fetch(`http://localhost:5000/update/${id}`, {
         method: "PUT",
         headers: { "Content-type": "application/json" },
         body: JSON.stringify(info),
       });
  };
    return (
        <div>
            <h1>{craft.price}</h1>
            <form onSubmit={handleUpdate}>
            <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Name</span>

  </div>
  <input type="text" defaultValue={craft.rating} name="rating" placeholder="Name"  className="input input-bordered w-full max-w-xs" />
  
</label>

<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Sub-cataegory</span>

  </div>
  <input type="text" defaultValue={craft.price} name="price" placeholder="Sub-cataegory" className="input input-bordered w-full max-w-xs" />

  
</label>

<input type="submit" value="Update" className="btn btn-block" />
</form>
        </div>
    );
};

export default Update;