import React from "react";
import "../NewExpense/newExp.css";
import FormExp from "../NewExpense/FormExp.js";

function NewExp(props) {
  function onSavedData(expenseDataInput) {
    let expenseData = { ...expenseDataInput, id: Math.random().toString() };
    props.prpAddExpense(expenseData);
  }
  return (
    <div className="form">
      <FormExp prpSavedExpData={onSavedData} />
    </div>
  );
}

export default NewExp;
