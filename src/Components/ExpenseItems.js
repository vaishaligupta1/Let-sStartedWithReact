import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";

function ExpenseItems(props) {
  const clickHandler = () => {
    props.onDelete(props.name);
  };
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.name}</h2>

        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Delete</button>
    </div>
  );
}

export default ExpenseItems;
