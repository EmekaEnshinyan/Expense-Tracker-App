import React from "react";
import Proxy from "./components/Proxy";
import ExpenseBtn from "./components/ExpenseBtn";
/*fields for data:
1. date
2. payment type
3. expense description
4. amount
*/

//it is here where you can hardcode the data
export default function App() {
  return (
    <div>
      <h1>Emeka's Expense Tracker</h1>
      <div>
        <Proxy date="7/13/22" payment="debit" description="tea" amount="15" />
      </div>
      <div>
        <hr />
        <ExpenseBtn />
      </div>
    </div>
  );
}
