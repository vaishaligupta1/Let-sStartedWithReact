import ExpenseDate from './ExpenseDate';
import './ExpenseItems.css' ;
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
import '../UI/Card.css'
const ExpenseItem=(props)=>
{
    // const expenseDate = new Date(2023,1,9);
    // const expenseTitle = "Car Insurance";
    // const expenseAmount = 294.47;
    //const LocationOfExpenditure = "Mumbai";
    
    return (
    
    <Card className ="expense-item">
        <ExpenseDate date ={props.date}/>
        <ExpenseDetails title ={props.title} location={props.location} amount ={props.amount}></ExpenseDetails>
    </Card>
    )
}

export default ExpenseItem;