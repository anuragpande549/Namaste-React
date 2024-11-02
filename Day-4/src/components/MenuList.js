import { API_MENU } from "../ulits/urls"
import {useState , useEffect } from "react"
import { useParams } from "react-router-dom"
 
const MenuList = () => {

    const [menu,setmenu] = useState([])

    const {resId} = useParams();
    console.log(resId)

    const menuObj = async () => {
        const url = API_MENU
        const response = await fetch(API_MENU+resId);
        const resObj = await response.json()
        const MenuData = resObj.data.cards
        setmenu(MenuData)
    }
    useEffect(()=>{
        menuObj();
    },[])

    if(menu.length === 0){
        return <h1>Loading</h1>
    }
    const {avgRating,cuisines,name,costForTwoMessage} = menu[2]?.card?.card?.info
    // console.log(menu[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    const center = {
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color:"red",
        fontSize: "x-large",
        padding: "2rem",
        margin: "1rem",
        border: "2px solid" ,
        gap: "2rem"
    }

    return (<>
    
        <div id="menu-container" style={ center}>
            <div id="menu-heading">
                <h1>{name}</h1>
                <div id="menu-res-details">
                    <div><span>{avgRating}</span> <span>{costForTwoMessage}</span></div>
                </div>
                <div id="menu-cuisines">{cuisines.join(",")}</div>
            </div>
            {/* <div id="menu-list">
                <div id="menu-list-details">
                    <span>is vag</span>
                    <h3>food-name</h3>
                    <h3>rs 300</h3>
                    <h6>4.4</h6>
                    <p>discreption</p>                   
                 </div>
                 <div id="food-img">

                 </div>
            </div> */}
        </div>
    
    </>)
}

export default MenuList