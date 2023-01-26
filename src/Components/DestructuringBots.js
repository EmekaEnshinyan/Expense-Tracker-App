import React from "react";

const cleanTasks = {
  one: "floor",
  two: "kitchen",
  three: "windows",
};

const DestructuringBots = ({ one, two, three }) => {
  return (
    <div>
      Destructuring: First clean {cleanTasks.one}, then {cleanTasks.two}, then{" "}
      {cleanTasks.three}
    </div>
  );
};

export default DestructuringBots;
