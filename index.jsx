// // Challenge: Re-write the first lines of React code we just had.
// // You can render anything you want to the screen, doesn't have
// // to be an h1 element.

// // import {createRoot} from "react-dom/client";

// // const root = createRoot(document.querySelector("#root"));

// // root.render(
// //     <div>
// //         {/* <MyFunc />
// //         <PageComp/> */}
// //         <Page/>
// //     </div>
// // )

// /**
//  * Challenge: Set up a React app from scratch again.
//  * This time, try rendering an unordered list with 2-3 list items inside
//  * with why you're excited to be learning React.
//  */

// // import {createRoot} from "react-dom/client";

// // const root = createRoot(document.querySelector("#root"));

// // root.render(
// //     <ul>
// //         <li>Bananas</li>
// //         <li>Apples</li>
// //         <li>Oranges</li>
// //     </ul>
// // )


// /**
//  * Challenge:
//  * Create your very first custom React component!
//  * Call it "MainContent", and have it return a simple
//  * h1 element that says "React is great!"
//  * 
//  * Afterward, render it on the line below MyAwesomeNavbar
//  */

// // import {createRoot} from "react-dom/client";

// // const root = createRoot(document.querySelector("#root"));

// // function MainContent()
// // {
// //     return <h1>React is Great</h1>;
// // }

// // root.render(
// //     <MainContent/>
// // )

// /* 
// Challenge - recreate the above line of code in vanilla JS by creating and
// appending an h1 to our div#root (without using innerHTML).

// - Create a new h1 element (createElement)
// - Give it some textContent
// - Give it a class name of "header"
// - append it as a child (using `appendChild`) of the div#root

// Don't use innerHTML to accomplish any of this.
    
// */

// // const header = document.createElement("h1");
// // header.textContent = "React is better";
// // header.className = "header";

// // document.getElementById("root").appendChild(header);

// /**
//  * Challenge: set up a new React app from scratch!
//  * Hints:
//  * 1. Need to import the method to create a new root 
//  *    from the "react-dom/client" package)
//  * 2. Use that root to render some JSX. For now, just render
//  *    an h1 element that says anything you want.
//  */

// // import { createRoot } from "react-dom/client";

// // const root = createRoot(document.querySelector("#root"));

// // root.render(<h1>Hello, React!</h1>);

// /*
// Challenge: Starting from scratch, build and render the 
// HTML for our section project. Check the Google slide for 
// what you're trying to build.

// We'll be adding more styling to it later.

// Hints:
// * The React logo is a file in the project tree, so you can
//   access it by using `src="react-logo.png"` in your image
//   element
// * You can also set the `width` attribute of the image element
//   just like in HTML. In the slide, I have it set to 40px
//  */

// // import {createRoot} from "react-dom/client";

// // const root = createRoot(document.querySelector("#root"));

// // root.render(
// //     <div>
// //         <img src="react-logo.png" width={"40px"}/>
// //         <h1>Fun facts about React</h1>
// //         <ul>
// //             <li>Was first released in 2013</li>
// //             <li>Was orignally created by Jordan Walke</li>
// //             <li>Has well over 100k stars on GitHub</li>
// //             <li>Is maintained by Meta</li>
// //             <li>Powers thousands of enterpise apps, including mobile apps</li>
// //         </ul>
// //     </div>
// // )

// /* 1. Where does React put all of the elements I create in JSX when I 
//    call `root.render()`?

//    inside the HTML

// 2. What would show up in my console if I were to run this line of code:
// ```
// console.log(<h1>Hello world!</h1>)
// ```
// an Object

// 3. What's wrong with this code:
// ```
// root.render(
//     <h1>Hi there</h1>
//     <p>This is my website!</p>
// )
// ```

// no Div

// 4. What does it mean for something to be "declarative" instead of "imperative"?

// Imperative needs step by step instructions

// Declarative can smartly decide where/how items and objects go on the page

// 5. What does it mean for something to be "composable"?

// utilizing functions to do more than just one thing can be composable.

// */

// /**
//  * Challenge (part 1):
//  * Create a custom "Page" component
//  * 
//  * It should return an ordered list with the reasons why you're
//  * excited to be learning React :)
//  * 
//  * Render the Page component.
//  */

