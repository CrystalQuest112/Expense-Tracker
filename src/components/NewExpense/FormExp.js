import React, { useState } from "react";
import "../NewExpense/FormExp.css";

function FormExp(props) {
  let [newTitle, setNewTitle] = useState("");
  let [newDate, setNewDate] = useState("");
  let [newAmount, setNewAmount] = useState("");

  function titleHandler(event) {
    setNewTitle(event.target.value);
  }

  function amountHandler(event) {
    setNewAmount(event.target.value);
  }

  function dateHandler(event) {
    setNewDate(event.target.value);
  }

  function formHandler(event) {
    event.preventDefault();

    let expenseData = {
      title: newTitle,
      amount: newAmount,
      date: new Date(newDate),
    };
    props.prpSavedExpData(expenseData);
    setNewAmount("");
    setNewDate("");
    setNewTitle("");
  }

  return (
    <form onSubmit={formHandler} className="card">
      <div className="new-expense__control">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="input" onChange={titleHandler} value={newTitle} />
          {/* how to  store data and reset the form: use value see ln:40 and see line;30-32 */}
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountHandler}
            value={newAmount}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2019-01-01"
            onChange={dateHandler}
            value={newDate}
          ></input>
        </div>
        <div className="new-expense__actions"></div>
        <button input type="submit">
          {" "}
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default FormExp;
