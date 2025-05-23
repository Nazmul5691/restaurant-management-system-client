import SectionsHeading from "./SectionsHeading";
import menuItems from '../utils/menuData'
import { useEffect, useState } from "react";
import MenuCard from "../shared/MenuCard";
import useMenu from "../hooks/useMenu";


const PopularItem = () => {
    // const [menu, setMenu] = useState([])

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
   
    // useEffect(() => {
    //     const popularItem = menuItems.filter(item => item.category === 'popular')
    //     setMenu(popularItem)
    // }, [])



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
                        popular.map(item => <MenuCard key={item._id} item={item} />)
                    }
                </div>
            </div>
            <button className="mt-10 flex mx-auto btn-outline border-[1px] border-b-[3px] btn">View Full Menu</button>
        </section>
    );
};

export default PopularItem;