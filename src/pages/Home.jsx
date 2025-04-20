import Banner from "../components/Banner";
import { Category } from "../components/Category";
import Featured from "../components/Featured";
import PopularItem from "../components/PopularItem";


const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <PopularItem />
            <Featured />
        </div>
    );
};

export default Home;