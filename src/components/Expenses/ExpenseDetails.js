import './ExpenseItems.css'
const ExpenseDetails=(props)=>{
    const { title, amount, location } = props;
    return(
        <div className="expense-item__description">
        <h2>{title}</h2>
        <div>{location}</div>
        <div className="expense-item__price">${amount}</div>
        </div>
    )
}
export default ExpenseDetails