import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyCrafts = () => {
    const { user } = useAuth() || {};
    const [item, setItem] = useState([]);
    const [control, setControl] = useState(false);
    console.log(user);
    useEffect(() => {
      fetch(`http://localhost:5000/myCrafts/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
         setItem(data);
        });
    }, [user, control]);
    const handleDelete = _id => {
console.log(_id);
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
   

    fetch(`http://localhost:5000/myCrafts/${_id}`,{
      method:'DELETE'
    })
    .then (res => res.json ())
    .then (data =>{
      console.log(data);
      if(data.deleteCount > 0){
      
      Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
   
      }

      if(control == false){
        setControl(true)
        
      }
      else if (control == true){
        setControl(false)
      }
    })
  }
});
    }
    return (
        <div>
           {
        item?.map((p,index) => (
          <div key={index}>
            <h1>{p.rating}</h1>
            <h1>{p.price}</h1>
           
            <Link to={`/update/${p._id}`}><button className="btn btn-primary">Update</button></Link>
           <button onClick={() => handleDelete(p._id)}  className="btn btn-warning">Delete</button>
          </div>
        ))
      }
        </div>
    );
};

export default MyCrafts;