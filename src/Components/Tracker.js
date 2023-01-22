//Arrow Functions
import React from "react";

function Tracker() {
  let number = 0;
  let add = () => {
    return number++;
  };
  let subtract = () => {
    return number--;
  };
  return (
    <div>
      <div>
        "My Workout"
        <button onClick={add}>Add</button>
      </div>
      <div>
        "My Workout"
        <button onClick={subtract}>Subtract</button>
      </div>
      <div>{number}</div>
    </div>
  );
}

export default Tracker;
