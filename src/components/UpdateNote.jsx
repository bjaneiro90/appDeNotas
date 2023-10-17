import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"

export const UpdateNote = ({note, refreshNote, loading}) => {
    
    const [error,setError] = useState()
    const {token} = useContext(AuthContext)
    const [title, setTitle] = useState(note.title)
    const [text, setText] = useState(note.text)
    const [category_id, setCategory_id] = useState(note.category_id)
    const [image,setImage] = useState()
   

    const handleForm = async(e) => {
        e.preventDefault();

        try {

            const data = new FormData(e.target)
            //const note = await sendNoteService(data,token)
            refreshNote(data)
            e.target.reset()
            setImage(null)
        } catch (error) {
            setError(error.message)
        } 
    }

    return <form onSubmit={handleForm}>
        <h1>Update Note</h1>
        
        <fieldset>
            <label htmlFor="text">Title</label>
            <input type="text" id="title" name="title" value={title} required onChange={(e) => setTitle(e.target.value)} />
        </fieldset>
        <fieldset>
            <label htmlFor="text">Text</label>
            <input type="text" id="text" name="text"  value={text} required onChange={(e) => setText(e.target.value)} />
        </fieldset>
        <fieldset>
            <label htmlFor="category_id">Category</label>
            <input type="number" id="category_id" name="category_id" value={category_id} required onChange={(e) => setCategory_id(e.target.value)}/>
        </fieldset>
        {/*<fieldset>
            <label htmlFor="image">Image (optional)</label>
            <input type="file" id="image" name="image" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
            {image ? <figure><img src={URL.createObjectURL(image)} alt="Preview" style={{width: '100px'}}/></figure>: null }
        </fieldset>*/}
        <button>Update Note</button>
        {loading ? <p>Sending Note</p> : null }
        {error ? <p>{error}</p> : null}
    </form>
}