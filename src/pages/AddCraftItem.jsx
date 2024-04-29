import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const AddCraftItem = () => {
  const { user } = useAuth() || {};
  const handleAddCarft = event => {
    event.preventDefault();

    const form = event.target;

    const item_name = form.item_name.value;
    const subcategory_Name = form.subcategory_Name.value;
    const short_description = form.short_description.value;
    const price = form.price.value;
    const image = form.image.value;
    const rating = form.rating.value;
    const processing_time = form.processing_time.value;
    const email = user.email;
    const userName = user.displayName;
    const customization = form.customization.value;
    const stockStatus = form.stockStatus.value;

    const newCarft = {
      item_name,
      subcategory_Name,
      short_description,
      price,
      image,
      rating,
      processing_time,
      email,
      userName,
      customization,
      stockStatus
    };
    console.log(newCarft);

    fetch("http://localhost:5000/add", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newCarft)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Carft Added Sucessfully",
            icon: "success",
            confirmButtonText: "Okay!"
          });
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleAddCarft}>
        <div className="w-full  bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-gray-100 flex items-center justify-center">
          <div className="bg-slate-100 dark:bg-slate-400 text-slate-600 dark:text-gray-100 py-6 px-10 sm:max-w-md w-full ">
            <div className="sm:text-3xl text-2xl font-semibold text-center text-sky-600  mb-12">Add Craft Item</div>
            
              <div>
                <input
                  type="text"
                  name="image"
                  className="focus:outline-none border-b w-full  border-sky-400 placeholder-gray-500 bg-slate-100 mb-8"
                  placeholder="Image Url "
                />
              </div>
              <div>
                <input
                  type="text"
                  name="item_name"
                  className="focus:outline-none border-b w-full  border-sky-400 placeholder-gray-500 bg-slate-100 mb-8"
                  placeholder="Item Name "
                />
              </div>

              <div>
                <input
                  type="text"
                  name="price"
                  className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 bg-slate-100 mb-8"
                  placeholder="Price "
                />
              </div>
              <div>
                <input
                  type="text"
                  name="rating"
                  className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 bg-slate-100 mb-8"
                  placeholder="Rating "
                />
              </div>

              <div>
                <input
                  type="text"
                  name="processing_time"
                  className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 bg-slate-100 mb-8"
                  placeholder="Processing Time"
                />
              </div>
              <div className="flex flex-row gap-1  items-center border-b border-sky-400 mb-6">
                <label className="font-semibold text-gray-500">
                  Customization <span className="text-red-500" />
                </label>

                <label className="text-gray-500">
                  <input type="radio" value="yes" className="input-radio mx-2 " name="customization" />
                  Yes
                </label>
                <label className="ml-3 text-gray-500">
                  <input type="radio" value="no" className="input-radio mx-2" name="customization" />
                  No
                </label>
              </div>

              <div className="flex flex-row gap-1  items-center border-b border-sky-400 mb-6">
                <label className="font-semibold text-gray-500  ">Stock Status</label>

                <label className="text-gray-500">
                  <input type="radio" value="stock" className="input-radio mx-2 " name="stockStatus" />
                  Stock
                </label>
                <label className="ml-3 text-gray-500">
                  <input type="radio" value="no" className="input-radio mx-2 " name="stockStatus" />
                  Made to Order
                </label>
              </div>

              <div>
                <input
                  type="text"
                  name="short_description"
                  className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 bg-slate-100 mb-8"
                  placeholder="Short Description "
                />
              </div>

              <div className="flex flex-col gap-1 border-b border-sky-400 mb-6">
                <label className="font-semibold text-gray-500">Subcategory Name</label>
                <select className="border-[1px] p-2 rounded-md" required name="subcategory_Name">
                  <option value="">Select Subcategory</option>
                  <option value="Landscape Painting">Landscape Painting</option>
                  <option value="Portrait Drawing">Portrait Drawing</option>
                  <option value="Watercolour Painting">Watercolour Painting</option>
                  <option value="Oil Painting">Oil Painting</option>
                  <option value="Charcoal Sketching">Charcoal Sketching</option>
                  <option value="Cartoon Drawing">Cartoon Drawing</option>
                </select>
              </div>

              <input type="submit" value="Add" className="btn btn-block bg-green-500" />
            
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCraftItem;
