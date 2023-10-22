import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate  } from "react-router-dom"

export const NoteId = ({note, isEdited, setIsEdited, removeNote, error}) => {

    const {user,token} = useContext(AuthContext)
    const navigate = useNavigate()
    console.log(note)

   
    return ( <section style={{
                       margin:"0.3rem"    
    }}>

        <h3 style={{
            color: "purple",
            margin: "1rem"
        }}>{note.title}</h3>

        <p style={{
            marginTop: "1rem",
            textAlign: "left",
        }}>{note.text}</p>

        <p>{note.categoryID}</p>

        <p style={{
            fontSize:"1.1rem",
            fontStyle: "italic",
            marginTop: "0.2rem",
            textAlign: "left"
        }}>
            Created by User Nº{note.user_id} on {new Date(note.dateCreate).toLocaleString()} </p>
        {user && user.id === note.user_id ? (
        <section>
        <button style={{
            marginRight: "0.7rem",
            paddingLeft: "5px",
            paddingRight: "5px"
        }}
        onClick={() => {
            if(window.confirm("Are you sure?")) {
                removeNote(note.id, token)
                navigate("/notes")
            }
         }}>
            Delete
        </button>
        {error ? <p>{error}</p> : null}
        <button style={{
            marginTop: "3rem",
            marginleft: "0.7rem",
            paddingLeft: "5px",
            paddingRight: "5px"
        }}
        onClick={() => { 
                setIsEdited(!isEdited)
            }}
        >
            Edit
        </button>
        {error ? <p>{error}</p> : null}
        </section>
        ) : null}


    </section>
    )
        }

