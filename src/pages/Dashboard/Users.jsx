import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const Users = () => {
    const axiosSecure = useAxiosSecure();


    // const { data: users = [], refetch } = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get('/users', {
    //             headers: {
    //                 authorization : `Bearer ${localStorage.getItem('access-token')}`
    //             }
    //         })
    //         return res.data;
    //     }
    // })


    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })

    const handleDeleteUser = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
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


    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }


    return (
        <div className="relative pt-8">
            {/* Heading */}
            <div className="text-center space-y-2 mb-6">
                <h1 className="text-4xl font-extrabold text-gray-800">All Users</h1>
                <p className="text-gray-500">---Manage all registered users from here---</p>
            </div>

            {/* Table Card */}
            <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200">
                {/* Scrollable Table */}
                <div className="overflow-auto max-h-[500px]">
                    <table className="min-w-full text-sm text-left text-gray-600">
                        {/* Table Head */}
                        <thead className="bg-orange-500 text-white sticky top-0 z-10 text-sm uppercase">
                            <tr>
                                <th className="px-6 py-4">#</th>
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4">Email</th>
                                <th className="px-6 py-4">Role</th>
                                <th className="px-6 py-4 text-center">Action</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody>
                            {users.length > 0 ? (
                                users.map((user, index) => (
                                    <tr
                                        key={user._id}
                                        className="hover:bg-orange-50 text-black transition duration-200 border-b"
                                    >
                                        <td className="px-6 py-3 font-medium">{index + 1}</td>
                                        <td className="px-6 py-3">{user.name}</td>
                                        <td className="px-6 py-3">{user.email}</td>
                                        <td className="px-6 py-3 text-green-600 font-semibold capitalize">
                                            {user.role === 'admin' ? 'Admin' :
                                                <button
                                                    onClick={() => handleMakeAdmin(user)}
                                                    className="bg-orange-500 hover:bg-orange-700 text-white p-2 rounded-full transition duration-200 hover:scale-105"
                                                    title="Make Admin"
                                                >
                                                    <FaUsers className="w-4 h-4" />
                                                </button>
                                            }
                                        </td>
                                        <td className="px-6 py-3 text-center">
                                            <button
                                                onClick={() => handleDeleteUser(user)}
                                                className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition duration-200 hover:scale-105"
                                                title="Delete User"
                                            >
                                                <FaTrash className="w-4 h-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="5"
                                        className="text-center py-6 text-gray-400 font-medium"
                                    >
                                        No users found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;