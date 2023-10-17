import { useContext, useEffect, useState } from "react"
import { deleteNoteService, getAllNotesService, sendNoteService } from "../services";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const useNotes = () => {


    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const {token} = useContext(AuthContext);
    const navigate = useNavigate()

    useEffect(() => {
        const loadNotes = async () => {
            try {
                setLoading(true);

                const data = await getAllNotesService(token);

                setNotes(data);
    
            } catch (error) {
    
                setError(error.message);
            }
            finally {
                setLoading(false)
            }
        }
        if(token) loadNotes();
    }, [token])

    const addNote = async (note, token) => {
        await sendNoteService(note,token)
        const newNotesList = await getAllNotesService(token)
        setNotes(newNotesList)
        /*setNotes([
            note,
            ...notes]);*/
    } 

    const removeNote = async (id, token) => {
        await deleteNoteService({id, token})
        const newNotesList = await getAllNotesService(token)
        setNotes(newNotesList)
        //setNotes(notes.filter((note) => note.id !== id))
    }




    

    return {notes, loading, error, addNote, removeNote}
}

export default useNotes