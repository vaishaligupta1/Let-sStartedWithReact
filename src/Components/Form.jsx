import React, { useContext, useRef } from "react";
import NotesContext from "../Store/NoteContext";

function Form() {
  const { addNotes, hideModal } = useContext(NotesContext);
  const title = useRef();
  const disc = useRef();
  const formHandler = (e) => {
    e.preventDefault();
    let obj = {
      title: title.current.value,
      disc: disc.current.value,
    };
    addNotes(obj);
    hideModal();
  };
  return (
    <div className="form-container">
      <form onSubmit={formHandler}>
        <label htmlFor=""> New Title:</label>
        <input type="text" placeholder="Add new Note" ref={title} />
        <label htmlFor="">New Disc:</label>
        <input type="text" ref={disc} />

        <button type="submit">Add </button>
      </form>
    </div>
  );
}

export default Form;
