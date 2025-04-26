import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";


const FoodCard = ({ item }) => {
    const { image, price, name, recipe } = item;
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleAddToCart = (food) => {
        // console.log(food, user.email);
        if (user && user.email) {
            //
        }
        else {
            Swal.fire({
                title: "You are not login",
                text: "Please login first to add to the cart !",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login !"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            });
        }
    }

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
                    <button onClick={() => handleAddToCart(item)} className="btn-outline border-[1px] border-b-[3px] btn">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;