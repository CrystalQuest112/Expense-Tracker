import React, { useState } from "react";
import ExItems from "./ExItems";
import FilterExp from "./FilterExp.js";

function ExpDisplay(props) {
  let [yearFilter, setYearFilter] = useState("2020");

  function changeYear(selectYear) {
    setYearFilter(selectYear);
  }

  return (
    <div className="card">
      <FilterExp selectYear={changeYear} adjust={yearFilter} />
      <ExItems
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExItems
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExItems
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExItems
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      />
    </div>
  );
}

export default ExpDisplay;
