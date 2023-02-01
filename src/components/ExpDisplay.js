import { useState } from "react";
import ExItems from "./ExItems";
import FilterExp from "./FilterExp.js";
import ExpChart from "./NewExpense/ExpChart";

export default function ExpDisplay(props) {
  let [yearFilter, setYearFilter] = useState("2020");

  function changeYear(selectYear) {
    setYearFilter(selectYear);
  }

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === yearFilter;
  });
  return (
    <div className="card">
      <FilterExp selectYear={changeYear} adjust={yearFilter} />
      <ExpChart expenses={filteredExpenses} />
      {filteredExpenses.length === 0 ? (
        <p>None</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExItems
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
          />
        ))
      )}{" "}
    </div>
  );
}
