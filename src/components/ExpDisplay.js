import { useState } from "react";
import ExItems from "./ExItems";
import FilterExp from "./FilterExp.js";

export default function ExpDisplay(props) {
  let [yearFilter, setYearFilter] = useState("2020");

  function changeYear(selectYear) {
    setYearFilter(selectYear);
  }

  return (
    <div className="card">
      <FilterExp selectYear={changeYear} adjust={yearFilter} />
      {props.expenses.map((expense) => (
        <ExItems
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
        />
      ))}{" "}
    </div>
  );
}
