
import React from "react";
import { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    let [title, setTitle] = useState('');
    let [Amount, setAmount] = useState('');
    let [date, setDate] = useState('');

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }

    const expenseChanger = (event) => {
        event.preventDefault();

        const expenseData = {
            enterTilte : title,
            enterAmount : Amount,
            enterDate : date,
        }

        props.onExpenseData(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
        // console.log(expenseData);

    }
    return (
        <div className="expense-form">
            <form onSubmit={expenseChanger}>
                <div className="expense-input-form">
                    <div className="expense-input">
                        <label>Title</label>
                        <input type="text" value={title} onChange={titleChangeHandler}></input>
                    </div>
                    <div className="expense-input">
                        <label>Amount</label>
                        <input type="Number" value={Amount} onChange={amountChangeHandler} min={1}></input>
                    </div>
                    <div className="expense-input">
                        <label>Date</label>
                        <input type="date" value={date} onChange={dateChangeHandler}></input>
                    </div>
                </div>
                <div className="form-btn">
                    <button className="expense-btn">Add Expense</button>
                </div>
            </form>
        </div>
    );
}

export default ExpenseForm;