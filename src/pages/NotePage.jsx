import { useContext } from "react";
import { ErrorMessage } from "../components/errorMessage"
import useNotes from "../hooks/useNotes"
import { AuthContext } from "../context/AuthContext";
import { NewNote } from "../components/NewNote";
import { NoteList } from "../components/NoteList";



export const NotePage = () => {
    const {notes, loading, error, addNote, removeNote} = useNotes();
    const {user} = useContext(AuthContext);
    if(loading) return <p>Carregando Notas</p>
    if(error) return ErrorMessage

   
  

    return <section>
        <h1>Note Page</h1>
        {user ? <NewNote addNote={addNote} /> : null}

        {user ? <h2>My Latest Notes</h2> :  <h2>Global Notes</h2>}
       
        
        {user? <NoteList notes={notes} removeNote={removeNote}/> : null }
    </section>
}