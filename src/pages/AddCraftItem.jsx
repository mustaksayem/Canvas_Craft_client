import Swal from 'sweetalert2'
import useAuth from '../hooks/useAuth';

const AddCraftItem = () => {

  const { user } = useAuth() || {};
   const handleAddCarft = event =>{
    event.preventDefault();

    const form = event.target;


    const name = form.name.value;
    const subcataegory = form.subcataegory.value;
    const description = form.description.value;
    const price = form.price.value;
    const picture = form.picture.value;
    const rating = form.rating.value;
    const processingTime = form.processingTime.value;
    const email = user.email;
    const userName = user.displayName;
    const customization = form.customization.value;

    const newCarft = {name,subcataegory,description, price, picture,rating,processingTime,email,userName,customization }
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