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

    return (
    <section style={{
        margin: "0.3rem"
    }}>
    <form onSubmit={handleForm}>
        <h1>Add new Note</h1>
        
        <fieldset  className="new-note-form">
            <label htmlFor="text">Title</label>
            <input 
                style={{
                    textAlign:"left",
                    paddingLeft: "2.5px",
                 
                }}
                type="text" 
                id="title" 
                name="title" 
                required onChange={(e) => setTitle(e.target.value)} />
        </fieldset>
        <fieldset  className="new-note-form">
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
                required onChange={(e) => setText(e.target.value)} />
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
        <button style={{
                    marginTop: "1rem",
                    paddingLeft: "5px",
                    paddingRight: "5px"
                }}>Send Note</button>
        {sending ? <p>Sending Note</p> : null }
        {error ? <p>{error}</p> : null}
    </form>
    </section>
    )
}