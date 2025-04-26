import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";
import { BsFillCartFill } from "react-icons/bs";
import useCarts from "../hooks/useCarts";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    // console.log(user);
    const [cart] = useCarts();

    const handleLogOut = () => {
        logOut()
            .then(res => {
                console.log('user successfully logout');
                Swal.fire({

                    text: "User Successfully Logout",
                    icon: "success"
                });
            })
            .catch(error => console.log(error.message))
    }

    const navItems =
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/menu'>Our Menu</NavLink></li>
            <li><NavLink to='/secret'>Secret</NavLink></li>
            <li><NavLink to='/orderFood/dessert'>Order Food</NavLink></li>
            <li className="flex gap-2 items-center justify-center bg-orange-400 rounded">
                <NavLink to='/'>
                        <BsFillCartFill />
                        <div className="badge badge-sm badge-secondary">+{cart.length}</div>
                </NavLink>
            </li>

            {/* <li><NavLink to='/signUp'>Sign Up</NavLink></li> */}
            {/* <li><NavLink to='/login'>Login</NavLink></li> */}


        </>

    return (
        <div className="navbar fixed z-10 h-[40px] bg-opacity-30 bg-black text-white max-w-screen-xl shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Hungry Hut</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex items-center justify-center">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?

                    <>
                        <p className="pr-2">{user?.displayName}</p>
                        <img src={user?.photoURL} className="w-[40px] rounded-full pr-2" alt="" />
                        <button onClick={handleLogOut} className="btn btn-warning">Logout</button>
                    </>
                    :
                    <><button className="btn bg-yellow-200"><Link to='/login'>Login</Link></button> </>}
            </div>
        </div>
    );
};

export default Navbar;