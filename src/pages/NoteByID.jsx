import { useParams } from "react-router-dom"
import useNote from "../hooks/useNote"
import { ErrorMessage } from "../components/errorMessage"
import { Note } from "../components/Note"

export const NoteByID = () => {
    const {id} = useParams()

    const {note, loading,error} = useNote(id)

    if(loading) return <p>carregando notas</p>
    

    return (

        <section>
            <h1>Notas from {note.id}</h1>
            <Note note={note}/>
        </section>
    )
} 