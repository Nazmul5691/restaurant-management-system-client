import { Link } from "react-router-dom";
import useMenu from "../hooks/useMenu";
import Cover from "./Cover";
import MenuCard from "./MenuCard";


const MenuCategory = ({ items, title, image }) => {
    // const [menu] = useMenu()
    return (
        <div>
            {title && <Cover title={title} bgImage={image} />}
            <div className="grid grid-cols-2 gap-8 pt-10">
                {
                    items.map(item => <MenuCard key={item._id} item={item} />)
                }
            </div>
            <div className="pt-5">
                <Link to={`/orderFood/${title}`}>
                    <button className="btn-outline border-[1px] border-b-[3px] btn">Order Now</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;