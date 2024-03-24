import React, { useContext } from "react";
import NotesContext from "../Store/NoteContext";

function Note({ title, disc }) {
  const { deleteNotes } = useContext(NotesContext);
  return (
    <div>
      {title} {disc}
      <button onClick={() => deleteNotes(title)}>Delete Note</button>
    </div>
  );
}

export default Note;
