import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { deleteNoteService } from "../services"

export const Note = ({notes, removeNote}) => {

    
    const {user, token} = useContext(AuthContext)
    const [error, setError] = useState("")


    const deleteNote = async (id) => {
        try {
            await deleteNoteService({id, token})
            removeNote(id)
        } catch (error) {
            setError(error.message)
        }

    }


    return (<article>
        <Link to={`/notes/${notes.id}`}> 
            <p>{notes.title}</p>
        </Link>

        

        {notes.image ? <img src={`${import.meta.env.VITE_APP_BACKEND}`}/> : null}
    

        {user && user.id === notes.user_id ? (
        <section>
        <button onClick={() => {if(window.confirm("Are you sure?")) deleteNote(notes.id)}}>Delete</button>
        {error ? <p>{error}</p> : null}
        </section>
        ) : <p>Não ha notas</p>}
    </article>)
}