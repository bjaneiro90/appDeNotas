import { useContext} from "react";
import { ErrorMessage } from "../components/errorMessage"
import useNotes from "../hooks/useNotes"
import { AuthContext } from "../context/AuthContext";
import { NewNote } from "../components/NewNote";
import { NoteList } from "../components/NoteList";
import { useNavigate } from "react-router-dom";



export const NotePage = () => {
    const {notes, loading, error, addNote, removeNote,} = useNotes();
    console.log(notes)
    const {user} = useContext(AuthContext);
    const navigate = useNavigate()
    console.log(user);

    /*if(!user) { 
        navigate('/users/login')
    }*/
    if(loading) return <p>Carregando Notas</p>
    if(error) return ErrorMessage
    
    const filterNotes = notes.filter((note) => {
        console.log(user?.id);
        console.log(note?.user_id);
        return note?.user_id === user?.id
    } )
	console.log(filterNotes)
  

    return (
        <main className="allpostspage-main">
            <h1>Note Page</h1>
            <NewNote addNote={addNote} />
            <h2>My Latest Notes</h2>        
            <NoteList notes={notes} removeNote={removeNote}/>

        </main>
    )
}