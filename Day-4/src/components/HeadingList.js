import { Link } from "react-router-dom"
import MyStates from "../ulits/useStates"

const HeadingList = () => {

    let status = MyStates();
    return (
        <ul className="header-list">
            
            <li><a href="#">{status==true?"Online 🟢":"Offline 🔴"}</a></li>
            <li> <Link to={"/"}>Home</Link></li>
            <li> <Link to={"/about"}>About</Link></li>
            <li> <Link to={"/contact"}>Contact</Link></li>
            <li> <Link to={"/offers"}>Offers</Link></li>
            <li><a href="#">Sign in</a></li>
            <li><a href="#">LogIn</a></li>
        </ul>
    )
}

export default HeadingList