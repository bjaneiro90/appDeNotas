import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"

export const UpdateNote = ({note, refreshNote, loading}) => {
    
    const [error,setError] = useState()
    const {token} = useContext(AuthContext)
    const [title, setTitle] = useState(note.title)
    const [text, setText] = useState(note.text)
    const [category_id, setCategory_id] = useState(note.category_id)
    const [image,setImage] = useState(note.image)
   

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

    return (
    <section style={{
        margin: "0.3rem"
    }}>
    <form onSubmit={handleForm}>
        <h3 style={{
            marginTop: "2.5rem",
            marginBottom: "0.5rem"
        }}>Update Note</h3>
        
        <fieldset className="new-note-form">
            <label htmlFor="text">Title</label>
            <input 
                style={{
                    textAlign:"left",
                    paddingLeft: "2.5px",
                 
                }}
                type="text" 
                id="title" 
                name="title" 
                value={title} required onChange={(e) => setTitle(e.target.value)} />
        </fieldset>
        <fieldset className="new-note-form">
            <label htmlFor="text">Text</label>
            <textarea style={{
                    textAlign:"left",
                    paddingLeft: "2.5px",
                       
                }} 
                rows= "4" 
                cols="40" 
            type="text" 
            id="text" 
            name="text"  
            value={text} required onChange={(e) => setText(e.target.value)} />
        </fieldset>
        <fieldset  className="new-note-form">
            <label htmlFor="number">Category</label>
            <select id="number" name="category_id" required onChange={(e) => setCategory_id(e.target.value)}>
            <option value="">--Please choose an option--</option>
            <option value="1">Tecnologia</option>
            <option value="2">Actuality</option>
            <option value="3">Gastronomy</option>
            <option value="4">Travels</option>
            <option value="5">Animals</option>
            <option value="6">Music</option>
            <option value="7">Cinema</option>
            <option value="8">International</option>
            <option value="9">Culture</option>
            <option value="10">Reminders</option>
            <option value="11"></option>
            </select>
        </fieldset>
        <fieldset className="new-note-form">
            <label htmlFor="inputField">Image (optional)</label>
            <input style={{
                 marginTop: "1rem",
                 paddingLeft: "5px",
                 paddingRight: "5px",
                 fontSize: "0.85rem",
                 display: "inline-block"
            }}  type="file" id="inputField" name="image"
            onChange={(e) => setImage(e.target.value)} />
        </fieldset>
        <button style={{
                marginTop: "0.5rem",
                paddingLeft: "5px",
                paddingRight: "5px"
        }}>Update Note</button>
        {loading ? <p>Sending Note</p> : null }
        {error ? <p>{error}</p> : null}
    </form>
    </section>
    )
}