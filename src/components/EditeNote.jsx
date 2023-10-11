export const updateNote = ({editNote}) => {

    return <>
        <form onSubmit={handleForm}>
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
            <input type="number" id="number" name="number" required onChange={(e) => setCategory_id(e.target.value)}/>
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
    </>
}