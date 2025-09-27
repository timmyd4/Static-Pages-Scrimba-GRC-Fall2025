// import { createRoot } from "react-dom/client"

import MainContent from "./Ch15b"
import Footer from "./Ch15c"
import Header from "./Ch15d"
const root = createRoot(document.getElementById("root"))

/**
 * Challenge: move the MainContent and Footer components to their own
 * separate files.
 */


export default function Page() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}

// root.render(
//     <Page />
// )
