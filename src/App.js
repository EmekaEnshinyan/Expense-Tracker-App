import React from "react";
import ExepnseBtn from "./components/ExpenseBtn";

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
      <div>
        <h1>Emeka's Expense Tracker</h1>
      </div>
      <div>
        <form method="post">
          Date: <input type="date" />
          <br />
          Payment Type:
          <select>
            <option selected="selected" value="debit">
              debit
            </option>
            <option selected="selected" value="cash">
              cash
            </option>
          </select>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div>
        <ExepnseBtn />
      </div>
    </div>
  );
}
