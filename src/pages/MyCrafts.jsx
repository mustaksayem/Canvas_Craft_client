import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const MyCrafts = () => {
  const { user } = useAuth() || {};
  const [item, setItem] = useState([]);
  const [control, setControl] = useState(false);
  const [filter, setFilter] = useState("all");
  console.log(user);
  useEffect(
    () => {
      fetch(`http://localhost:5000/myCrafts/${user?.email}`)
        .then(res => res.json())
        .then(data => {
          setItem(data);
        });
    },
    [user, control]
  );
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
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myCrafts/${_id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deleteCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
            toast.success("Deleted item");
            if (control == false) {
              setControl(true);
            } else if (control == true) {
              setControl(false);
            }
          });
      }
    });
  };
  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const filteredItems = filter === "all" ? item : item.filter(item => item.customization === filter);
  return (
    <div className="bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-gray-200">
      <h1 className="text-center text-2xl  bg-slate-400  rounded-lg p-6 text-[#FFFF] ">See All Your Product</h1>
      <div className="flex justify-center pt-6 ">
        <select
          className="select select-bordered join-item  text-lg font-semibold text-gray-400 rounded-lg mx-[150px] lg:mx-[550px]"
          value={filter}
          onChange={handleFilterChange}
        >
          <option className="bg-white text-gray-400" value="all">
            All
          </option>
          <option className="bg-white text-black" value="yes">
            Customized
          </option>
          <option className="bg-white text-black" value="no">
            Non-customized
          </option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 ">
        {filteredItems?.map((p, index) => (
          <div key={index}>
            {/* <img src={p.image} alt="" />
            <h1>{p.price}</h1> */}
            {/*            
            <Link to={`/update/${p._id}`}><button className="btn btn-primary">Update</button></Link>
           <button onClick={() => handleDelete(p._id)}  className="btn btn-warning">Delete</button> */}

            <div className="flex flex-col  p-3  gap-3   overflow-hidden shadow-lg bg-white rounded-2xl  mt-10 ">
              <div className="mb-6 relative ">
                <img src={p.image} alt="" className="w-full h-[335px] object-cover   rounded-2xl bg-[#13131326]" />
                <div className="absolute left-4 right-4 top-4" />
              </div>
              <div className=" ">
                <div>
                  <h2 className="font-bold text-center text-2xl my-4 text-[#131313]">{p.item_name}</h2>
                </div>

                <div className="flex gap-4 justify-center">
                  <div>
                    <p className="font-semibold text-xl text-[#131313CC]">Price: {p.price}</p>
                  </div>
                  <div>
                    {" "}
                    <p className="font-semibold text-xl text-[#131313CC]">Rating: {p.rating}</p>
                  </div>
                </div>
                <div className="">
                  <div>
                    <p className="font-semibold text-xl text-[#131313CC] text-center ">Customization: {p.customization}</p>
                  </div>
                  <div>
                    {" "}
                    <p className="font-semibold text-xl text-[#131313CC] text-center">Stock Status: {p.stockStatus}</p>
                  </div>
                </div>

                <div className="flex mt-2  gap-6 justify-center">
                  <div>
                    <Link to={`/update/${p._id}`}>
                      {" "}
                      <button className=" p-3 rounded-lg text-[#FFFFFF] text-lg font-semibold bg-[#59C6D2]">Update</button>
                    </Link>
                  </div>
                  <div>
                    <button onClick={() => handleDelete(p._id)} className="p-3 rounded-lg text-[#FFFFFF] text-lg font-semibold bg-red-700">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCrafts;
