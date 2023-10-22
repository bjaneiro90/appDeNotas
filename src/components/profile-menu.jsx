import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Link } from "react-router-dom"

export function ProfileMenu() {

  const {user,logout} = useContext(AuthContext)

    return user ? (
        <>
        <div
            style={{
                position:"absolute",
                backgroundColor: "rgba(0,0,0,0.7)",
                width: "100%",
                top: "67px",
                bottom: "0"
            }}
        >
        </div>
        <nav style ={{
            position: "absolute",
            right: "0",
            top: "66px",
            border:  "1px solid black",
            borderBottomLeftRadius: "15px"
        }}>
        <ul style= {{
            display: "flex",
            flexDirection: "column",
            listStyleType: "none",
            justifyContent: "space-evenly",
            backgroundColor: "#f8f3f6",
            padding: "0px 0px 4px 4px",
            alignItems: "center",
            borderBottomLeftRadius: "15px"
            
        }}>
            <Link to={`/`}>
                <p>
                <button style={{
                    fontSize:"25px",
                    alignItems: "center"
                }} onClick ={() => logout()}>Log Out</button>
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
            style={{
                position:"absolute",
                backgroundColor: "rgba(0,0,0,0.7)",
                width: "100%",
                top: "67px",
                bottom: "0"
            }}
        >
        </div>
        <nav style ={{
            position: "absolute",
            right: "0",
            padding: "30px",
            top: "66px",
            border:  "1px solid black",
            backgroundColor: "#f8f3f6",
            borderBottomLeftRadius: "15px"
        }}>
        <ul style= {{
            display: "flex",
            flexDirection: "column",
            listStyleType: "none",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#f8f3f6"
            
        }}>
            <li><Link to="/users/login">Login</Link></li>
            <li><Link to="/users">Register</Link></li>
           


            
        </ul>
        </nav>
        </>
    )
}