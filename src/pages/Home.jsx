
import CraftSection from "../components/body/CraftSection";
import Discount from "../components/body/Discount";
import LatestProduct from "../components/body/LatestProduct";
import Slider from "../components/body/Slider";





const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <CraftSection></CraftSection>
            <Discount></Discount>
            <LatestProduct></LatestProduct>
           
        </div>
    );
};

export default Home;