// // import {createRoot} from "react-dom/client";

// // const root = createRoot(document.querySelector("#root"));

// // root.render(<Page/>)


// // function Page() 
// // {
// //     return(
// //         <ol>
// //             <li>Lots of job opps</li>
// //             <li>Big community</li>
// //             <li>Understand the talk</li>
// //             <li>Another language that is highly valued</li>
// //         </ol>
// //     )
// // }



// /**
// Challenge: 

// Part 2: 
// - Add a `<header>` element with an `<img />` element with the image of the 
//   React logo inside (src="react-logo.png") and make sure to set the 
//   width to something more manageable so it doesn't take up the whole screen.
//   Also, as always, you should include some alt text on the image.
// - Add an `<h1>` with some text describing the page. (E.g. "Reasons
//   I'm excited to learn React"). Place it above the ordered list, then wrap
//   the `<h1>` and `<ol>` inside a `<main>` element to keep our semantic
//   structure flowing well.
// - Add a `<footer>` after the list that says: 
//     "© 20xx <last name here> development. All rights reserved."
//  */

// // import {createRoot} from "react-dom/client";

// // const root = createRoot(document.querySelector("#root"));

// // root.render(<Page/>);

// // function Page() {
// //     return (
// //         <header>
// //             <img src="react-logo.png" width={"40px"} alt="React Logo"/>
// //             <h1>Reasons Im Excited for React</h1>
// //             <ol>
// //                 <li>React is a popular library, so I will be able to
// //                 fit in with all the coolest devs out there! 😎</li>
// //                 <li>I am more likely to get a job as a front end developer
// //                 if I know React</li>
// //             </ol>
// //             <footer>© 20xx Williams development. All rights reserved.</footer>
// //         </header>
// //     )
// // }


// /*
// 1. What is a React component?
// A function

// 2. What's wrong with this code?
// ```
// function myComponent() {
//     return (
//         <small>I'm tiny text!</small>
//     )
// }
// ```

// the pascal casing

// 3. What's wrong with this code?
// ```
// function Header() {
//     return (
//         <header>
//             <img src="./react-logo.png" width="40px" alt="React logo" />
//         </header>
//     )
// }

// root.render(Header())
// ```

// surround with angle brackets <Header/>

// */

// // import { Fragment } from "react";
// // import { createRoot } from "react-dom/client";

// // const root = createRoot(document.querySelector("#root"));

// // root.render(
// //     <>
// //     <h1> Fragment test </h1>
// //     <h1> Fragment test </h1>
// //     <h1> WOW </h1>
// //     </>
// // )

// /** Mini Challenge:
//  * 
//  * Move the `header` element from the Page component into 
//  * its own component called "Header"
//  * 
//  * Then render an instance of the Header component inside
//  * the Page component where the `header` used to be.
// */

// // import { createRoot } from "react-dom/client"

// // const root = createRoot(document.getElementById("root"))

// // root.render(
// //     <Page />
// // )

// // function Page() {
// //     return (
// //         <>
// //             <Header/>
// //             <main>
// //                 <h1>Reason I am excited to learn React</h1>
// //                 <ol>
// //                     <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
// //                     <li>I am more likely to get a job as a front end developer if I know React</li>
// //                 </ol>
// //             </main>
// //             <footer>
// //                 <small>© 2025 Williams development. All rights reserved.</small>
// //             </footer>
// //         </>
// //     )
// // }

// // function Header()
// // {
// //     return(
// //     <header>
// //                 <img src="react-logo.png" width="40px" alt="React logo" />
// //     </header>);
// // }


// /** Challenge: 
//  * Move the `main` element into its own component called "MainContent" 
//  * and render that component inside the Page component.
//  * 
//  * Do the same with the `footer` element, moving it into a new
//  * component called "Footer"
// */

// // import { createRoot } from "react-dom/client"
// // const root = createRoot(document.getElementById("root"))

// // root.render(
// //     <Page />
// // )

// // function Header() {
// //     return (
// //         <header>
// //             <img src="react-logo.png" width="40px" alt="React logo" />
// //         </header>
// //     );
// // }

