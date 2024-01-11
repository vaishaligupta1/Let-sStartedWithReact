import './ExpenseItems.css' ;

function ExpenseItem(props)
{
    // const expenseDate = new Date(2023,1,9);
    // const expenseTitle = "Car Insurance";
    // const expenseAmount = 294.47;
    //const LocationOfExpenditure = "Mumbai";
    return (
    <div className ="expense-item">
        <div>{props.date.toISOString()}</div>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <h2>{props.location}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
    </div>
    )
}

export default ExpenseItem;