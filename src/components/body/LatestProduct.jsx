

const LatestProduct = () => {
    return (
        <div className="dark:text-white  mt-4 md:mt-10 lg:mt-16">
      <h1 className="text-center text-4xl my-4 md:my-10 lg:my-16 ">Find Our Latest Product!!</h1>
      <hr />
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/qkKTH6K/photo-1630609083938-3acb39a06392.jpg)'}}>
<div className="hero-overlay bg-opacity-60 w-full bg-cover"></div>
<div className="hero-content text-center text-neutral-content">
<div className="max-w-md">
  <h1 className="mb-5 text-3xl font-bold">Get Our Latets Update !</h1>
  <p className="mb-5">Subscribe to our latest newsletter to get news about special discounts.</p>





  <fieldset className="w-full space-y-1 text-gray-800">
	<div className="flex h-10">
		<span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-l-md bg-gray-300">Suscribe</span>
		<input type="text" name="url" id="url" placeholder="Enter Your Email" className="flex flex-1 text-center border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 text-gray-800 bg-gray-100 focus:ring-violet-600" />
	</div>
</fieldset>





</div>
</div>
</div>
    </div>
    );
};

export default LatestProduct;