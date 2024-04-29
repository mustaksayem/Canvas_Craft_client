
import CraftSection from "../components/body/CraftSection";
import Discount from "../components/body/Discount";
import LatestProduct from "../components/body/LatestProduct";
import Slider from "../components/body/Slider";
import ArtCraftSection from "./ArtCraftSection";





const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <CraftSection></CraftSection>
            <ArtCraftSection></ArtCraftSection>
            <Discount></Discount>
            <LatestProduct></LatestProduct>
           
        </div>
    );
};

export default Home;