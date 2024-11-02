import React from "react";
import ReactDOM from "react-dom/client";
import Container from "/src/components/Container";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Main from "./components/Main"
import Contact from "./components/Contact";
import Offers from "./components/Offers";
import MenuList from "./components/MenuList";
import CardClass from "./components/CardClass";


// console.log(createBrowserRouter)

const appRouter = createBrowserRouter([{
    path : "/",
    element : <Container />,
    children: [
        {
            path : "/",
            element : <Main/>
        },
        {
            path : "/about",
            element : <About/>
        },
        {
            path : "/contact",
            element: <Contact/>
        },
        {
            path : "/offers",
            element: <Offers/>
        },

],

errorElement : <Error/>
},

{
    path : "/menulist/:resId",
    element:<MenuList/>,
    errorElement : <Error/>
},
{
    path : "/cardClass",
    element : <CardClass name={"Anurag"}/>

}

]

)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);