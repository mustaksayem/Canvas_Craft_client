import Discount from "../components/body/Discount";
import LatestProduct from "../components/body/LatestProduct";
import Slider from "../components/body/Slider";



const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Discount></Discount>
            <LatestProduct></LatestProduct>
           
        </div>
    );
};

export default Home;