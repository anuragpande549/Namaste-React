import React from "react";
import ReactDOM from "react-dom/client";

// react.createElement ==> js object ==> html element
// const heading = React.createElement("h1",{id:"main"},"this is main heading");
const root =  ReactDOM.createRoot(document.getElementById("root"))

//jsx parcel inside babel convet to ==> react.createElement ==> js object ==> html element
const headingJsx  = <h1 id="main" className="main"> this is jsx heading </h1> 
const HeadingJsx  = ()=>(<h1 id="main" className="main"> this is jsx heading </h1> )

// functional component 

const HeadComponent = () =>{
    return <div>
        <HeadingJsx/>
        {HeadingJsx()}
        
        <h1>This is jsx functional component</h1>
    </div>
}



root.render(<HeadComponent/>);