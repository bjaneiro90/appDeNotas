import { useContext, useEffect, useState } from "react"
import { deleteNoteService, getAllNotesService, sendNoteService } from "../services";
import { AuthContext } from "../context/AuthContext";

const useNotes = () => {


    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const {token} = useContext(AuthContext);

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
        try {
            await sendNoteService(note,token)
            const newNotesList = await getAllNotesService(token)
            setNotes(newNotesList)
        } catch (error) {
          setError(error.message)  
        }
        
    } 

    const removeNote = async (id, token) => {
        try {
            await deleteNoteService({id, token})
            const newNotesList = await getAllNotesService(token)
            setNotes(newNotesList)

        }catch (error) {
            setError(error.message)  
          }

    } 




    

    return {notes, loading, error, addNote, removeNote}
}

export default useNotes