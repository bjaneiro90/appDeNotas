import { useState} from "react";
import { ErrorMessage } from "../components/errorMessage"
import useNotes from "../hooks/useNotes"
import { NewNote } from "../components/NewNote";
import { NoteList } from "../components/NoteList";




export const NotePage = () => {
    
    const {notes, loading, error, addNote, removeNote,} = useNotes();
    const [isNew, setIsNew] = useState(false)
   
    if(loading) return <p>Carregando Notas</p>
    if(error) return ErrorMessage
    
  

  

    return (
        <main className="allpostspage-main">
            <h1>Note Page</h1>
            <button style={{
                width: "2rem",
                height: "2.5rem",
                
            }} onClick={() => { 
                setIsNew(!isNew)
            }}
        >
            New
        </button>
        {error ? <p>{error}</p> : null}
           {isNew && <NewNote addNote={addNote}/>}
            <h2>My Latest Notes</h2>        
            <NoteList notes={notes} removeNote={removeNote}/>

        </main>
    )
}