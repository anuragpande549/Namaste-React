import Card from "./Card";
import { restaurants } from "../modules/cardData"
import { useState } from "react";
import { useEffect } from "react";
import { API_DATA } from "../ulits/urls"


const Main = () => {

    const [Restaurant, setRestaurant] = useState([])
    const [felterRestaurant, setfilterRestaurant] = useState([])
    const [searchRest, setsearchRest] = useState("")

    function check(value){
        value.forEach(each => {
            let eachData  = each?.card?.card?.gridElements?.infoWithStyle?.restaurants[1]?.info?.avgRating
            if( eachData != undefined){
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

    useEffect(() =>{
        resData()
    },[])
    

    console.log("hello")
    return (
        <>
        
        <button className="btn" onClick={() => {
                setRestaurant(Restaurant.filter((res)=>res.info.avgRating > 4))
            }}>Best Restaurant</button>
        <button className="btn" onClick={() => setRestaurant(felterRestaurant)}>ALL Restaurant</button>
        <main>

            {Restaurant.map((restaurant )=>{
                return (<Card restObj = {restaurant} key={restaurant.info.id}/>)
            }
            )}
        

        </main>
        </>
    )
}

export default Main