import React from "react";

const ExpenseItem = (props) => {
  return (
    <li className="item">
      {props.name}
      <div>
        <span className="ph1">${props.cost}</span>
      </div>
    </li>
  );
};

export default ExpenseItem;
