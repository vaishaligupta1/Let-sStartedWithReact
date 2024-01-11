import ExpenseItem from "./components/Expenses/ExpenseItem";
import './components/Expenses/Expenses.css'
const App=()=> {
  const expenses =[
    { title: 'Car Insurance',amount:294.64,location:"Mumbai", date: new Date(2023,1,11) },
    { title: 'Toilet Paper',amount:29.64,location:"Delhi", date: new Date(2023,1,11) },
    { title: 'new Desk',amount:95.64,location:"Patna", date: new Date(2023,1,11) },
  ]
  return (
    <div className="expenses">
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} location={expenses[0].location} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} location={expenses[1].location} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} location={expenses[2].location} date={expenses[2].date}></ExpenseItem>
    </div>
  );
}

export default App;

