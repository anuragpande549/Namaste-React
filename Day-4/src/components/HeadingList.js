import { Link } from "react-router-dom"

const HeadingList = () => {
    return (
        <ul className="header-list">
            
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