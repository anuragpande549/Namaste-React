import React from "react";
import ReactDOM from "react-dom/client";
import Container from "/src/components/Container";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Error from "./components/Error";
import Main from "./components/Main"
import Contact from "./components/Contact";
import Offers from "./components/Offers";
import MenuList from "./components/MenuList";
import CardClass from "./components/CardClass";
import { lazy,Suspense } from "react";


// console.log(createBrowserRouter)

// const About = lazy(()=>{
// import("./components/About");
// })
const About = lazy(() => import("./components/About"));


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
            element : <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
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