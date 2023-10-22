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
            <section style={{
            width: "100%",
            backgroundColor: "rgba(194, 159, 182, 0.12)",
            margin: "0",
            padding: "1rem",
            borderRadius: "5%",
            marginTop: "0rem",
            boxShadow: "0px 0px 2px 0.2px"
        }}>
            <header style={{
                    margin: "0",
                    borderBottom: "0.5px solid grey",
                    paddingBottom: "0.5rem"
            }}>
                <h2 style={{
                fontSize: "2rem",
                marginTop: "0",
        }}>
                Note Page</h2>
            </header>
                <button style={{
                     paddingLeft: "5px",
                     paddingRight: "5px",
                     marginTop: "1rem"
                    
                }} onClick={() => { 
                    setIsNew(!isNew)
                }}
            >
                New
            </button>
            {error ? <p>{error}</p> : null}
            {isNew && <NewNote addNote={addNote}/>}
            <header style={{
                    margin: "0",
                    borderBottom: "0.5px solid grey",
                    paddingBottom: "0.5rem"
            }}>
                <h2 style={{
                fontSize: "2rem",
                marginTop: "1rem",
        }}>
            My Latest Notes</h2>
            </header>        
                <NoteList notes={notes} removeNote={removeNote}/>

            </section>
        </div>
    )
}