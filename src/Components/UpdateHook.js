import React, { useState } from "react";

function UpdateHook() {
  const [version, setVersion] = useState({
    model: "one",
    ver: 0,
  });

  const updateVersion = () => {
    setVersion((previousVersion) => {
      return { ...previousVersion, ver: 2 };
    });
  };
  return (
    <div>
      <input>{}</input>
      <button onClick={updateVersion}>Update Hook</button>
      <div></div>
    </div>
  );
}

export default UpdateHook;
