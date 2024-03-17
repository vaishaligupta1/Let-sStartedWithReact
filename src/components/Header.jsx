import { useContext, useState } from "react";
import "./Header.css";

import { IoCartOutline } from "react-icons/io5";
import CartContext from "../contexts/cartContext";

const Header = () => {
  const { showCartHandler, numberOfItemsInCart } = useContext(CartContext);

  console.log(numberOfItemsInCart);

  return (
    <>
      <div className="header-class">
        <div className="upper-header">
          <h1 className="Restaurant-name"> React Meals</h1>
          <div className="cart" onClick={showCartHandler}>
            <span>
              {" "}
              <IoCartOutline /> Your Cart
            </span>
            <div className="cart-items">{numberOfItemsInCart}</div>
          </div>
        </div>
        <div className="lower-header">
          <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/01/31/14/table.jpg?width=1200&height=630&fit=crop" />
        </div>
      </div>
    </>
  );
};

export default Header;
