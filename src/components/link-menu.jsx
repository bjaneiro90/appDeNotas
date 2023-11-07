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
                top: "4rem",
                //bottom: "2.5rem",
                height: "calc(100vh - 6.5rem)"
            }}
        >

        </div>
        <nav style={{
             position: "absolute",
             left: "0",
             padding: "1rem",
             top: "63px",
             border:  "1px solid black",
             backgroundColor: "white",
             borderBottomRightRadius: "15px"
        }}>
        <ul style ={{
            display: "flex",
            flexDirection: "column",
            listStyleType: "none",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white"
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
                top: "4rem",
                bottom: "0"
            }}
        >

        </div>
        <nav style={{
            position: "absolute",
            left: "0",
            padding: "1rem",
            top: "63px",
            border:  "1px solid black",
            backgroundColor: "white",
            borderBottomRightRadius: "15px"
        }}>
        <ul style ={{
           display: "flex",
           flexDirection: "column",
           listStyleType: "none",
           justifyContent: "space-between",
           alignItems: "center",
           backgroundColor: "white"
        }}>
            <li><Link to="/">Homepage</Link></li>
            
        </ul>
        </nav>
        </>
    )
}