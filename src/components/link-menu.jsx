import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export function LinkMenu() {
    const {user,logout} = useContext(AuthContext)

    return user ? (
        <>
        <div
            className="backdrop-style"
        >

        </div>
        <nav className="nav-menu-hamburguesa-style">
        <ul className="ul-menu-hamburguesa-style">
            <li><Link to="/notes">My Notes</Link></li>
            <li><Link to="/">Homepage</Link></li>
            
        </ul>
        </nav>
        </>
    ) : (
        <>
        <div
            className="backdrop-style"
        >

        </div>
        <nav className="nav-menu-hamburguesa-style">
        <ul className="ul-menu-hamburguesa-style">
            <li><Link to="/">Homepage</Link></li>
            
        </ul>
        </nav>
        </>
    )
}