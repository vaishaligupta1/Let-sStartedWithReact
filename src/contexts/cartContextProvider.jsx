import React, { useEffect, useState } from "react";
import CartContext from "./cartContext";
function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [meal, setMeal] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [total, setTotal] = useState();
  const [numberOfItemsInCart, setNumberOfItemsInCart] = useState(0);
  const addMeal = (obj) => {
    setMeal(obj);
  };
  const closeModal = () => {
    setMeal(null);
  };
  const addToCart = (obj) => {
    let itemindex = cartItems.findIndex((item) => {
      return item.id == obj.id;
    });

    let newquantity = 1;

    if (itemindex != -1) {
      let item = cartItems[itemindex];

      newquantity = Number.parseInt(item.quantity) + 1;
      console.log("new quantity", newquantity);
      item = { ...item, quantity: newquantity };

      let updatedCartItems = [...cartItems];
      updatedCartItems[itemindex] = item;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...obj, quantity: newquantity }]);
    }
    console.log(cartItems);
    setMeal(null);
    setNumberOfItemsInCart(numberOfItemsInCart + 1);
  };
  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  };
  useEffect(() => {
    let arr = cartItems.map((item) => {
      return item.quantity;
    });
    let sum = 0;
    if (arr.length > 0) {
      const totalitems = arr.reduce((sum, ele) => {
        return sum + ele;
      });
      setNumberOfItemsInCart(totalitems);
    }
  }, [addToCart]);

  return (
    <>
      <CartContext.Provider
        value={{
          cartItems: cartItems,
          meal: meal,
          numberOfItemsInCart: numberOfItemsInCart,
          addMeal: addMeal,
          closeModal: closeModal,
          addToCart: addToCart,
          showCart: showCart,
          showCartHandler: showCartHandler,
          hideCartHandler: hideCartHandler,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
}

export default CartContextProvider;
