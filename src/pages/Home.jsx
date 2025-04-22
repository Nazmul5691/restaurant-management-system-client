import Banner from "../components/Banner";
import { Category } from "../components/Category";
import Featured from "../components/Featured";
import PopularItem from "../components/PopularItem";
import Testimonial from "../components/Testimonial";
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            <Helmet title="Hungry Hut | Home" />
            <Banner />
            <Category />
            <PopularItem />
            <Featured />
            <Testimonial />
        </div>
    );
};

export default Home;