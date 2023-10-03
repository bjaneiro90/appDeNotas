import { NoteList } from "../components/NoteList";
import useNotes from "../hooks/useNotes"

export const HomePage = () => {

    const {notes, loading, error} = useNotes();

    if(loading) return <p>carregando notas</p>
    if(error) return <p>{error}</p>

    console.log(notes)

    return <section>
        <h1>Note List</h1>
        <NoteList notes={notes}/>
    </section>
}