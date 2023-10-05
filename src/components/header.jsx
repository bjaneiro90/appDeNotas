import { Link } from "react-router-dom"
import { Auth } from "./auth"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export const Header = () => {
    const contextValue = useContext(AuthContext)


    return (
        <header>
            <h1><Link to="/">Note It Down</Link></h1>

            <nav>
                <Auth/>
            </nav>
        </header>
    )
}