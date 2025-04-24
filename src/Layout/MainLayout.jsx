import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";


const MainLayout = () => {
    const location = useLocation();
    console.log(location);
    const noHeaderFooter = location.pathname.includes('login')
    return (
        <div>
            { noHeaderFooter || <Navbar />}
            <Outlet />
            { noHeaderFooter || <Footer />}
        </div>
    );
};

export default MainLayout;