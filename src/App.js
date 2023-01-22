import "./App.css";
import React from "react";
import {
  ArrayMethodsTasks,
  ClassesBots,
  DestructuringBots,
  Tracker,
  Props,
  Hooks,
  UpdateHook,
} from "./Components/index";

function App() {
  return (
    <div className="App">
      TEST
      <div>
        <ArrayMethodsTasks />
      </div>
      <div>
        <Tracker />
      </div>
      <div>
        <ClassesBots />
      </div>
      <div>
        <DestructuringBots />
      </div>
      <div>
        <Props />
      </div>
      <div>
        <Hooks />
      </div>
      <div>
        <UpdateHook />
      </div>
    </div>
  );
}

export default App;
