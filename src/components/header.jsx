import { Link } from "react-router-dom"
import { Auth } from "./auth"

export const Header = () => {
    return (
        <header>
            <h1><Link to="/">Note It Down</Link></h1>

            <nav>
                <Auth/>
            </nav>
        </header>
    )
}