import "./App.css";
import ExpDisplay from "./components/ExpDisplay";
import NewExp from "./components/NewExpense/newExp";
import React, { useState } from "react";

const DM_EXPENSES = [
  {
    id: "e1",
    title: "Groceries",
    amount: 407.99,
    date: new Date(2019, 7, 14),
  },
  {
    id: "e2",
    title: "Fitness Equipment",
    amount: 389.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 194.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Furniture",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DM_EXPENSES);

  function addExpense(expense) {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <h1
        style={{
          color: "whitesmoke",
          backgroundColor: "black",
          textAlign: "center",
          margin: -1,
          paddingBottom: 10,
        }}
      >
        Expense Tracker
      </h1>
      <div>
        <NewExp prpAddExpense={addExpense} />
        <ExpDisplay expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
