import { Link } from "react-router-dom";
import MyStates from "../ulits/useStates";

const HeadingList = () => {
    let status = MyStates();
    return (
        <ul className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-white md:text-base lg:text-lg">
            <li>
                <a href="#" className="font-bold" className={status?"text-green-600":"text-red-500"}>
                    {status ? "Online 🟢" : "Offline 🔴"}
                </a>
            </li>
            <li>
                <Link to="/" className="hover:text-blue-500 transition-colors duration-200">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/about" className="hover:text-blue-500 transition-colors duration-200">
                    About
                </Link>
            </li>
            <li>
                <Link to="/contact" className="hover:text-blue-500 transition-colors duration-200">
                    Contact
                </Link>
            </li>
            <li>
                <Link to="/offers" className="hover:text-blue-500 transition-colors duration-200">
                    Offers
                </Link>
            </li>
            <li>
                <a href="#" className="hover:text-blue-500 transition-colors duration-200">
                    Log In
                </a>
            </li>
        </ul>
    );
};

export default HeadingList;
