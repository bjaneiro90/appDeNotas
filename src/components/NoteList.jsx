
import { useContext } from "react";
import { NoteId } from "./NoteId";
import { Note } from "./note";
import { AuthContext } from "../context/AuthContext";

export const NoteList = ({ notes, removeNote }) => {



	return notes.length? 
	<ul>{notes.map(notes => 
		<li key={notes.id}><Note notes={notes} removeNote={removeNote} />
		</li>)}
	</ul> : 
	<p>nao ha notas</p>;
};