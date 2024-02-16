import { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  const [title, settitle] = useState("");
  const [amount, setamount] = useState("");
  const [date, setdate] = useState("");
  const AddNewExpense = (event) => {
    event.preventDefault();
    let obj = { itemname: title, date: new Date(date), amount: amount };
    props.onSaveForm(obj);
    settitle("");
    setamount("");
    setdate("");
  };
  const TitleHandler = (event) => {
    settitle(event.target.value);
  };
  const AmountHandler = (event) => {
    setamount(event.target.value);
  };
  const DateHandler = (event) => {
    setdate(event.target.value);
  };

  return (
    <form onSubmit={AddNewExpense}>
      <label className="form_label"> Title</label>
      <input
        type="text"
        className="form_input"
        onChange={TitleHandler}
        value={title}
      />
      <label className="form_label"> Amount </label>
      <input
        type="number"
        className="form_input"
        onChange={AmountHandler}
        value={amount}
      />
      <label className="form_label">Date</label>
      <input
        type="date"
        className="form_input"
        onChange={DateHandler}
        value={date}
      />
      <button id="expense" type="submit">
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
