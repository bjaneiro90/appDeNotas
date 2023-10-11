import { useContext, useEffect, useState } from "react"
import { getAllNotesService, sendNoteService } from "../services";
import { AuthContext } from "../context/AuthContext";

const useNotes = () => {


    const {user} = useContext(AuthContext)
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadNotes = async () => {
            try {
                setLoading(true);

                const data = await getAllNotesService();

                setNotes(data);
    
            } catch (error) {
    
                setError(error.message);
            }
            finally {
                setLoading(false)
            }
        }
        loadNotes();
    }, [])

    const addNote = async (note, token) => {
        await sendNoteService(note,token)
        const newNotesList = await getAllNotesService()
        setNotes(newNotesList)
        /*setNotes([
            note,
            ...notes]);*/
    } 

    const removeNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id))
    }


    const refreshNotes = () => {
        setNotes(notes.filter((note) => user.id === note.user_id))
    }


    

    return {notes, loading, error, addNote, removeNote, refreshNotes}
}

export default useNotes