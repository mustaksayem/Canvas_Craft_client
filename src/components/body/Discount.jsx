const Discount = () => {
  return (
    <div className="  bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-gray-200">
      <h1 className="text-center text-4xl p-10 ">Check Our Discount And Enjoy!!</h1>
      <hr />

      <div className="flex flex-col lg:flex-row justify-center items-center ">
        <div className="card  bg-base-100  image-full  my-4 md:my-10  justify-center items-center bg-cover mx-10 ">
          <figure>
            <img
              src="https://i.ibb.co/CMtWwcW/IMG-1512-scaled.jpg
"
              alt="Shoes"
              className="w-full"
            />
          </figure>
          <div className="card-body justify-center items-center">
            <h2 className="card-title text-white font-bold">Flat discount 30% </h2>
            <h1 className="text-white text-2xl font-extrabold">For New User!!</h1>
            <div className="card-actions justify-start">
              <button className="btn btn-primary bg-blue-500">Buy Now</button>
            </div>
          </div>
        </div>

       
          <div className="card  bg-base-100  image-full  my-4 md:my-10  justify-center items-center bg-cover mx-10  ">
            <figure>
              <img
                src="https://i.ibb.co/GTZJB7q/img2mkckejc.jpg
"
                alt="Shoes"
                className="h-full"
              />
            </figure>
            <div className="card-body justify-center items-center ">
              <h2 className="card-title text-white font-bold">Flat discount 30% </h2>
              <h1 className="text-white text-2xl font-extrabold">Buy more than $5000!!</h1>
              <div className="card-actions justify-start">
                <button className="btn btn-primary bg-blue-500">Buy Now</button>
              </div>
            </div>
          </div>
         
        


      </div>
      <hr />
    </div>
  );
};

export default Discount;
