import { Link } from "react-router-dom"

export const Note = ({notes}) => {
    return (<article>
        <p>{notes.title}</p>

        {notes.image ? <img src={`${import.meta.env.VITE_APP_BACKEND}`}/> : null}
        {notes.text}
        <p>
            by {notes.id} on {""} <Link to={`/notes/${notes.id}`}> 
        {new Date(notes.created_at).toLocaleString()}
        </Link>
        </p>
    </article>)
}