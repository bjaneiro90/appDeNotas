import { ErrorMessage } from "../components/errorMessage"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import useNote from "../hooks/useNote"
import { useParams } from "react-router-dom"
import { UpdateNote } from "../components/UpdateNote"
import { NoteListID } from "../components/NoteListID"


export const NoteByID = () => {



    const {user} = useContext(AuthContext);
    const {id} = useParams()
    const {notes, loading, error} = useNote(id)
    if(loading) return <p>Carregando Notas</p>
    if(error) return ErrorMessage
   



 
    return (
        <section>

        {user ? <h2>My Note ID nº{id}</h2> :  <h2>Global Notes</h2>}

        {user ? <NoteListID notes={notes}/> : <p> Back to Homepage</p>}

        {user ? <UpdateNote notes={notes}/> : null }


    

        </section>
    )
} 