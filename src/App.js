import React, { useState } from "react";
import "./styles.css";
import AddExpense from "./components/AddExpense";
import AddExpense2 from "./components/AddExpense2";
/*fields for data:
1. date
2. payment type
3. expense description
4. amount
*/

const App = () => {
  return (
    <div>
      <div>
        <AddExpense />
      </div>
      Testing
    </div>
  );
};

export default App;
