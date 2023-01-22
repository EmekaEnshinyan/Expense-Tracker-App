//Array Methods
import React from "react";

const list = ["eat", "sleep", "read"];
function ArrayMethodsTasks() {
  const yourList = list.map((item) => <p>{item}</p>);

  return (
    <>
      <>this is what you want</>
      <div>{yourList}</div>
    </>
  );
}

export default ArrayMethodsTasks;
