import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export function LinkMenu() {
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
        <nav style={{
            backgroundColor: "white"
        }}>
        <ul style ={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            listStyleType: "none",
            padding: "20px",
            paddingRight: "33px",
            top: "66px",
            border:  "1px solid black",
            justifyContent: "space-evenly",
            backgroundColor: "#f8f3f6",
            borderBottomRightRadius: "15px",
            alignItems:"center"
        }}>
            <li><Link to="/notes">My Notes</Link></li>
            <li><Link to="/">Homepage</Link></li>
            
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
        <nav style={{
            backgroundColor: "white"
        }}>
        <ul style ={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            listStyleType: "none",
            padding: "20px",
            paddingRight: "33px",
            top: "66px",
            border:  "1px solid black",
            justifyContent: "space-evenly",
            backgroundColor: "#f8f3f6",
            borderBottomRightRadius: "15px",
            alignItems:"center"
        }}>
            <li><Link to="/">Homepage</Link></li>
            
        </ul>
        </nav>
        </>
    )
}