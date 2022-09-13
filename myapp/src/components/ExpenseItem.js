import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
//we merged two subcomponents here one ExpenseDate with ExpenseItem

function ExpenseItem(props){
    return(
        <div className="expense-item">
            <ExpenseDate date={props.date}/> {/*we passed 'props.date' which is an object into another subcomponent react which received it as props and process it accordingly and returns the result*/}
            <div className="expense-item__description"> 
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;