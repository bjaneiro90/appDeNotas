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
            <section style={{
            width: "100%",
            backgroundColor: "rgba(194, 159, 182, 0.12)",
            margin: "0",
            padding: "1rem",
            borderRadius: "5%",
            marginTop: "0rem",
            boxShadow: "0px 0px 2px 0.2px"
        }}>

            {user ? <h2 style={{
                        fontSize: "2rem",
                        marginTop: "0",
                }}>
                    Note nº{id}</h2> :  <h2>Global Notes</h2>}

            {user ? <NoteId note={note} isEdited={isEdited} setIsEdited={setIsEdited} removeNote={removeNote} error={error} /> : <p> Back to Homepage</p>}

            {isEdited && <UpdateNote note={note} refreshNote={refreshNote} />}


        

            </section>
        </div>
    )
} 