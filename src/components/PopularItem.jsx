import SectionsHeading from "./SectionsHeading";
import menuItems from '../utils/menuData'
import { useEffect, useState } from "react";
import MenuCard from "../shared/MenuCard";


const PopularItem = () => {
    const [menu, setMenu] = useState([])


    useEffect(() => {
        const popularItem = menuItems.filter(item => item.category === 'popular')
        setMenu(popularItem)
    }, [])



    return (
        <section className="pb-10">
            <div>
                <SectionsHeading
                    subHeading='Items'
                    heading='Our Popular Items'
                />
            </div>
            <div>
                <div className="grid grid-cols-2 gap-8 pt-10">
                    {
                        menu.map(item => <MenuCard key={item._id} item={item} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default PopularItem;