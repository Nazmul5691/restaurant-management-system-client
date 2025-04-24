import Cover from "../shared/Cover";
import oderFoodBg from '../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../hooks/useMenu";
import OderTabCard from "../shared/OderTabCard";
import { useParams } from "react-router-dom";


const OrderFood = () => {
    const categories = ['dessert','pizza','soup','salad','drinks']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const active = useParams()
    // console.log('active tab is',active);

    const desserts = menu.filter(item => item.category === 'dessert');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const soups = menu.filter(item => item.category === 'soup');
    const salads = menu.filter(item => item.category === 'salad');
    const drinks = menu.filter(item => item.category === 'drinks');


    return (
        <div>
            <Cover bgImage={oderFoodBg} title='Order Food' />
            
            <div>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Dessert</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Salad</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>

                    <TabPanel>
                        <OderTabCard item={desserts} />
                    </TabPanel>

                    <TabPanel>
                        <OderTabCard item={pizzas} />
                    </TabPanel>

                    <TabPanel>
                        <OderTabCard item={soups} />
                    </TabPanel>

                    <TabPanel>
                        <OderTabCard item={salads} />
                    </TabPanel>

                    <TabPanel>
                        <OderTabCard item={drinks} />
                    </TabPanel>
                    
                </Tabs>
            </div>
        </div>
    );
};

export default OrderFood;