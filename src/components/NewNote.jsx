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
            setImage(null)
        } catch (error) {
            setError(error.message)
        } finally {
            setSending(false)
        }
    }

    return <form onSubmit={handleForm}>
        <h1>Add new Note</h1>
        
        <fieldset>
            <label htmlFor="text">Title</label>
            <input type="text" id="title" name="title" required onChange={(e) => setTitle(e.target.value)} />
        </fieldset>
        <fieldset>
            <label htmlFor="text">Text</label>
            <input type="text" id="text" name="text" required onChange={(e) => setText(e.target.value)} />
        </fieldset>
        <fieldset>
            <label htmlFor="number">Category</label>
            <input type="number" id="number" name="category_id" required onChange={(e) => setCategory_id(e.target.value)}/>
        </fieldset>
        <fieldset>
            <label htmlFor="image">Image (optional)</label>
            <input type="file" id="image" name="image" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
            {image ? <figure><img src={URL.createObjectURL(image)} alt="Preview" style={{width: '100px'}}/></figure>: null }
        </fieldset>
        <button>Send Note</button>
        {sending ? <p>Sending Note</p> : null }
        {error ? <p>{error}</p> : null}
    </form>
}