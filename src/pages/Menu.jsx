import { Helmet } from "react-helmet-async";
import Cover from "../shared/Cover";
import bgImage from '../assets/menu/banner3.jpg'
import PopularItem from "../components/PopularItem";


const Menu = () => {
    return (
        <div>
            <Helmet title="Hungry Hut | Menu" />
            <div className="flex flex-col gap-10">
                <Cover bgImage={bgImage} title='Our Menu' />
                <PopularItem />
                <Cover bgImage={bgImage} title='Our Menu' />
                <PopularItem />
                <Cover bgImage={bgImage} title='Our Menu' />
                <PopularItem />
            </div>
        </div>
    );
};

export default Menu;