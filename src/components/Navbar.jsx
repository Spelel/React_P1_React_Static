import reactLogo from '../assets/react.svg'
export default function Navbar() {
    return(
        <header>
            <nav>
                <img src={reactLogo} alt="react logo"/>
                <h1>ReactFacts</h1>
            </nav>
        </header>
    )
}