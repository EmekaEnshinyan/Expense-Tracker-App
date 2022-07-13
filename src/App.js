import React from "react";
import Proxy from "./components/Proxy";
import ExpenseBtn from "./components/ExpenseBtn";
import data from "./data";
/*fields for data:
1. date
2. payment type
3. expense description
4. amount
*/

export default function App() {
  const item = data.map((item) => {
    return (
      <div>
        <div>
          <Proxy
            date={item.date}
            payment={item.payment}
            description={item.description}
            amount={item.amount}
          />
        </div>
        <div>
          <ExpenseBtn />
        </div>
      </div>
    );
  });
  //const proxyObj = [{ date: "1/1/1", payment: "debit", description: "tea" }];
}
