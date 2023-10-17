import { useContext} from "react";
import { ErrorMessage } from "../components/errorMessage"
import useNotes from "../hooks/useNotes"
import { AuthContext } from "../context/AuthContext";
import { NewNote } from "../components/NewNote";
import { NoteList } from "../components/NoteList";
import { useNavigate } from "react-router-dom";



export const NotePage = () => {
    
    const {notes, loading, error, addNote, removeNote,} = useNotes();

    const {user} = useContext(AuthContext);
    const navigate = useNavigate()

    /*if(!user) { 
        navigate('/users/login')
    }*/
    if(loading) return <p>Carregando Notas</p>
    if(error) return ErrorMessage
    
  

  

    return (
        <main className="allpostspage-main">
            <h1>Note Page</h1>
            <NewNote addNote={addNote} />
            <h2>My Latest Notes</h2>        
            <NoteList notes={notes} removeNote={removeNote}/>

        </main>
    )
}