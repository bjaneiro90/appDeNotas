


import { Note } from "./note";


export const NoteList = ({ notes, removeNote }) => {
	

	return notes?.length ? 
	<ul style={{
		listStyle: "none"
	}}>
		{notes?.map(note => 
		<li key={note.id} className="note-list"><Note note={note} removeNote={removeNote} />
		</li>)}
	</ul> : 
	<p>No notes yet !</p>;
};