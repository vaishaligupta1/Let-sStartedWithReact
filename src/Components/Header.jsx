import React from "react";
import "./Header.css";
import { useContext } from "react";
import NotesContext from "../Store/NoteContext";
function Header() {
  const { searchNotes } = useContext(NotesContext);
  const searchHandler = (event) => {
    if (event.key == "Enter") {
      searchNotes(event.target.value);
    }
  };
  return (
    <div className="header">
      <label htmlFor=""> Search Note</label>
      <input type="text" placeholder=" Search" onKeyDown={searchHandler} />
    </div>
  );
}

export default Header;
