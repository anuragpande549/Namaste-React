import Card from "./Card";
import { useState } from "react";
import { useEffect } from "react";
import { API_DATA } from "../ulits/urls"
import SimmerUi from "./SimmerUi"
import { Link } from "react-router-dom";


const Main = () => {

    const [Restaurant, setRestaurant] = useState([])
    const [felterRestaurant, setfilterRestaurant] = useState([])
    const [searchRest, setsearchRest] = useState("")

    function check(value) {
        // console.log(value)
        value.forEach(each => {
            let eachData = each?.card?.card?.gridElements?.infoWithStyle?.restaurants
            if (eachData != undefined) {
                console.log(eachData);
                const updateData = each?.card?.card?.gridElements?.infoWithStyle?.restaurants
                setRestaurant(updateData);
                setfilterRestaurant(updateData);
            }
        });
    }

    const resData = async () => {
        const url = API_DATA;
        const response = await fetch(url);
        const jsonData = await response.json();
        check(jsonData?.data?.cards)
    };

    useEffect(() => {
        resData()
    }, [])

    const filterCss = {
        width: "100%",
        textAlign:"center"
    }

    // console.log("hello", Restaurant.length)
    return (
        felterRestaurant.length === 0 ? (
            <>
            <h1>Loading...</h1>
            <SimmerUi/>
            </>
        ) : (
            <>
                <div id="filter-option" style={filterCss}>

                <button className="btn" onClick={() => {
                    setRestaurant(Restaurant.filter((res) => res.info.avgRating > 4.1))
                }}>Best Restaurant</button>
                <button className="btn" onClick={() => setRestaurant(felterRestaurant)}>ALL Restaurant</button>
                <input type="text" placeholder="this is div" value={searchRest} onChange={(e) => {
                    setsearchRest(e.target.value)
                }} />
                <button className="btn" onClick={() => {
                    let updateSearch = felterRestaurant.filter((each) => each.info.name.toLowerCase().includes(searchRest.toLowerCase()))
                    setRestaurant(updateSearch)
                }}> search</button>

                </div>
                <main>

                    {Restaurant.map((restaurant) => {
                        return (<Link to={"/menulist/"+restaurant.info.id} key={restaurant.info.id}><Card restObj={restaurant} key={restaurant.info.id} /></Link>)
                    }
                    )}
        

                </main>
            </>
        ))
}

export default Main