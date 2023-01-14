import React from "react";
import "./FilterExp.css";

function FilterExp(props) {
  function selectNewYear(event) {
    props.selectYear(event.target.value);
  }
  return (
    <div className="card">
      <div className="expenses-filter">
        <div className="expenses-filter__control">
          <label>Filter by year</label>
          <label>YEAR</label>
          <select onChange={selectNewYear} value={props.adjust}>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterExp;
