//NOTE: App.js contains the data for some component and the component passes the data through whatever placeholder coded in the comp. ex: props

import React from "react";

export default function Proxy(props) {
  return (
    <div className="proxy-container">
      <h1>{props.date}</h1>
      <h2>{props.payment}</h2>
      <h3>{props.description}</h3>
    </div>
  );
}
//object destructuring version

/*
export default function Proxy({date, payment, description}){
  return (
    <div className="misc">
      <h1>{date}</h1>
      <h2>{payment}</h2>
      <h3>{description}</h3>
    </div>
  )
}
*/
