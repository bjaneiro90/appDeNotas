import { ErrorMessage } from "../components/errorMessage"
import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import useNote from "../hooks/useNote"
import { useParams } from "react-router-dom"
import { UpdateNote } from "../components/UpdateNote"
import useNotes from "../hooks/useNotes"
import { NoteId } from "../components/NoteId"


export const NoteByID = () => {



    const {user} = useContext(AuthContext);
    const {id} = useParams()
    const {note, loading, error, refreshNote} = useNote(id)
    console.log(note);
    const {removeNote} = useNotes()
    const [isEdited, setIsEdited] = useState(false)
    if(loading) return <p>Carregando Notas</p>
    if(error) return ErrorMessage




 
    return (
        <div className="box">
            <section className="registration-section">

            {user ? <h2 className="header-box-h2-style">
                    Note nº{id}</h2> :  <h2>Global Notes</h2>}

            {user ? <NoteId note={note} isEdited={isEdited} setIsEdited={setIsEdited} removeNote={removeNote} error={error} /> : <p> Back to Homepage</p>}

            {isEdited && <UpdateNote note={note} refreshNote={refreshNote} />}


        

            </section>
        </div>
    )
} 