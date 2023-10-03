import { Link } from "react-router-dom"

export const Auth = () => {
    return (
        <ul>
            <li><Link to="/users">Register</Link></li>
            <li><Link to="/users/login"> Login</Link></li>
        </ul>
    )
}