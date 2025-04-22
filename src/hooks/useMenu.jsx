import { useEffect, useState } from "react";
import menuData from "../utils/menuData";


const useMenu = () => {
    const [menu, setMenu] = useState([])
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        const allMenu = menuData;
        setMenu(allMenu);
        setLoading(false);
    },[])

    return [menu, loading]
};

export default useMenu;