import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate  } from "react-router-dom"

export const NoteId = ({note, isEdited, setIsEdited, removeNote, error}) => {

    const {user,token} = useContext(AuthContext)
    const navigate = useNavigate()
    console.log(note)

   
    return ( <section>

        <h3 className="header-box-h3-style"
        >{note.title}</h3>

        {note.image ? (
        <img className="note-image-style"
        src={`${import.meta.env.VITE_APP_BACKEND}/uploads/${note.image}`} />
   ) : null}

        <p style={{
            marginTop: "1rem",
            textAlign: "left",
        }
        }>{note.text}</p>

    

        <p className="note-id-text-style">
           Category: {<span style ={{fontWeight:"bolder"}}>{note.category}</span>} </p>
        <p className="note-id-text-style">Created on <span style ={{fontWeight:"bolder"}}>{new Date(note.dateCreate).toLocaleString()}</span></p>
        
        {user && user.id === note.user_id ? (
        <section>
        <button className="delete-button"
        onClick={() => {
            if(window.confirm("Are you sure?")) {
                removeNote(note.id, token)
                navigate("/notes")
            }
         }}>
            Delete
        </button>
        {error ? <p>{error}</p> : null}
        <button className="edit-button"
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

