import { useState } from "react";

function Test() {
  const [num, setNum] = useState(0);
  const [type, setType] = useState("");
  function addOne() {
    setNum(num + 1);
  }
  function selectType() {
    setType((type = ["card", "cash", "crypto"]));
  }
  return (
    <div>
      <button onClick={addOne}>{num}</button>
      <div>
        <form onSubmit={selectType}>
          <select type="type">
            <option selected="selected" value={setType}>
              card
            </option>
            <option selected="selected" value={setType}>
              cash
            </option>
            <option selected="selected" value={setType}>
              crypto
            </option>
          </select>
          <input type="submit" value="Submit" onSubmit={selectType} />
        </form>
      </div>
      <div>{type}</div>
    </div>
  );
  // const [row, setRow] = useState();
  // const addTable = () => {
  //   setRow(cardType);
  //   row("card");
  //   const cardType = (e) => {
  //     return (
  //       <>
  //         <form onSubmit={addTable}>
  //           <div>
  //             <span>Type:</span>
  //             <select name="type" onChange={setRow}>
  //               <option className="type-box" value={row}>
  //                 Card
  //               </option>
  //               <option className="type-box" value={row}>
  //                 Cash
  //               </option>
  //             </select>
  //           </div>
  //         </form>
  //       </>
  //     );
  //   };
  // };
}

export default Test;
