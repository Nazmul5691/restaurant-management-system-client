import { FaCalendar, FaHome, FaShoppingCart, FaStar, FaBookOpen } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-gradient-to-b from-orange-500 to-orange-700 text-white shadow-lg">
                <div className="p-6 text-center font-bold text-2xl border-b border-orange-300">
                    🍽️ Bistro Boss
                </div>
                <ul className="menu p-4 space-y-2 w-full">
                    <li>
                        <NavLink
                            to='/dashboard/userHome'
                            className={({ isActive }) =>
                                `block w-full p-3 rounded-lg hover:bg-orange-800 transition ${isActive ? 'bg-orange-900' : ''}`
                            }
                        >
                            <div className="flex items-center gap-3">
                                <FaHome />
                                <span>User Home</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/dashboard/reservation'
                            className={({ isActive }) =>
                                `block w-full p-3 rounded-lg hover:bg-orange-800 transition ${isActive ? 'bg-orange-900' : ''}`
                            }
                        >
                            <div className="flex items-center gap-3">
                                <FaCalendar />
                                <span>Reservation</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/dashboard/cart'
                            className={({ isActive }) =>
                                `block w-full p-3 rounded-lg hover:bg-orange-800 transition ${isActive ? 'bg-orange-900' : ''}`
                            }
                        >
                            <div className="flex items-center gap-3">
                                <FaShoppingCart />
                                <span>My Cart</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/dashboard/review'
                            className={({ isActive }) =>
                                `block w-full p-3 rounded-lg hover:bg-orange-800 transition ${isActive ? 'bg-orange-900' : ''}`
                            }
                        >
                            <div className="flex items-center gap-3">
                                <FaStar />
                                <span>My Review</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/dashboard/booking'
                            className={({ isActive }) =>
                                `block w-full p-3 rounded-lg hover:bg-orange-800 transition ${isActive ? 'bg-orange-900' : ''}`
                            }
                        >
                            <div className="flex items-center gap-3">
                                <FaBookOpen />
                                <span>My Bookings</span>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;





// import { FaCalendar, FaHome, FaShoppingCart } from "react-icons/fa";
// import { NavLink, Outlet } from "react-router-dom";


// const Dashboard = () => {
//     return (
//         <div className="flex">
//             {/* dashboard side bar */}
//             <div className="w-64 min-h-screen bg-orange-400">
//                 <ul className="menu p-4">
//                     <li>
//                         <NavLink to='/dashboard/userHome'>
//                             <FaHome />
//                             User Home
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink to='/dashboard/reservation'>
//                             <FaCalendar />
//                             Reservation
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink to='/dashboard/cart'>
//                             <FaShoppingCart />
//                             My cart
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink to='/dashboard/review'>
//                             <FaHome />
//                             My Review
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink to='/dashboard/booking'>
//                             <FaHome />
//                             My Bookings
//                         </NavLink>
//                     </li>
//                 </ul>
//             </div>

//             {/* dashboard content */}
//             <div>
//                 <Outlet />
//             </div>
//         </div>
//     );
// };

// export default Dashboard;