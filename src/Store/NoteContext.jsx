import { createContext } from "react";

const NotesContext = createContext({
  notes: [],
  showingNotes: null,
  totalNotes: null,
  addNotes: () => {},
  deleteNotes: () => {},
  modal: false,
  hideModal: () => {},
  showModal: () => {},
  searchNotesArr: [],
  searchNotes: () => {},
});

export default NotesContext;
