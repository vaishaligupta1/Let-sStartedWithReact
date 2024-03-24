import React, { useContext } from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Modal from "./Components/Modal";
import NotesContext from "./Store/NoteContext";
import NoteList from "./Components/NoteList";
function App() {
  const { modal } = useContext(NotesContext);
  return (
    <div>
      <Header></Header>
      <Body />
      <NoteList />
      {modal && <Modal />}
    </div>
  );
}

export default App;
