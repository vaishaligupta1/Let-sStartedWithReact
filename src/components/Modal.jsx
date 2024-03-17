import React from "react";
import "./Modal.css";
import ReactDOM from "react-dom";
function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <div className="modal-card">{props.children}</div>
          <div className="transparentdiv" onClick={props.removeModal}></div>
        </>,
        document.getElementById("modal")
      )}
    </>
  );
}

export default Modal;
