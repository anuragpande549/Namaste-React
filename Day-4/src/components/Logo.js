import { LOGO_IMG } from "../ulits/urls";
import { Link } from "react-router-dom";

const Logo = () => (
    <>
    <div id="logo-container" className="flex items-center">
        <Link to="/">
            <img src={LOGO_IMG} alt="food logo" className="w-24 h-17 mix-blend-multiply md:w-32 lg:w-36 object-contain" />
          </Link>
    </div>
    </>
);

export default Logo;
