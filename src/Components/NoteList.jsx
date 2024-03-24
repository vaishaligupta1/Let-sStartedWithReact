import React, { useContext } from "react";
import NotesContext from "../Store/NoteContext";
import Note from "./Note";
function NoteList() {
  const { notes, searchNotesArr } = useContext(NotesContext);
  return (
    <div>
      {notes &&
        searchNotesArr.length == 0 &&
        notes.map((note) => (
          <Note key={note.title} title={note.title} disc={note.disc} />
        ))}
      {searchNotesArr.length > 0 &&
        searchNotesArr.map((note) => (
          <Note key={note.title} title={note.title} disc={note.disc} />
        ))}
    </div>
  );
}

export default NoteList;
