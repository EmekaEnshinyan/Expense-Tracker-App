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

const ExepnseBtn = () => {
  //hook for button click
  const [data, addExpense] = useState(0);
  const handleClick = () => {
    addExpense(data);
  };

  return (
    <div>
      <button onClick={handleClick}>+5</button>
      <div>{data}</div>
    </div>
  );
};

export default ExepnseBtn;
