import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export const Auth = () => {
    const {user, logout} = useContext(AuthContext)

    return user ? (
    <p>Logged in as {user.email}  <Link to={`/`}>  <button onClick ={() => logout()}>Log Out</button></Link>
        </p> 
    ) : (
        <ul>
            <li><Link to="/users">Register</Link></li>
            <li><Link to="/users/login"> Login</Link></li>
        </ul>
    )
}

