// /**
//  * Challenge (part 1):
//  * Create a custom "Page" component
//  * 
//  * It should return an ordered list with the reasons why you're
//  * excited to be learning React :)
//  * 
//  * Render the Page component.
//  */

import {createRoot} from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

root.render(<Page/>)


function Page() 
{
    return(
        <ol>
            <li>Lots of job opps</li>
            <li>Big community</li>
            <li>Understand the talk</li>
            <li>Another language that is highly valued</li>
        </ol>
    )
}