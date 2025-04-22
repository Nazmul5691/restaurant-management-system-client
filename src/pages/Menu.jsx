import { Helmet } from "react-helmet-async";
import Cover from "../shared/Cover";
import bgImage from '../assets/menu/banner3.jpg'
import dessertBg from '../assets/menu/dessert-bg.jpeg'
import piazzaBg from '../assets/menu/pizza-bg.jpg'
import soupBg from '../assets/menu/soup-bg.jpg'
import saladBg from '../assets/menu/salad-bg.jpg'
import SectionsHeading from "../components/SectionsHeading";
import useMenu from "../hooks/useMenu";
import MenuCategory from "../shared/MenuCategory";


const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered')
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const soups = menu.filter(item => item.category === 'soup')
    const salads = menu.filter(item => item.category === 'salad')

    return (
        <div>
            <Helmet title="Hungry Hut | Menu" />
            
            <div className="flex flex-col gap-10">
                <Cover bgImage={bgImage} title='Our Menu' />

                {/* offered menu */}
                <SectionsHeading subHeading="Don't Miss" heading="Today's Offer" />
                <MenuCategory items={offered} />

                {/* dessert menu */}
                <SectionsHeading subHeading="Try Our Dessert" heading="Dessert" />
                <MenuCategory items={desserts} title='Dessert' image={dessertBg} />

                {/* pizza menu */}
                <SectionsHeading subHeading="Try Our Pizza" heading="Pizza" />
                <MenuCategory items={pizzas} title='Pizza' image={piazzaBg} />

                {/* soup menu */}
                <SectionsHeading subHeading="Try Our Soup" heading="Soup" />
                <MenuCategory items={soups} title='Soup' image={soupBg} />

                {/* salad menu */}
                <SectionsHeading subHeading="Try Our Soup" heading="Soup" />
                <MenuCategory items={salads} title='Salad' image={saladBg} />
            </div>
        </div>
    );
};

export default Menu;