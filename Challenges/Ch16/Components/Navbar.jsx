export default function Navbar() {
    return (
        <header>
            <nav>
                <img src={`${import.meta.env.BASE_URL}react-logo.png`}alt="React-Logo"/>
                <span>ReactFacts</span>
            </nav>
        </header>
    )
}