import { Note } from "./Note";

export const NoteList = ({ notes }) => {
	return notes.length ? <ul>{notes.map(notes => 
	<li key={notes.id}><Note notes={notes} /> 
		</li>)}
	</ul> : <p>nao ha notas</p>;
};