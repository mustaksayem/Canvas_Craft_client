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
        <div>
            Add Craft Item

           <form onSubmit={handleAddCarft}>
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

<input type="submit" value="Add To Craft" className="btn btn-block" />


           </form>
            
        </div>
    );
};

export default AddCraftItem;