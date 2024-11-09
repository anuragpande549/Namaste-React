import { API_MENU } from "../ulits/urls";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MenuList = () => {
    const [menu, setmenu] = useState([]);
    const { resId } = useParams();

    const menuObj = async () => {
        const response = await fetch(API_MENU + resId);
        const resObj = await response.json();
        const MenuData = resObj.data.cards;
        setmenu(MenuData);
    };

    useEffect(() => {
        menuObj();
    }, []);

    if (menu.length === 0) {
        return <h1 className="text-center text-lg font-semibold text-gray-600">Loading...</h1>;
    }

    const { avgRating, cuisines, name, costForTwoMessage } = menu[2]?.card?.card?.info;

    return (
        <div id="menu-container" className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-lg max-w-xl mx-auto mt-8">
            <div id="menu-heading" className="text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">{name}</h1>
                <div id="menu-res-details" className="text-gray-600 flex justify-center gap-3 text-sm">
                    <div className="flex items-center gap-2">
                        <span className="text-green-500 font-semibold">{avgRating}⭐</span>
                        <span className="text-gray-500">{costForTwoMessage}</span>
                    </div>
                </div>
                <div id="menu-cuisines" className="text-gray-700 mt-2 text-sm">
                    {cuisines.join(", ")}
                </div>
            </div>
            
            {/* Sample Menu List */}
            <div id="menu-list" className="w-full mt-4 border-t pt-4 space-y-4">
                <div id="menu-list-details" className="flex justify-between items-center border-b pb-4">
                    <div className="flex flex-col gap-1">
                        <span className="text-sm text-green-600">Veg</span>
                        <h3 className="text-lg font-semibold text-gray-800">Food Name</h3>
                        <h3 className="text-gray-500 text-sm">Rs 300</h3>
                        <h6 className="text-gray-600 text-xs">4.4</h6>
                        <p className="text-gray-500 text-xs">Description of the dish</p>
                    </div>
                    <div id="food-img" className="w-16 h-16 bg-gray-200 rounded-md"></div>
                </div>
                {/* Additional items can be added here */}
            </div>
        </div>
    );
};

export default MenuList;
