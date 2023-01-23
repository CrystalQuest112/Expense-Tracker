import React, { useState } from "react";
import ExDate from "./ExDate";
import "./exitems.css";

function ExItems(props) {
  let [title, setTitle] = useState(props.title);

  function clickHandler() {
    setTitle(title);
  }

  return (
    <div className="expense-item">
      <ExDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <button onClick={clickHandler} className="expense-item__price">
          {" "}
          ${props.amount}
        </button>
      </div>
    </div>
  );
}

export default ExItems;
