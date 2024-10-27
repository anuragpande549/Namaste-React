    import React from "react"
    import ReactDOM from "react-dom/client"
    // const heading = React.createElement("h1", {}, "HEllO!.. Anurag React  ")
    // const rootId = document.getElementById("root")
    // console.log(rootId);
    // const root = ReactDOM.createRoot(rootId);
    // root.render(heading);
    const htmlRoot = document.getElementById("root")
    const root = ReactDOM.createRoot(htmlRoot);
    const h1 = React.createElement("h1",{id:"h1 Heading"},"this is heading 1")
    const h2 = React.createElement("h1",{},"this is heading 2")
    const div = React.createElement("div", {}, [h1,h2]);
    root.render(div)