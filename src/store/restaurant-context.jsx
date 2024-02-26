import { useState } from "react";
import { createContext } from "react";
let defaultcontext = {
  orders: [],
  addOrder: () => {},
  deleteOrder: () => {},
};
export const RestaurantContext = createContext(defaultcontext);

const RestaurantProvider = (props) => {
  const [orders, setorders] = useState([]);
  const addOrder = (obj) => {
    const updatedOrders = [...orders, obj];
    setorders(updatedOrders);
  };
  const deleteOrder = (id) => {
    const updatedOrders = orders.filter((order) => {
      return order.id !== id;
    });
    setorders(updatedOrders);
  };
  return (
    <RestaurantContext.Provider
      value={{
        orders: orders,
        addOrder: addOrder,
        deleteOrder: deleteOrder,
      }}
    >
      {props.children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantProvider;
