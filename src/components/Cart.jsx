import React, { useState } from "react";
import Modal from "./Modal";
function Cart() {
  const [showModal, setModal] = useState();
  function onCloseHandler() {}
  return (
    <>
      <Modal>
        <div>
          <button onClick={onCloseHandler}> close</button>
        </div>
      </Modal>
    </>
  );
}

export default Cart;
