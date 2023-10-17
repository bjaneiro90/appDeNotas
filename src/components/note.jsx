import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { deleteNoteService } from "../services"

export const Note = ({note, removeNote}) => {

    
    const {user, token} = useContext(AuthContext)
    const [error, setError] = useState("")

    //const filterNotes = note.filter((note) => note.user_id === user.id )
	//console.log(filterNotes)


    const deleteNote = async (id) => {
        try {
            await deleteNoteService({id, token})
            removeNote(id)
        } catch (error) {
            setError(error.message)
        }

    }

   

    return (
        (note?.user_id === user?.id || note?.private === 0) &&
        <article>
            <Link to={`/notes/${note.id}`}> 
                <p>{note.title}</p>
            </Link>

            {note.image && <img src={`${import.meta.env.VITE_APP_BACKEND}`}/>}
    
            <section>
                <button onClick={() => {if(window.confirm("Are you sure?")) deleteNote(note.id)}}>Delete</button>
                {error ? <p>{error}</p> : null}
            </section>
        </article>
    )
}