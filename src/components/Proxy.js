//NOTE: App.js contains the data for some component and the component passes the data through whatever placeholder coded in the comp. ex: props

import React from "react";
import data from "../data";
//object destructuring version

export default function Proxy({ date, payment, description, amount }) {
  const tableElements = data.map((item) => {
    return (
      <Proxy
        date={item.date}
        payment={item.payment}
        description={item.description}
        amount={item.amount}
      />
    );
  });
  return (
    <div className="proxy-container">
      <table>{tableElements}</table>
    </div>
  );
}
