
import { FaTrash } from "react-icons/fa";
import useCarts from "../../hooks/useCarts";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Cart = () => {
    const [cart, refetch] = useCarts();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className="relative">
            {/* Cart Heading */}
            <div className="sticky top-5 bg-white z-10 rounded-md">
                <div className="flex flex-col md:flex-row p-3 justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold">My Cart</h1>
                        <p className="text-lg">Total Items: <span className="font-semibold">{cart.length}</span></p>
                        <p className="text-lg">Total Price: <span className="font-semibold">${totalPrice.toFixed(2)}</span></p>
                    </div>
                    <button className="btn btn-primary">
                        Proceed to Pay
                    </button>
                </div>
            </div>

            {/* Cart Table */}
            <div className="bg-white shadow rounded-lg mt-12 overflow-hidden">
                {/* Scrollable area */}
                <div className="overflow-y-auto" style={{ maxHeight: '450px' }}>
                    <table className="table w-full">
                        {/* Table Head */}
                        <thead className="bg-orange-500 text-white sticky top-0 z-10">
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
                                    <tr key={item._id} className="hover:bg-orange-50 transition text-sm">
                                        <td className="font-semibold py-2">{index + 1}</td>
                                        {/* Item Image */}
                                        <td className="py-2">
                                            <div className="flex items-center gap-4">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-10 h-10">
                                                        <img src={item.image} alt={item.name} />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Item Name */}
                                        <td className="font-medium py-2">{item.name}</td>

                                        {/* Price */}
                                        <td className="text-green-600 font-semibold py-2">${item.price.toFixed(2)}</td>

                                        {/* Delete Button */}
                                        <td className="py-2">
                                            <button onClick={() => handleDelete(item._id)} className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition duration-200 hover:scale-105"
                                            title="Delete User"
                                            >
                                                <FaTrash className="h-4 w-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;
