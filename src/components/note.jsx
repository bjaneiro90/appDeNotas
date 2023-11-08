import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { deleteNoteService } from "../services"

export const Note = ({note, removeNote}) => {

    
    const {user, token} = useContext(AuthContext)
    const [error, setError] = useState("")

    //const filterNotes = note.filter((note) => note.user_id === user.id )
	


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
        <main style={{
            
        }}>
            <Link to={`/notes/${note.id}`}> 
                <p 
                   className="link-note-id">
                {note.title}</p>
            </Link>

                <div>
                <button
                className="style-button"
                onClick={() => {removeNote(note.id, token)}}>Delete</button>
                {error ? <p>{error}</p> : null}
                </div>
        </main>
    )
}