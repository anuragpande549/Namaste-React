import { Link } from "react-router-dom";
import MyStates from "../ulits/useStates";
import UserContext from "../ulits/userContext";
import { useSelector } from "react-redux"
const HeadingList = () => {
    let status = MyStates();
    const card = useSelector((store) => store.card.items)
    return (
        <UserContext.Provider value={{ userName: "Anurag Pandey" }}>
            <ul className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-white md:text-base lg:text-lg">
                <li>
                    <span className={`font-bold ${status ? "text-green-600" : "text-red-500"}`}>
                        {status ? "Online 🟢" : "Offline 🔴"}
                    </span>
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
                <Link to="/finalCard" className="hover:text-blue-500 transition-colors duration-200">
                        card:{card.length}
                    </Link>
                    {/* <UserContext.Consumer>
                        {(data) => (
                            <h1 className="hover:text-blue-500 transition-colors duration-200">
                                {data.userName}{card.length}
                            </h1>
                        )}
                    </UserContext.Consumer> */}
                </li>
            </ul>
        </UserContext.Provider>
    );
};

export default HeadingList;
