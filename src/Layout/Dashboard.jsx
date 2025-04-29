import { FaCalendar, FaHome, FaShoppingCart, FaStar, FaBookOpen, FaBars, FaEnvelope, FaUtensils, FaList, FaUser, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {

    const isAdmin = true;

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-gradient-to-b min-h-screen fixed from-orange-500 to-orange-700 text-white shadow-lg">
                <div className="p-6 text-center font-bold text-2xl border-b border-orange-300">
                    🍽️ Bistro Boss
                </div>
                <ul className="menu p-4 space-y-2 w-full">
                    {
                        isAdmin ?
                            // users route
                            <>
                                <li>
                                    <NavLink
                                        to='/dashboard/adminHome'
                                        className={({ isActive }) =>
                                            `block w-full p-3 rounded-lg hover:bg-orange-800 transition ${isActive ? 'bg-orange-900' : ''}`
                                        }
                                    >
                                        <div className="flex items-center gap-3">
                                            <FaHome />
                                            <span>Admin Home</span>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/dashboard/addItems'
                                        className={({ isActive }) =>
                                            `block w-full p-3 rounded-lg hover:bg-orange-800 transition ${isActive ? 'bg-orange-900' : ''}`
                                        }
                                    >
                                        <div className="flex items-center gap-3">
                                            <FaUtensils />
                                            <span>Add Items</span>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/dashboard/manageItems'
                                        className={({ isActive }) =>
                                            `block w-full p-3 rounded-lg hover:bg-orange-800 transition ${isActive ? 'bg-orange-900' : ''}`
                                        }
                                    >
                                        <div className="flex items-center gap-3">
                                            <FaList />
                                            <span>Manage Items</span>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/dashboard/manageBookings'
                                        className={({ isActive }) =>
                                            `block w-full p-3 rounded-lg hover:bg-orange-800 transition ${isActive ? 'bg-orange-900' : ''}`
                                        }
                                    >
                                        <div className="flex items-center gap-3">
                                            <FaBookOpen />
                                            <span>Manage Bookings</span>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/dashboard/users'
                                        className={({ isActive }) =>
                                            `block w-full p-3 rounded-lg hover:bg-orange-800 transition ${isActive ? 'bg-orange-900' : ''}`
                                        }
                                    >
                                        <div className="flex items-center gap-3">
                                            <FaUsers />
                                            <span>All Users</span>
                                        </div>
                                    </NavLink>
                                </li>
                            </>
                            :

                            // users routes
                            <>
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
                            </>
                    }

                    {/* Divider */}
                    <div className="divider border-t border-orange-300 my-4"></div>



                    {/* Main Site Navigation */}
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) =>
                                `block w-full p-3 rounded-lg hover:bg-orange-800 transition ${isActive ? 'bg-orange-900' : ''}`
                            }
                        >
                            <div className="flex items-center gap-3">
                                <FaHome />
                                <span>Home</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/orderFood/dessert'
                            className={({ isActive }) =>
                                `block w-full p-3 rounded-lg hover:bg-orange-800 transition ${isActive ? 'bg-orange-900' : ''}`
                            }
                        >
                            <div className="flex items-center gap-3">
                                <FaBars />
                                <span>Menu</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/'
                            onClick={(e) => e.preventDefault()}
                            className={({ isActive }) =>
                                `block w-full p-3 rounded-lg hover:bg-orange-800 transition ${isActive ? 'bg-orange-900' : ''}`
                            }
                        >
                            <div className="flex items-center gap-3">
                                <FaShoppingCart />
                                <span>Shop</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/'
                            onClick={(e) => e.preventDefault()}
                            className={({ isActive }) =>
                                `block w-full p-3 rounded-lg hover:bg-orange-800 transition ${isActive ? 'bg-orange-900' : ''}`
                            }
                        >
                            <div className="flex items-center gap-3">
                                <FaEnvelope />
                                <span>Contact</span>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 px-8 pt-0 ml-64">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;




