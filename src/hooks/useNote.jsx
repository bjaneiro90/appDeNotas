import { useContext, useEffect, useState } from "react"
import { getSingleNoteService, updateNoteService } from "../services";
import { AuthContext } from "../context/AuthContext";

const useNote = (id) => {
    const [notes, setNote] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("")
    const {token} = useContext(AuthContext)
    

    useEffect(() => {
        const loadNote = async () => {
            try {
                setLoading(true);

                const data = await getSingleNoteService(id, token);

                setNote(data)

            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        if(token) loadNote()
    }, [id, token])



    const removeNote = (id) => {
        setNote(notes.filter((note) => note.id !== id))
    }



    const refreshNote = async (note,token, id) => {
        try {
            setLoading(true)
        
            await updateNoteService(note,token)

            const data = await getSingleNoteService(id)


            setNote(data)
    
     } catch (error) {
        setError(error.message)
    } finally {
        setLoading(false)
    }
}


    return {notes, loading, error, removeNote, refreshNote}
}

export default useNote

