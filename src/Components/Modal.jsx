import styles from "./Modal.module.css";
import ReactDOM from "react-dom";
import Form from "./Form";
import { useContext } from "react";
import NotesContext from "../Store/NoteContext";
const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
};
const OverlayModel = (props) => {
  return (
    <div className={styles.model}>
      <header className={styles.header}>
        <h1>Add New Task</h1>
      </header>

      <Form />

      <footer>
        <button className="btn btn-warning" onClick={props.onConfirm}>
          close
        </button>
      </footer>
    </div>
  );
};

const Modal = (props) => {
  const { hideModal } = useContext(NotesContext);
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={hideModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <OverlayModel onConfirm={hideModal} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};
export default Modal;
