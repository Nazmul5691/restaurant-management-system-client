import { FaTrash } from "react-icons/fa";
import useCarts from "../hooks/useCarts";

const Cart = () => {
    const [cart] = useCarts();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
        <div className="p-8">
            {/* Cart Heading */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold mb-2">My Cart</h1>
                    <p className="text-lg">Total Items: <span className="font-semibold">{cart.length}</span></p>
                    <p className="text-lg">Total Price: <span className="font-semibold">${totalPrice.toFixed(2)}</span></p>
                </div>
                <button className="btn btn-primary mt-4 md:mt-0">
                    Proceed to Pay
                </button>
            </div>

            {/* Cart Table */}
            <div className="overflow-x-auto bg-white shadow rounded-lg">
                <table className="table w-full">
                    {/* Table Head */}
                    <thead className="bg-orange-500 text-white">
                        <tr>
                            <th>#</th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {
                            cart.map((item, index) => (
                                <tr key={item._id} className="hover:bg-orange-50 transition">
                                    <td className="font-semibold">{index + 1}</td>

                                    {/* Item Image */}
                                    <td>
                                        <div className="flex items-center gap-4">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt={item.name} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Item Name */}
                                    <td className="font-medium">{item.name}</td>

                                    {/* Price */}
                                    <td className="text-green-600 font-semibold">${item.price.toFixed(2)}</td>

                                    {/* Delete Button */}
                                    <td>
                                        <button className="btn bg-red-500 btn-sm hover:scale-110 transition">
                                            <FaTrash className=" h-4 w-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;
