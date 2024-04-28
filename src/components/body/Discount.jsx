const Discount = () => {
  return (
    <div className="dark:text-white  my-4 md:my-10 lg:my-16">
      <h1 className="text-center text-4xl my-4 md:my-10 lg:my-16 ">Check Our Discount And Enjoy!!</h1>
      <hr />

      <div className="flex flex-col lg:flex-row justify-center items-center ">
        <div className="card w-1/2 bg-base-100  image-full  my-4 md:my-10  justify-center items-center bg-cover mx-10 ">
          <figure>
            <img
              src="https://i.ibb.co/CMtWwcW/IMG-1512-scaled.jpg
"
              alt="Shoes"
              className=""
            />
          </figure>
          <div className="card-body justify-center items-center">
            <h2 className="card-title text-white font-bold">Flat discount 30% </h2>
            <h1 className="text-white text-2xl font-extrabold">For New User!!</h1>
            <div className="card-actions justify-start">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

       
          <div className="card w-1/2  bg-base-100  image-full  my-4 md:my-10  justify-center items-center bg-cover mx-10  ">
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
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
         
        


      </div>
      <hr />
    </div>
  );
};

export default Discount;
