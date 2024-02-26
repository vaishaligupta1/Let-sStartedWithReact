import { useContext } from "react";
import { useRef } from "react";
import { RestaurantContext } from "../store/restaurant-context";

function Form() {
  const { addOrder } = useContext(RestaurantContext);
  let uniqueid = useRef();
  let price = useRef();
  let dish = useRef();
  let table = useRef();
  const onAddbillHandler = (event) => {
    event.preventDefault();
    let obj = {
      id: uniqueid.current.value,
      price: price.current.value,
      dish: dish.current.value,
      table: table.current.value,
    };
    uniqueid.current.value = "";
    price.current.value = "";
    dish.current.value = "";
    table.current.value = "";
    addOrder(obj);
  };

  return (
    <>
      <form onSubmit={onAddbillHandler}>
        <div className="row">
          <div className="col-2">
            <label htmlFor="id"> Unique Id</label>
          </div>
          <div className="col-2">
            <label htmlFor="id"> Choose Price</label>
          </div>
          <div className="col-2">
            <label htmlFor="id"> Choose dish</label>
          </div>
          <div className="col-2">
            <label htmlFor="id"> Choose a Table</label>
          </div>
        </div>
        <div class="row">
          <div class="col-2">
            <input type="number" ref={uniqueid} />
          </div>
          <div class="col-2">
            <input type="number" ref={price} />
          </div>
          <div class="col-2">
            <input type="text" ref={dish} />
          </div>
          <div class="col-2">
            <select ref={table}>
              <option value="table1">Table 1</option>
              <option value="table2">Table 2</option>
              <option value="table3">Table 3</option>
            </select>
          </div>
          <div class="col-3">
            <button type="submit"> Add to Bill</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
