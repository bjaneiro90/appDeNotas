import { useContext, useEffect, useState } from "react"
import { getSingleNoteService, updateNoteService } from "../services";
import { AuthContext } from "../context/AuthContext";

const useNote = (id) => {
    const [note, setNote] = useState(null);
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






    const refreshNote = async (note) => {
        console.log(note.title);
        try {
            setLoading(true)
        
            await updateNoteService(id, note, token)

            const data = await getSingleNoteService(id, token)


            setNote(data)
    
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }


    return {note, loading, error, refreshNote}
}

export default useNote

