import Banner from "../components/Banner";
import { Category } from "../components/Category";
import Featured from "../components/Featured";
import PopularItem from "../components/PopularItem";
import Testimonial from "../components/Testimonial";


const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <PopularItem />
            <Featured />
            <Testimonial />
        </div>
    );
};

export default Home;