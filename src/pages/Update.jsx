import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const { id } = useParams();
  console.log(id);
  const [craft, setCrafts] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/carftsDetails/${id}`)
      .then(res => res.json())
      .then((data) => {
        setCrafts(data);
      })
      .catch(error => console.error('Error fetching crafts:', error));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const info = Object.fromEntries(formData.entries());

    fetch(`http://localhost:5000/update/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(info),
    })
      .then(res => res.json())
      .then((data) => {
        console.log("Craft updated successfully:", data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Craft Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Okay!'
            
          });
        }
      })
      .catch(error => console.error('Error updating craft:', error));
  };

  return (
    <div>
      <form onSubmit={handleUpdate}>
        <div className="w-full h-auto overflow-scroll bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 pt-4 flex items-center justify-center">
          <div className="bg-white py-6 px-10 sm:max-w-md w-full ">
            <div className="sm:text-3xl text-2xl font-semibold text-center text-sky-600 mb-12">
              Update Your Item
            </div>
            <div className="">
              <div>
                <input type="text" name='image' className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8" placeholder="Image Url " defaultValue={craft.image} />
              </div>
              <div>
                <input type="text" name="item_name" className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8" defaultValue={craft.item_name} placeholder="Item Name " />
              </div>
              <div>
                <input type="text" name='price' className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8" placeholder="Price " defaultValue={craft.price} />
              </div>
              <div>
                <input type="text" name='rating' className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8" placeholder="Rating " defaultValue={craft.rating} />
              </div>
              <div>
                <input type="text" name='processing_time' className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8" placeholder="Processing Time" defaultValue={craft.processing_time} />
              </div>
              <div className='flex flex-row gap-1 items-center border-b border-sky-400 mb-6'>
                <label className='font-semibold text-gray-500'>Customization</label>
                <label className='text-gray-500'>
                  <input
                    type='radio'
                    value='yes'
                    className='input-radio mx-2 '
                    name='customization'
                  />
                  Yes
                </label>
                <label className="ml-3 text-gray-500">
                  <input
                    type='radio'
                    value='no'
                    className='input-radio mx-2'
                    name='customization'
                  />
                  No
                </label>
              </div>
              <div className='flex flex-row gap-1 items-center border-b border-sky-400 mb-6'>
                <label className='font-semibold text-gray-500'>Stock Status</label>
                <label className='text-gray-500'>
                  <input
                    type='radio'
                    value='Stock'
                    className='input-radio mx-2 '
                    name='stockStatus'
                  />
                  Stock
                </label>
                <label className="ml-3 text-gray-500">
                  <input
                    type='radio'
                    value='Made to Order'
                    className='input-radio mx-2 '
                    name='stockStatus'
                  />
                  Made to Order
                </label>
              </div>
              <div>
                <input type="text" name='short_description' className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8" placeholder="Short Description " defaultValue={craft.short_description} />
              </div>
              <div className='flex flex-col gap-1 border-b border-sky-400 mb-6'>
                <label className='font-semibold text-gray-500'>Subcategory Name</label>
                <select
                  className='border-[1px] p-2 rounded-md'
                  required
                  name='subcategory_Name'
                >
                  <option value=''>Select Subcategory</option>
                  <option value='Wooden Furniture & Sculptures'>Landscape Painting</option>
                  <option value='Wooden Home Decor'>Portrait Drawing</option>
                  <option value='Wooden Utensils and Kitchenware'>Watercolour Painting</option>
                  <option value='Jute Home Decor'>Oil Painting</option>
                  <option value='Jute Kitchenware & utensils'>Charcoal Sketching</option>
                  <option value='Jute and wooden jewellery'>Cartoon Drawing</option>
                </select>
              </div>
              <input type="submit" value="Update" className="btn btn-block bg-green-500" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
// yhtgrfdnbgvfchgf

export default Update;
