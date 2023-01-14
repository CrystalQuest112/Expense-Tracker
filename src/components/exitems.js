import React, { useState } from "react";
import ExDate from "./ExDate";
import "./exitems.css";

function ExItems(props) {
  let [title, setTitle] = useState(props.title);

  function clickHandler() {
    setTitle("MARU");
    console.log(title);
  }

  return (
    <div className="expense-item">
      <ExDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount} </div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </div>
  );
}

export default ExItems;
