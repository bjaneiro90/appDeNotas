import { useEffect, useState } from "react"
import { getSingleNoteService, updateNoteService } from "../services";

const useNote = (id) => {
    const [notes, setNote] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("")
    

    useEffect(() => {
        const loadNote = async () => {
            try {
                setLoading(true);

                const data = await getSingleNoteService(id);

                setNote(data)

            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        loadNote()
    }, [id])



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

