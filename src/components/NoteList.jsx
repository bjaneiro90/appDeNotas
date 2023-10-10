import { Note } from "./Note";

export const NoteList = ({ notes, removeNote }) => {
	return notes.length ? 
	<ul>{notes.map(notes => 
		<li key={notes.id}><Note notes={notes} removeNote={removeNote} /> 
		<p>{notes.user_id}</p>
		</li>)}
	</ul> : 
	<p>nao ha notas</p>;
};