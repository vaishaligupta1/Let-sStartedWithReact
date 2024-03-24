import React, { useContext } from "react";
import NotesContext from "../Store/NoteContext";

function Body() {
  const { showModal, totalNotes, showingNotes } = useContext(NotesContext);
  return (
    <div>
      <center>
        <h3>Total Numbers :{totalNotes}</h3>
        <h3>Showing :{showingNotes}</h3>
        <button onClick={() => showModal()}>Add Note</button>
      </center>
    </div>
  );
}

export default Body;
