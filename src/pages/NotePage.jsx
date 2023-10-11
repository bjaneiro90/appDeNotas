import { useContext } from "react";
import { ErrorMessage } from "../components/errorMessage"
import useNotes from "../hooks/useNotes"
import { AuthContext } from "../context/AuthContext";
import { NewNote } from "../components/NewNote";
import { NoteList } from "../components/NoteList";
import { NoteListID } from "../components/NoteListID";



export const NotePage = () => {
    const {notes, loading, error, addNote, removeNote, refreshNotes} = useNotes();
    const {user, token} = useContext(AuthContext);
    if(loading) return <p>Carregando Notas</p>
    if(error) return ErrorMessage

   
  

    return <section>
        <h1>Note Page</h1>
        {user  ? <NewNote addNote={addNote} /> : <p>ola</p>}

        {user ? <h2>My Latest Notes</h2> :  <h2>Global Notes</h2>}
       
        
         <NoteList notes={notes} removeNote={removeNote} refreshNotes={refreshNotes}/> 
    </section>
}