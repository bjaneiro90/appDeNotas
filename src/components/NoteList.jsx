


import { Note } from "./note";


export const NoteList = ({ notes, removeNote }) => {
	

	return notes?.length ? 
	<ul>{notes?.map(note => 
		<li key={note.id} className="note-list"><Note note={note} removeNote={removeNote} />
		</li>)}
	</ul> : 
	<p>nao ha notas</p>;
};