// // function MainContent() 
// // {
// //     return(<main>
// //         <h1>Reason I am excited to learn React</h1>
// //             <ol>
// //                 <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
// //                 <li>I am more likely to get a job as a front end developer if I know React</li>
// //             </ol>
// //     </main>);
// // }

// // function Footer()
// // {
// //     return(<footer>
// //                 <small>© 2025 Williams development. All rights reserved.</small>
// //             </footer>);
// // }

// // function Page() {
// //     return (
// //         <>
// //             <Header />
// //             <MainContent/>
// //             <Footer/>
// //         </>
// //     )
// // }

// import { createRoot } from "react-dom/client"
// const root = createRoot(document.getElementById("root"))

// /**
//  * Challenge:
//  * 
//  * - Add a `nav` > `ul` > `li` (x3). The 3 items should say:
//  *   "Pricing", "About", and "Contact"
//  */

// function Header() {
//     return (
//         <header>
//             <img src="react-logo.png" width="40px" alt="React logo" />
//             <nav>
//                 <ul>
//                   <li>Pricing</li>
//                   <li>About</li>
//                   <li>Contact</li>
//                 </ul>
//             </nav>
//         </header>
//     )
// }

// function MainContent() {
//     return (
//         <main>
//             <h1>Reason I am excited to learn React</h1>
//             <ol>
//                 <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
//                 <li>I am more likely to get a job as a front end developer if I know React</li>
//             </ol>
//         </main>
//     )
// }

// function Footer() {
//     return (
//         <footer>
//             <small>© 2024 Ziroll development. All rights reserved.</small>
//         </footer>
//     )
// }

// root.render(<Page/>)
// function Page() {
//     return (
//         <>
//             <Header />
//             <MainContent />
//             <Footer />
//         </>
//     )
//   }

// import { createRoot } from "react-dom/client"
// const root = createRoot(document.getElementById("root"))

// /**
//  * Challenge:
//  * 
//  * Move the `width` style off the JSX and into CSS with a dedicated
//  * className on the img element, and change the width to 55px instead
//  */

// function Header() {
//     return (
//         <header className="header">
//             <img src="react-logo.png" width="40px" alt="React logo" />
//             <nav>
//                 <ul className="nav-list">
//                     <li className="nav-list-item">Pricing</li>
//                     <li className="nav-list-item">About</li>
//                     <li className="nav-list-item">Contact</li>
//                 </ul>
//             </nav>
//         </header>
//     )
// }

// function MainContent() {
//     return (
//         <main>
//             <h1>Reason I am excited to learn React</h1>
//             <ol>
//                 <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
//                 <li>I am more likely to get a job as a front end developer if I know React</li>
//             </ol>
//         </main>
//     )
// }

// function Footer() {
//     return (
//         <footer>
//             <small>© 2024 Ziroll development. All rights reserved.</small>
//         </footer>
//     )
// }

// function Page() {
//     return (
//         <>
//             <Header />
//             <MainContent />
//             <Footer />
//         </>
//     )
// }

// root.render(
//     <Page />
// )


// import { createRoot } from "react-dom/client"
// const root = createRoot(document.getElementById("root"))

// /**
//  * Challenge:
//  * 
//  * Move the `width` style off the JSX and into CSS with a dedicated
//  * className on the img element, and change the width to 55px instead
//  */

// function Header() {
//     return (
//         <header className="header">
//             <img src="react-logo.png" className="nav-logo" alt="React logo" width={"40px"} />
//             <nav>
//                 <ul className="nav-list">
//                     <li className="nav-list-item">Pricing</li>
//                     <li className="nav-list-item">About</li>
//                     <li className="nav-list-item">Contact</li>
//                 </ul>
//             </nav>
//         </header>
//     )
// }

// function MainContent() {
//     return (
//         <main>
//             <h1>Reason I am excited to learn React</h1>
//             <ol>
//                 <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
//                 <li>I am more likely to get a job as a front end developer if I know React</li>
//             </ol>
//         </main>
//     )
// }

// function Footer() {
//     return (
//         <footer>
//             <small>© 2024 Ziroll development. All rights reserved.</small>
//         </footer>
//     )
// }

// function Page() {
//     return (
//         <>
//             <Header />
//             <MainContent />
//             <Footer />
//         </>
//     )
// }

// root.render(
//     <Page />
// )


