import useMenu from "../hooks/useMenu";
import Cover from "./Cover";
import MenuCard from "./MenuCard";


const MenuCategory = ({items, title, image}) => {
    // const [menu] = useMenu()
    return (
        <div>
            {title && <Cover title={title} bgImage={image} />}
            <div className="grid grid-cols-2 gap-8 pt-10">
                {
                    items.map(item => <MenuCard key={item._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default MenuCategory;