import React from "react";
import Proxy from "./components/Proxy";
import ExpenseBtn from "./components/ExpenseBtn";
/*fields for data:
1. date
2. payment type
3. expense description
4. amount
*/

export default function App() {
  const state = { items: [] };
  //const proxyObj = [{ date: "1/1/1", payment: "debit", description: "tea" }];

  return (
    <div>
      <div>
        <Proxy date="1/1/1" payment="debit" description="tea" />
      </div>
      <div>
        <ExpenseBtn />
      </div>
    </div>
  );
}
