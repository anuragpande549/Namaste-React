import Heading from "./Heading";
import Main from "./Main";

import { Outlet } from "react-router-dom";

const Container = () => {
    return (<>
        <Heading />
        <Outlet />
    </>)

}

export default Container