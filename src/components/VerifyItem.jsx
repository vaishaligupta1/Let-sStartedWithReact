import React, { useContext } from "react";
import Modal from "./Modal";
import CartContext from "../contexts/cartContext";

function VerifyItem() {
  const { meal, closeModal, addToCart, numberOfItemsInCart } =
    useContext(CartContext);
  console.log(meal);
  return (
    <>
      {meal && (
        <Modal removeModal={closeModal}>
          <div>
            <h3>{meal.name}</h3>
            <div>
              <h2> Total Amount</h2>
              <h3>{meal.price}</h3>
            </div>
            <div className="button-div">
              <button className="close-btn" onClick={closeModal}>
                close
              </button>
              <button
                className="order-btn"
                onClick={() => addToCart(meal, numberOfItemsInCart)}
              >
                {" "}
                order
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default VerifyItem;
