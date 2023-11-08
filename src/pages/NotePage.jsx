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
        <div className="box">
            <section className="notes-section">
            <header className="header-box-style">
                <h2 className="header-box-h2-style">
                Note Page</h2>
            </header>
                <button className="style-button" onClick={() => { 
                    setIsNew(!isNew)
                }}
            >
                New
            </button>
            {error ? <p>{error}</p> : null}
            {isNew && <NewNote addNote={addNote}/>}
            <header className="header-box-style">
                <h2 className="header-box-h2-style">
            My Latest Notes</h2>
            </header>        
                <NoteList notes={notes} removeNote={removeNote}/>

            </section>
        </div>
    )
}