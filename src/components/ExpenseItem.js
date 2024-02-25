// import { useState } from 'react';
import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {

    return (

        <div className='expense-item'>

            <div className='expense-item_description'>
                <div className="expense-item_side">
                    <ExpenseDate date={props.date}/>
                    <h2>{props.title}</h2>
                </div>

                <div className="expense-item_price">
                    $ {props.price}

                </div>

            </div>
        </div>
    );
}

export default ExpenseItem;