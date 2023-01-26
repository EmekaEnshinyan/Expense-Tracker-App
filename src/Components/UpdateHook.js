import React, { useState } from "react";

function UpdateHook() {
  const [item, setItem] = useState({ name: "", id: 0 });
  const [data, setData] = useState([]);

  //get input
  const handleInput = ({ name, value }) => {
    setItem({ ...item, [name]: value, id: data.length });
  };

  //new item obj to data
  const submit = () => {
    setData({ ...data, item });
  };

  return (
    <div>
      <input value={item.name} onChange={(e) => handleInput(e.target.value)} />
      <button onClick={() => submit()}>Add New</button>
    </div>
  );
}

// function useInput({ type /*...*/ }) {
//   const [value, setValue] = useState("");
//   const input = (
//     <input
//       value={value}
//       onChange={(e) => setValue(e.target.value)}
//       type={type}
//     />
//   );
//   const [username, userInput] = useInput({ type: "text" });
//   const [password, passwordInput] = useInput({ type: "text" });
//   return [value, input];
// }

export default UpdateHook;
