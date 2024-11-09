import Card from "./Card";
import { useState, useEffect } from "react";
import { API_DATA } from "../ulits/urls";
import SimmerUi from "./SimmerUi";
import { Link } from "react-router-dom";
import Slider from "./Slider";

const Main = () => {
    const [Restaurant, setRestaurant] = useState([]);
    const [felterRestaurant, setfilterRestaurant] = useState([]);
    const [searchRest, setsearchRest] = useState("");
    const [slide ,setSlide] = useState("")

    function check(value) {
        value.forEach(each => {
            // console.log(value)
            let eachData = each?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            if (eachData !== undefined) {
                const updateData = eachData;
                // console.log(updateData)
                setRestaurant(updateData);
                setfilterRestaurant(updateData);
            }
        });
    }

    const resData = async () => {
        const url = API_DATA;
        const response = await fetch(url);
        const jsonData = await response.json();
        check(jsonData?.data?.cards);
        setSlide(jsonData?.data?.cards[0].card.card)
        
    };
    console.log(slide)

    useEffect(() => {
        resData();
    }, []);

    return (
        felterRestaurant.length === 0 ? (
            <>
                <h1 className="text-center text-lg font-semibold text-gray-600">Loading...</h1>
                <SimmerUi />
            </>
        ) : (
            <>
                <Slider className="w-[90vw] m-[auto]" slideData={slide}/>
                <div id="filter-option" className="flex flex-col items-center gap-4 p-4 md:flex-row md:justify-center md:gap-4">

                    <button
                        className="btn bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
                        onClick={() => {
                            setRestaurant(Restaurant.filter((res) => res.info.avgRating > 4.1));
                        }}>
                        Best Restaurant
                    </button>
                    <button
                        className="btn bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                        onClick={() => setRestaurant(felterRestaurant)}>
                        All Restaurant
                    </button>
                    <input
                        type="text"
                        placeholder="Search for restaurants"
                        value={searchRest}
                        onChange={(e) => setsearchRest(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 w-full max-w-xs"
                    />
                    <button
                        className="btn bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
                        onClick={() => {
                            let updateSearch = felterRestaurant.filter((each) =>
                                each.info.name.toLowerCase().includes(searchRest.toLowerCase())
                            );
                            setRestaurant(updateSearch);
                        }}>
                        Search
                    </button>
                </div>
                <main className="grid grid-cols-1 w-[auto] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
                    {Restaurant.map((restaurant) => (
                        <Link to={"/menulist/" + restaurant.info.id} key={restaurant.info.id}>
                            <Card restObj={restaurant} />
                        </Link>
                    ))}
                </main>




            </>
        )
    );
};

export default Main;
