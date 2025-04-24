

const FoodCard = ({item}) => {
    const {image, price, name,recipe} = item;

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={image}
                    alt="foodCard" />
            </figure>
            <p className="absolute right-5 top-2 px-3 py-1 bg-slate-700 text-white rounded">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn-outline border-[1px]   border-b-[3px] btn">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;