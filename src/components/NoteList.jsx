

import { useContext } from "react";
import { Note } from "./note";
import { AuthContext } from "../context/AuthContext";

export const NoteList = ({ notes, removeNote }) => {
	const {user} = useContext(AuthContext);
	console.log(notes);
	console.log(user)
	

	return notes?.length ? 
	<ul>{notes?.map(note => 
		<li key={note.id} className="note-list"><Note note={note} removeNote={removeNote} />
		</li>)}
	</ul> : 
	<p>nao ha notas</p>;
};