import React from "react";
import "../NewExpense/newExp.css";
import FormExp from "../NewExpense/FormExp.js";
import { useState } from "react";

function NewExp(props) {
  const [ifAddingExp, setIfAddExp] = useState("");

  function onSavedData(expenseDataInput) {
    let expenseData = { ...expenseDataInput, id: Math.random().toString() };
    props.prpAddExpense(expenseData);
    setIfAddExp(false);
  }

  function addingExp() {
    setIfAddExp(true);
  }

  function notAddingExp() {
    setIfAddExp(false);
  }

  return (
    <div className="form">
      {!ifAddingExp && <button onClick={addingExp}>Add New Expense</button>}
      {ifAddingExp && (
        <FormExp prpSavedExpData={onSavedData} onCancel={notAddingExp} />
      )}
    </div>
  );
}

export default NewExp;
