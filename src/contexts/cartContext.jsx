import { createContext } from "react";
let defaultContext = {
  cartItems: [],
  meal: null,
  addMeal: () => {},
  closeModal: () => {},
  addToCart: () => {},
  showCart: false,
  showCartHandler: () => {},
  hideCartHandler: () => {},
  numberOfItemsInCart: 0,
};
const CartContext = createContext(defaultContext);

export default CartContext;
