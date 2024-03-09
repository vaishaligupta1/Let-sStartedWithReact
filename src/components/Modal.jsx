import React from "react";
import Card from "./Card";
import ReactDOM from "react-dom";
function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <div className="modal-card">{props.children}</div>
          <div className="transparentdiv" onClick={props.onCloseHandler}></div>
        </>,
        document.getElementById("modal")
      )}
    </>
  );
}

export default Modal;
