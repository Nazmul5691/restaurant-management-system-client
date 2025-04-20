import Banner from "../components/Banner";
import { Category } from "../components/Category";
import PopularItem from "../components/PopularItem";


const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <PopularItem />
        </div>
    );
};

export default Home;