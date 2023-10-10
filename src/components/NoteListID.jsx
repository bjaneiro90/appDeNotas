import { NoteId } from "./NoteId";

export const NoteListID = ({ notes, removeNote }) => {
	return notes.length ? 
	<ul>{notes.map(notes => 
		<li key={notes.id}><NoteId notes={notes} removeNote={removeNote} /> 
		</li>)}
	</ul> : 
	<p>nao ha notas</p>;
};