import React from "react";
import ExpenseItem from "./ExpenseItem";
import './Expense.css'
const Expense = (props) => {
    return (
        <div className="expense-container">

            {
                props.expenes.map(
                    expense => (
                        <ExpenseItem
                        date={expense.date}
                        title={expense.title}
                        price={expense.price}
                    /> 
                    )
                )
            }
           
        </div>
    );
}

export default Expense;