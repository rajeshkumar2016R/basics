import React, {useState} from 'react';
import Expense from './components/Expense';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import './App.css';

function App(props) {
  let expenes = [
    {
      id: "item-1",
      date: new Date(2021, 5, 24),
      title: "School Fee",
      price: 350
    },
    {
      id: "item-2",
      date: new Date(2022, 3, 13),
      title: "Hostel Fee",
      price: 1250
    },
    {
      id: "item-3",
      date: new Date(2020, 12, 9),
      title: "Hotel Fee",
      price: 250
    },
    {
      id: "item-4",
      date: new Date(2023, 1, 10),
      title: "Recharge",
      price: 319
    }
  ];

  const [expenesextract, setExpenses] = useState(expenes);

  const newExpenseData = (enteredExpenseData) => {

    const ExpenseEnterData = {
      ...enteredExpenseData,
      id : Math.random().toString(),
    }

    const updateExpense = [enteredExpenseData, ...expenesextract];
    
    
    setExpenses(updateExpense);

  }
  return (

    <div className="App">
      <div className='heading'>
        <h1>Expense item</h1>
      </div>
      <ExpenseForm onExpenseData={newExpenseData}/>
      <Expense expenes={expenes}/>
    </div>
  );
}

export default App;
