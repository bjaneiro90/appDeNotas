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
                    style={{
                        marginTop:"1rem",
                        marginBottom:"0",
                        fontWeight: "bolder",
                        fontSize: "2rem"
                    }}>
                {note.title}</p>
            </Link>

                <div>
                <button
                style={{
                    paddingLeft: "5px",
                    paddingRight: "5px"
                }}
                onClick={() => {if(window.confirm("Are you sure?")) removeNote(note.id, token)}}>Delete</button>
                {error ? <p>{error}</p> : null}
                </div>
        </main>
    )
}