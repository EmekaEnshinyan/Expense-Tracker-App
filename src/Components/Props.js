import React from "react";

function Test(props) {
  return (
    <div>
      testing prop {props.first} and prop {props.second}
    </div>
  );
}

function Props() {
  return (
    <div>
      <Test first="one" second="two" />
    </div>
  );
}

export default Props;
