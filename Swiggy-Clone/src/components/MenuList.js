import { API_MENU } from "../ulits/urls";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MenuCards from "./MenuCards";

const MenuList = () => {
    const [menu, setMenu] = useState([]);
    const { resId } = useParams();
    const [menuIndex, setMenuIndex] = useState(0);
    const fetchMenu = async () => {
        try {
            const response = await fetch(API_MENU + resId);
            const resObj = await response.json();
            const MenuData = resObj?.data?.cards || [];
            setMenu(MenuData);
        } catch (error) {
            console.error("Failed to fetch menu data:", error);
        }
    };

    useEffect(() => {
        fetchMenu();
    }, [resId]);

    if (menu.length === 0) {
        return <h1 className="text-center text-lg font-semibold text-gray-600">Loading...</h1>;
    }

    const filteredMenu = menu.filter((item) => item.groupedCard);
    const { avgRating, cuisines, name, costForTwoMessage } = menu[2]?.card?.card?.info || {};

    const cards = filteredMenu[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    const filterData = cards.filter(
        (each) =>
            each.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ||
            each.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    // console.log(filterData[1].card.card.categories,"f")
    return (
        <div id="menu-container" className="flex flex-col items-center absolute bg-blue-200 left-[50%] translate-x-[-50%] p-6 bg-white rounded-lg shadow-lg w-[90vw] mx-auto mt-4">
            <div id="menu-heading" className="text-center bg-slate-200 w-[100%] p-5 rounded-lg">
                <h1 className="text-4xl  font-bold text-orange-600  mb-2">{name || "Restaurant Name"}</h1>
                <div id="menu-res-details" className="text-gray-600 flex justify-center gap-3 text-sm">
                    <div className="flex items-center gap-2">
                        <span className="text-green-500 text-xl font-semibold">{avgRating || "N/A"}⭐</span>
                        <span className="text-gray-500 text-xl font-semibold">{costForTwoMessage || "Cost information not available"}</span>
                    </div>
                </div>
                <div id="menu-cuisines" className="text-gray-700 mt-2 text-sm">
                    {cuisines ? cuisines.join(", ") : "Cuisines not available"}
                </div>
            </div>
            {filterData.map((card, index) => (
                <MenuCards
                    key={index}
                    setMenuIndex ={()=>setMenuIndex(index)}
                    hideShow={index!=menuIndex?true:false}
                    myCards={card?.card?.card?.itemCards || card?.card?.card?.categories}
                    title={card?.card?.card?.title }
                />
            ))}
        </div>
    );
};

export default MenuList;
