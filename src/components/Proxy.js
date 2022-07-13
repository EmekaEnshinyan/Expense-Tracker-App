import React from "react";

const BtnHeader = () => {
  return (
    <thead>
      <tr>
        <th>Date</th>
        <th>Payment</th>
        <th>Description</th>
        <th>Amount</th>
      </tr>
    </thead>
  );
};
//BEWARE: props is a one-way data flow. Thus, if we wanted to delete a row from the array,
const BtnBody = (props) => {
  //dictates HOW the data is going to be passed
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.Date}</td>
        <td>{row.Payment}</td>
        <td>{row.Description}</td>
        <td>{row.Amount}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>
            Delete Character
          </button>
        </td>
      </tr>
    );
  });
  //returns the pre-structured data
  return <tbody>{rows}</tbody>;
};

const Proxy = (props) => {
  const { characterData, removeCharacter } = props;

  return (
    <table>
      <BtnHeader />
      <BtnBody
        characterData={characterData}
        removeCharacter={removeCharacter}
      />
    </table>
  );
};
export default Proxy;
