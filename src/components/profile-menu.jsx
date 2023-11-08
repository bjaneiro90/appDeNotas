import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Link } from "react-router-dom"

export function ProfileMenu() {

  const {user,logout} = useContext(AuthContext)

    return user ? (
        <>
        <div
            className="backdrop-style"
        >
        </div>
        <nav className="nav-menu-profile-style">
        <ul className="ul-menu-profile-style ">
            <Link to={`/`}>
                <p>
                <button className="button-logout-style" onClick ={() => logout()}>Log Out</button>
                </p>
            </Link>
            <p style={{
                fontSize: "25px",
                gap: "20px",
            }}>Logged in as {user.email}</p> 


            
        </ul>
        </nav>
        </>
    ) : (
        <>
        <div
            className="backdrop-style"
        >
        </div>
        <nav className="nav-menu-profile-style">
        <ul className="ul-menu-hamburguesa-style">
            <li><Link to="/users/login">Login</Link></li>
            <li><Link to="/users">Register</Link></li> 
        </ul>
        </nav>
        </>
    )
}