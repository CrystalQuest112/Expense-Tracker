import ExDate from "./ExDate";

import "./exitems.css";

function ExItems(props) {
  return (
    <div className="expense-item">
      <ExDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount} </div>
      </div>
    </div>
  );
}

export default ExItems;
