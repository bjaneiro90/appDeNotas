import { ErrorMessage } from "../components/errorMessage"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import useNote from "../hooks/useNote"
import { useParams } from "react-router-dom"

export function NoteByID () {

    let {id}= useParams()
    

    const {note, loading, error} = useNote(id)
    const {user} = useContext(AuthContext);
    if(loading) return <p>Carregando Notas</p>
    if(error) return ErrorMessage

    console.log(note)


 
    return (
        <section>

        {user ? <h2>My Latest Notes</h2> :  <h2>Global Notes</h2>}

    

        </section>
    )
} 