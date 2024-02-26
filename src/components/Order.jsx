function Order(props) {
  console.log(props.id, props.dish, props.price, "ordercomponent");
  return (
    <div>
      <span>{props.dish}</span>
      <span>{props.price}</span>
      <button type="button">Delete</button>
    </div>
  );
}
export default Order;
