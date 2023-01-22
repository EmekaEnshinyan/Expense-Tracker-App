import React from "react";
import { useState } from "react";

function Hooks() {
  const [task, setTask] = useState();
  return (
    <div>
      <div>Use Hook to assign a task</div>
      <div>Task Assigned: {task}</div>
      <div>
        <button onClick={() => setTask("clean")}>Clean</button>
      </div>
      <span>
        <button onClick={() => setTask("cook")}>Cook</button>
      </span>
    </div>
  );
}

export default Hooks;
