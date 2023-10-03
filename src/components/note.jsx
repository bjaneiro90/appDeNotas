export const Note = ({notes}) => {
    return (<article>
        <p>{notes.category}</p>

        {notes.image ? <img src={`${import.meta.env.VITE_APP_BACKEND}`}/> : null}

        <p>by {notes.id} on {new Date(notes.created_at).toLocaleString()}</p>
    </article>)
}