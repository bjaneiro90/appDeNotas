import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { deleteNoteService,updateNoteService} from "../services"
import { useNavigate } from "react-router-dom"

export const NoteId = ({notes, removeNote, refreshNote}) => {

    const {user,token} = useContext(AuthContext)
    const [error, setError] = useState("")
    const navigate = useNavigate()


    const deleteNote = async (id) => {
        try {
            await deleteNoteService({id, token})
            if(removeNote) {
                removeNote(id)
            } else {
                navigate("/notes")
            }
        } catch (error) {
            setError(error.message)
        }
}


    const UpdateNote = async (note,id) => {
        try {
            await updateNoteService({note,token})
            if(refreshNote) {
                refreshNote(note,id)
            } else {
                navigate("/")
            }

    } catch (error) {
        setError(error.message)

    }
}


    


    return ( <article>

        <h2>{notes.title}</h2>

        <p>{notes.text}</p>

        <p>Created by User Nº{notes.user_id} on {new Date(notes.dateCreate).toLocaleString()} </p>
        {user && user.id === notes.user_id ? (
        <section>
        <button onClick={() => {if(window.confirm("Are you sure?")) deleteNote(notes.id)}}>Delete</button>
        {error ? <p>{error}</p> : null}
        <button onClick={() => {if(window.confirm("Are you sure?")) UpdateNote(notes.id)}}>Edit </button>
        {error ? <p>{error}</p> : null}
        </section>
        ) : null}


    </article>
    )
        }

