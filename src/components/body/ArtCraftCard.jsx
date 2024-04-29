import { Link } from "react-router-dom";

const ArtCraftCard = () => {
  return (
    <div>
      {/* <Link to="/artCraft/PortraitDrawing">View All Portrait Drawing </Link> */}
      <div className="divide-y divide-dashed text-2xl text-center  bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-gray-200">
      <div></div>
  
  <div className="py-10">Find your product by Sub-category Name</div>
  
  <div></div>
</div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-gray-200 ">
 
       <div>
        <div className="card w-full  bg-base-100 shadow-2xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/V351xPK/Landscape-Art.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Landscape Painting</h2>
            <p>In strokes of color, nature poetry unfurls on the canvas of the earth.</p>
            <div className="card-actions">
              <Link to="/artCraft/LandscapePainting"><button className="btn btn-primary">View ALL</button></Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="card w-full bg-base-100 shadow-2xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/tCCvfqM/deepika-1.jpg"
              
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Portrait Drawing</h2>
            <p>With graphite whispers, the souls essence etched upon parchment, a silent conversation captured in lines.</p>
            <div className="card-actions">
              <Link to="/artCraft/PortraitDrawing"><button className="btn btn-primary">View ALL</button></Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="card w-full bg-base-300 shadow-2xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/Qp3mmwv/qqq-1.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Watercolour Painting</h2>
            <p>In delicate hues and fluid grace, the dance of watercolors tells stories of ethereal beauty and fleeting moments.</p>
            <div className="card-actions">
              <Link to="/artCraft/WatercolourPainting"><button className="btn btn-primary">View ALL</button></Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="card w-full  bg-base-300 shadow-2xl ">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/JcVTyjT/Vicent-Van-Gogh-Starry-Night-Famous-Oil-Paintings-www-shairart-com-1.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Oil Painting</h2>
            <p>With each brushstroke, a symphony of textures and emotions unfolds, immortalizing the essence of time.</p>
            <div className="card-actions">
              <Link to="/artCraft/OilPainting"><button className="btn btn-primary">View ALL</button></Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="card w-full bg-base-100 shadow-2xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/kyLYBzL/45678i-1.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title"> Charcoal Sketching</h2>
            <p>In shades of gray, whispers of life emerge from the depths, capturing raw emotion with each stroke of charcoal.</p>
            <div className="card-actions">
              <Link to="/artCraft/CharcoalSketching"><button className="btn btn-primary">View ALL</button></Link>
            </div>
          </div>
        </div>
      </div>
      <div>
     <div className="card w-full bg-base-100 shadow-2xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/Cn94LHv/dbb5e194c694aa134c654002a4eb6f9d-1.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Cartoon Drawing</h2>
            <p>With playful lines and vibrant colors, worlds of whimsy and laughter spring forth from the tip of the pen.</p>
            <div className="card-actions">
              <Link to="/artCraft/CartoonDrawing"><button className="btn btn-primary">View ALL</button></Link>
            </div>
          </div>
     </div>
      </div>
 </div>
    </div>
  );
};

export default ArtCraftCard;
