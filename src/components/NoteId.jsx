import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate  } from "react-router-dom"

export const NoteId = ({note, isEdited, setIsEdited, removeNote, error}) => {

    const {user,token} = useContext(AuthContext)
    const navigate = useNavigate()

    return ( <article>

        <h2>{note.title}</h2>

        <p>{note.text}</p>

        <p>Created by User Nº{note.user_id} on {new Date(note.dateCreate).toLocaleString()} </p>
        {user && user.id === note.user_id ? (
        <section>
        <button onClick={() => {
            if(window.confirm("Are you sure?")) {
                removeNote(note.id, token)
                navigate("/notes")
            }
         }}>
            Delete
        </button>
        {error ? <p>{error}</p> : null}
        <button onClick={() => { 
                setIsEdited(!isEdited)
            }}
        >
            Edit
        </button>
        {error ? <p>{error}</p> : null}
        </section>
        ) : null}


    </article>
    )
        }

