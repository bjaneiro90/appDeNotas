import { useEffect, useState } from "react"
import { getAllNotesService, sendNoteService } from "../services";

const useNotes = () => {


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




    

    return {notes, loading, error, addNote, removeNote}
}

export default useNotes