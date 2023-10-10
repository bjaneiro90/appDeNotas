import { useEffect, useState } from "react"
import { getSingleNoteService } from "../services";

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

    return {notes, loading, error, removeNote}
}

export default useNote