import React from "react";
import ExpenseBtn from "./components/ExpenseBtn";

/*fields for data:
1. date
2. payment type
3. expense description
4. amount
*/
//app.js is the wrapper where all jsx is put in
//it is here where you can hardcode the data
export default function App() {
  return (
    <div>
      <h1>Emeka's Expense Tracker</h1>
      <div>
        <hr />
        <ExpenseBtn />
      </div>
    </div>
  );
}
