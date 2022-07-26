import React, { useState } from "react";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const ExepnseBtn = (props) => {
  //hook for button click
  const [data, addExpense] = useState(0);
  const handleClick = () => {
    addExpense(data + props.incrementBy);
  };

  return (
    <div>
      <button onClick={handleClick}>+{props.incrementBy}</button>
      <div>{data}</div>
    </div>
  );
};

export default ExepnseBtn;
