import React from "react";
import Modal from "./Modal";

function VerifyItem(props) {
  return (
    <>
      {props.item && (
        <Modal onCloseHandler={props.onCloseHandler}>
          <div>
            <h3>{props.item.name}</h3>
            <div>
              <h2> Total Amount</h2>
              <h3>{props.item.price}</h3>
            </div>
            <div className="button-div">
              <button
                onClick={() => props.onCloseHandler()}
                className="close-btn"
              >
                close
              </button>
              <button className="order-btn"> order</button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default VerifyItem;
