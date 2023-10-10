import { ErrorMessage } from "../components/errorMessage"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import useNote from "../hooks/useNote"
import { useParams } from "react-router-dom"
import { Note } from "../components/note"
import { NoteList } from "../components/NoteList"
import { NoteListID } from "../components/NoteListID"

export const NoteByID = () => {



    const {user} = useContext(AuthContext);
    const {id} = useParams()
    const {notes, loading, error, removeNote} = useNote(id)
    if(loading) return <p>Carregando Notas</p>
    if(error) return ErrorMessage

    console.log(notes, loading, error)
   



 
    return (
        <section>

        {user ? <h2>My Note ID nº{id}</h2> :  <h2>Global Notes</h2>}

        {user ? <NoteListID notes={notes}/> : <p> Back to Homepage</p>}

        </section>
    )
} 