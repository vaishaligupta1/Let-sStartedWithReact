import ExpenseItems from "./Components/ExpenseItems";
import ExpenseForm from "./Components/ExpenseForm";
import { useState } from "react";
import Filter from "./Components/Filter";
import ExpensesChart from "./Components/ExpensesChart";
let expenseitems = [
  { itemname: "Car Insurance", date: new Date(2021, 2, 23), amount: 10000 },
  { itemname: "Shopping", date: new Date(2022, 2, 23), amount: 5000 },
  { itemname: "Grocery", date: new Date(2023, 4, 23), amount: 3000 },
];
function App() {
  const [items, setitems] = useState(expenseitems);
  const FormHandler = (obj) => {
    let newitems = [obj, ...items];
    console.log(newitems);
    setitems(newitems);
  };
  const DeleteHandler = (name) => {
    const filteredarray = items.filter((item) => {
      return item.itemname !== name;
    });
    setitems(filteredarray);
  };
  const [filterYear, setfilterYear] = useState("");
  const onFilterHandler = (year) => {
    setfilterYear(year);
    console.log(filterYear);
  };
  const filteredExp = items.filter((item) => {
    return item.date.getFullYear().toString() == filterYear;
  });
  console.log(filteredExp);
  return (
    <div>
      <ExpenseForm onSaveForm={FormHandler}></ExpenseForm>
      <h1>Expense Items</h1>
      <ExpensesChart expenses={filteredExp}></ExpensesChart>
      <Filter onFilter={onFilterHandler} filterYear={filterYear}></Filter>
      {filteredExp.length == 0 && <h3>No expenses available </h3>}
      {filteredExp.length > 0 &&
        filteredExp.map((item) => (
          <ExpenseItems
            onDelete={DeleteHandler}
            name={item.itemname}
            date={item.date}
            amount={item.amount}
            key={item.itemname}
          ></ExpenseItems>
        ))}
    </div>
  );
}

export default App;
