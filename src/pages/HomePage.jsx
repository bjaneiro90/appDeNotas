import { useContext } from "react";
import { ErrorMessage } from "../components/errorMessage"
import useNotes from "../hooks/useNotes"
import { AuthContext } from "../context/AuthContext";
import { NewNote } from "../components/NewNote";
import { NoteList } from "../components/NoteList";


export const HomePage = () => {
    const {notes, loading, error} = useNotes();
    const {user} = useContext(AuthContext);

    if(loading) return <p>Carregando Notas</p>


    return <section>
        <h1>Welcome Page</h1>
    </section>
}