import React, { useContext, useEffect, useState } from "react";
import Modal from "./Modal";
import CartContext from "../contexts/cartContext";
function Cart() {
  const { showCart, hideCartHandler, cartItems } = useContext(CartContext);

  console.log(cartItems);
  let arr = cartItems.map((item) => {
    return item.quantity * item.price;
  });

  let sum = 0;
  let total = 0;
  if (arr.length > 0) {
    total = arr.reduce((sum, ele) => {
      return sum + ele;
    });
    total = Math.floor(total);
  }

  return (
    <>
      {showCart && (
        <Modal removeModal={hideCartHandler}>
          <div>
            {cartItems.map((item) => (
              <div>
                {item.name} {item.price} X {item.quantity}
              </div>
            ))}
          </div>
          <div>Total {total}</div>
          <button onClick={hideCartHandler}> close</button>
        </Modal>
      )}
    </>
  );
}

export default Cart;
