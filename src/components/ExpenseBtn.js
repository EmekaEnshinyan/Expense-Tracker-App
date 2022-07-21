import React, { useState } from "react";

const ExpenseBtn = () => {
  //hook
  const [changeNum, setNum] = (useState = 0);

  const handleClick = () => {
    setNum(changeNum + 5);
    return (
      <div>
        <button onClick={handleClick}>+5</button>
        <div>{changeNum}</div>
      </div>
    );
  };
};
export default ExpenseBtn;
