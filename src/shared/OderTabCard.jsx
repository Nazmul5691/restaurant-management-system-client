import FoodCard from "./FoodCard";

const OderTabCard = ({item}) => {
    return (
        <div className="grid grid-cols-3 gap-10">
            {
                item.map(item => <FoodCard key={item._id} item={item} />)
            }
        </div>
    );
};

export default OderTabCard;