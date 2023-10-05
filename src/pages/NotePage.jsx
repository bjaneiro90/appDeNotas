import { useContext } from "react";
import { ErrorMessage } from "../components/errorMessage"
import useNotes from "../hooks/useNotes"
import { AuthContext } from "../context/AuthContext";
import { NewNote } from "../components/NewNote";
import { NoteList } from "../components/NoteList";


export const NotePage = () => {
    const {notes, loading, error, addNote} = useNotes();
    const {user} = useContext(AuthContext);

    if(loading) return <p>Carregando Notas</p>
    
    


    return <section>
        <h1>Note Page</h1>
        {user ? <NewNote addNote={addNote} /> : null}
        
        <NoteList notes={notes}/>
    </section>
}