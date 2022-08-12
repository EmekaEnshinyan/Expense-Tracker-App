// make sure useeffect renders the site so that expense button transfers the data to list
import React, { useState } from "react";

const AddExpense = () => {
  const [expenses, setExpenses] = useState([]);
  const [addData, setAddData] = useState({
    type: "",
    text: "",
    date: "",
    number: "",
  });

  const handleClick = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("type");
    const fieldValue = event.target.value;

    const newFormData = { ...addData };
    newFormData[fieldName] = fieldValue;

    setAddData(newFormData);
  };

  const handleClickSubmit = (event) => {
    event.preventDefault();
    const newExpense = {
      type: "",
      text: "",
      date: "",
      number: "",
    };
    setExpenses([...expenses, newExpense]);
  };

  const btnSubmit = (event) => {
    event.preventDefault();

    const newExpense = event.addData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.type}</td>
          <td>{row.text}</td>
          <td>{row.date}</td>
          <td>{row.number}</td>
        </tr>
      );
    });
  };
  // const newExpense = {
  //   type: addData.type,
  //   text: addData.text,
  //   date: addData.date,
  //   number: addData.number,
  // };

  return (
    <div>
      <h1>Emeka's Expense Tracker</h1>
      <h2>Add A New Item</h2>
      <div id="form-container">
        <form onSubmit={handleClickSubmit}>
          <div>
            <span>Type:</span>
            <select name="type" onChange={handleClick}>
              <option className="type-box" value="card">
                Card
              </option>
              <option className="type-box" value="cash">
                Cash
              </option>
              <option className="type-box" value="cryptocoin">
                Cryptocoin
              </option>
              <option className="type-box" value="other">
                Other
              </option>
            </select>
          </div>
          <div className="name-box">
            <span>Name:</span>
            <input
              type="text"
              name="name"
              placeholder="What did you purchase?"
              onChange={handleClick}
            ></input>
          </div>
          <div className="date-box">
            <span>Date:</span>
            <input type="date" name="date" onChange={handleClick}></input>
          </div>
          <div className="amount-box">
            <span>Amount:</span>
            <input
              type="number"
              name="amount"
              placeholder="Enter amount here"
              onChange={handleClick}
            ></input>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th className="expense-box">Payment Type</th>
                <th className="expense-box">Item</th>
                <th className="expense-box">Date</th>
                <th className="expense-box">Amount</th>
              </tr>
            </thead>
          </table>
          <input
            type="submit"
            value="Add Expense"
            onSubmit={handleClickSubmit}
          ></input>
        </form>
      </div>
    </div>
  );
};

export default AddExpense;
