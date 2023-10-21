import { useContext, useState } from "react"
import { sendNoteService } from "../services"
import { AuthContext } from "../context/AuthContext"

export const NewNote = ({addNote}) => {
    const [error,setError] = useState('')
    const [sending, setSending] = useState(false)
    const {token} = useContext(AuthContext)
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [category_id, setCategory_id] = useState('')
    const [image,setImage] = useState()
   

    const handleForm = async(e) => {
        e.preventDefault();

        try {
            setSending(true);

            const data = new FormData(e.target)
            //const note = await sendNoteService(data,token)
            addNote(data, token)
            e.target.reset()
            console.log(category_id)
        } catch (error) {
            setError(error.message)
        } finally {
            setSending(false)
        }
    }

    return <form  className="new-note-form" onSubmit={handleForm}>
        <h1>Add new Note</h1>
        
        <fieldset  className="new-note-form">
            <label htmlFor="text">Title</label>
            <input type="text" id="title" name="title" required onChange={(e) => setTitle(e.target.value)} />
        </fieldset>
        <fieldset  className="new-note-form">
            <label htmlFor="text">Text</label>
            <textarea rows= "8" cols="40" type="text" id="text" name="text" required onChange={(e) => setText(e.target.value)} />
        </fieldset>
        <fieldset  className="new-note-form">
            <label htmlFor="number">Category</label>
            <input type="number" id="number" name="category_id" required onChange={(e) => setCategory_id(e.target.value)}/>
        </fieldset>
        <button>Send Note</button>
        {sending ? <p>Sending Note</p> : null }
        {error ? <p>{error}</p> : null}
    </form>
}