import ExpenseDate from './ExpenseDate';
import './ExpenseItems.css' ;
import ExpenseDetails from './ExpenseDetails';
function ExpenseItem(props)
{
    // const expenseDate = new Date(2023,1,9);
    // const expenseTitle = "Car Insurance";
    // const expenseAmount = 294.47;
    //const LocationOfExpenditure = "Mumbai";
    
    return (
    <div className ="expense-item">
        <ExpenseDate date ={props.date}/>
        <ExpenseDetails title ={props.title} location={props.location} amount ={props.amount}></ExpenseDetails>
    </div>
    )
}

export default ExpenseItem;