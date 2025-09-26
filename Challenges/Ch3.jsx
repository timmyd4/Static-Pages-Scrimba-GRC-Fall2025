// /**
//  * Challenge:
//  * Create your very first custom React component!
//  * Call it "MainContent", and have it return a simple
//  * h1 element that says "React is great!"
//  * 
//  * Afterward, render it on the line below MyAwesomeNavbar
//  */

import {createRoot} from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

function MainContent()
{
    return <h1>React is Great</h1>;
}

root.render(
    <MainContent/>
)