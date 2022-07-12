import React, { Component } from "react";

const BtnHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};
//BEWARE: props is a one-way data flow. Thus, if we wanted to delete a row from the array, we wouldn't be able to
const BtnBody = (props) => {
  //dictates HOW the data is going to be passed
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
      </tr>
    );
  });
  //returns the pre-structured data
  return <tbody>{rows}</tbody>;
};

class Proxy extends Component {
  render() {
    //this passes in data to the browser and comprises the virtual DOM
    const { characterData } = this.props;
    return (
      <table>
        <BtnHeader />
        <BtnBody characterData={characterData} />
      </table>
    );
  }
}

export default Proxy;
