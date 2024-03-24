import React, { useEffect, useState } from "react";
import NotesContext from "./NoteContext";
function NotesContextProvider(props) {
  const [searchNotesArr, setSearchNotesArr] = useState([]);
  const [notes, setNotes] = useState([]);
  const [showingNotes, setShowingNotes] = useState(0);
  const [totalNotes, setTotalNotes] = useState(0);
  const [modal, setModal] = useState(false);
  const addNotes = (obj) => {
    setNotes([...notes, obj]);
  };
  const deleteNotes = (title) => {
    const newNotes = notes.filter((note) => note.title != title);
    setNotes(newNotes);
  };
  const hideModal = () => {
    setModal(false);
  };
  const showModal = () => {
    setModal(true);
  };
  useEffect(() => {
    if (notes) {
      let total = notes.length;
      setTotalNotes(total);
    }
  }, [addNotes, deleteNotes]);
  const searchNotes = (name) => {
    const searchedNotes = notes.filter((note) => {
      return note.title.includes(name);
    });
    setSearchNotesArr(searchedNotes);
  };
  useEffect(() => {
    let total = searchNotesArr.length;
    if (total == 0) {
      total = notes.length;
    }
    setShowingNotes(total);
  }, [searchNotes]);
  return (
    <>
      <NotesContext.Provider
        value={{
          notes,
          showingNotes,
          totalNotes,
          addNotes,
          deleteNotes,
          modal,
          hideModal,
          showModal,
          searchNotes,
          searchNotesArr,
        }}
      >
        {props.children}
      </NotesContext.Provider>
    </>
  );
}

export default NotesContextProvider;
