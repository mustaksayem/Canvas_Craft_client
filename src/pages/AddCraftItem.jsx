import Swal from 'sweetalert2'
import useAuth from '../hooks/useAuth';

const AddCraftItem = () => {

  const { user } = useAuth() || {};
   const handleAddCarft = event =>{
    event.preventDefault();

    const form = event.target;


    const  item_name = form.item_name.value;
    const subcategory_Name = form.subcategory_Name.value;
    const  short_description = form.short_description.value;
    const price = form.price.value;
    const  image = form.image.value;
    const rating = form.rating.value;
    const processing_time = form.processing_time.value;
    const email = user.email;
    const userName = user.displayName;
    const customization = form.customization.value;
    const stockStatus= form.stockStatus.value;

    const newCarft = {item_name,subcategory_Name,short_description, price, image,rating,processing_time,email,userName,customization,stockStatus }
    console.log(newCarft);  

fetch('http://localhost:5000/add',{
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body:JSON.stringify(newCarft)
})
.then (res => res.json())
.then(data => {
    console.log(data);
    if(data.insertedId){
        Swal.fire({
            title: 'Success!',
            text: 'Carft Added Sucessfully',
            icon: 'success',
            confirmButtonText: 'Okay!'
          })
    }
})

}



    return (
        <div className='text-gray-200 dark:text-white'>
            {/* Add Craft Item

          
           <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Name</span>

  </div>
  <input type="text" name="name" placeholder="Name" className="input input-bordered w-full max-w-xs" />
  
</label>

<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Sub-cataegory</span>

  </div>
  <input type="text"name="subcataegory" placeholder="Sub-cataegory" className="input input-bordered w-full max-w-xs" />

  
</label>

<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Description</span>

  </div>
  <input type="text"name="description"  placeholder="Description" className="input input-bordered w-full max-w-xs" />
  
  
</label>
<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Price</span>

  </div>
  <input type="text" name="price"  placeholder="Price" className="input input-bordered w-full max-w-xs" />
  
  
</label>

<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Customization</span>

  </div>
  <input type="text" name="customization"  placeholder="Customization" className="input input-bordered w-full max-w-xs" />
  
  
</label>


<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Picture</span>

  </div>
  <input type="text" name="picture"  placeholder="Picture" className="input input-bordered w-full max-w-xs" />
  
  
</label>
<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Rating</span>

  </div>
  <input type="text" name="rating"  placeholder="Rating" className="input input-bordered w-full max-w-xs" />
  
  
</label>
<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Processing Time</span>

  </div>
  <input type="text" name="processingTime"  placeholder="Processing Time" className="input input-bordered w-full max-w-xs" />
  
  
</label>

<input type="submit" value="Add To Craft" className="btn btn-block" /> */}


         

<form onSubmit={handleAddCarft}>
          
<div className="w-full h-auto overflow-scroll block h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex items-center justify-center" >
    <div className="bg-white py-6 px-10 sm:max-w-md w-full ">
        <div className="sm:text-3xl text-2xl font-semibold text-center text-sky-600  mb-12">
        Add Craft Item
        </div>
        <div className="">
        <div>
            <input type="text" name='image' className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"  placeholder="Image Url "/>
            </div>
            <div>
                 <input type="text" name="item_name" className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"  placeholder="Item Name "/>
            </div>
       
            
             <div>
            <input type="text" name='price' className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"  placeholder="Price "/>
            </div>
            <div>
            <input type="text" name='rating' className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"  placeholder="Rating "/>
            </div>
           
            <div>
            <input type="text" name='processing_time' className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"  placeholder="Processing Time"/>
            </div>
            <div className='flex flex-row gap-1  items-center border-b border-sky-400 mb-6'>
          <label className='font-semibold'>
            Customization <span className='text-red-500'></span>
          </label>
         
          <label>
            <input
              type='radio'
              value='yes'
              className='input-radio mx-2'
              name='customization'
            />
            Yes
          </label>
          <label className="ml-3">
            <input
              type='radio'
              value='no'
              className='input-radio mx-2'
              name='customization'
            />
            No
          </label>
        </div>

        <div className='flex flex-row gap-1  items-center border-b border-sky-400 mb-6'>
          <label className='font-semibold  '>
          Stock Status
          </label>
         
          <label>
            <input
              type='radio'
              value='stock'
              className='input-radio mx-2'
              name='stockStatus'
            />
            Stock
          </label>
          <label className="ml-3">
            <input
              type='radio'
              value='no'
              className='input-radio mx-2'
              name='stockStatus'
            />
             Made to Order
          </label>
        </div>

        <div>
            <input type="text" name='short_description' className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"  placeholder="Short Description "/>
            </div>

        <div className='flex flex-col gap-1 border-b border-sky-400 mb-6'>
  <label className='font-semibold'>
    Subcategory Name 
  </label>
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

      
           
          <input type="submit" value="Add" className="btn btn-block bg-green-500" />
           
        </div>
    </div>
</div>
</form>
            
        </div>
    );
};

export default AddCraftItem;