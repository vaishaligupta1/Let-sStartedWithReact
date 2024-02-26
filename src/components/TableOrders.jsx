import { useContext } from "react";
import { RestaurantContext } from "../store/restaurant-context";
import Order from "./Order";
function TableOrders() {
  const { orders, deleteOrder } = useContext(RestaurantContext);
  //   const table1Orders = orders.filter((order) => {
  //     return order.table == "table1";
  //   });
  //   console.log(table1Orders, "filter1order");
  //   const table2Orders = orders.filter((order) => {
  //     return order.table == "table2";
  //   });
  //   console.log(table2Orders, "filter2order");
  //   const table3Orders = orders.filter((order) => {
  //     return order.table == "table3";
  //   });
  //   console.log(table3Orders, "filter3order");

  return (
    <>
      {orders.length == 0 && <h2>No Orders Available!!</h2>}
      {orders.length > 0 && (
        <div>
          <h1>Orders</h1>

          <div>
            Table1
            {orders.map((order) => (
              <>
                {order.table == "table1" && (
                  <div>
                    <span>
                      {order.dish} {order.price}
                    </span>
                    <button onClick={() => deleteOrder(order.id)}>
                      Delete Order
                    </button>
                  </div>
                )}
              </>
            ))}
          </div>
          <div>
            Table2
            {orders.map((order) => (
              <>
                {order.table == "table2" && (
                  <div>
                    <span>
                      {order.dish} {order.price}
                    </span>
                    <button onClick={() => deleteOrder(order.id)}>
                      Delete Order
                    </button>
                  </div>
                )}
              </>
            ))}
          </div>
          <div>
            Table 3
            {orders.map((order) => (
              <>
                {order.table == "table3" && (
                  <div>
                    <span>
                      {order.dish} {order.price}
                    </span>
                    <button onClick={() => deleteOrder(order.id)}>
                      Delete Order
                    </button>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default TableOrders;
