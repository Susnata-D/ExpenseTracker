import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props){
    return(
    <div className='expenses'>
    <ExpenseItem 
       date = {props.item[0].date}
       title = {props.item[0].title}
       amount = {props.item[0].amount}>
    </ExpenseItem>
    <ExpenseItem 
       date = {props.item[1].date}
       title = {props.item[1].title}
       amount = {props.item[1].amount}>
    </ExpenseItem>
    <ExpenseItem 
       date = {props.item[2].date}
       title = {props.item[2].title}
       amount = {props.item[2].amount}>
    </ExpenseItem>
    <ExpenseItem 
       date = {props.item[3].date}
       title = {props.item[3].title}
       amount = {props.item[3].amount}>
    </ExpenseItem>
    <ExpenseItem 
       date = {props.item[4].date}
       title = {props.item[4].title}
       amount = {props.item[4].amount}>
    </ExpenseItem>
    </div>
    );
}

export default Expenses;