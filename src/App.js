import React from "react";
import SearchBar from "./components/SearchBar";
/*fields for data:
1. date
2. payment type
3. expense description
4. amount
*/

const App = () => {
  return (
    <div>
      <h1>Emeka's Expense Tracker</h1>
      <h2>Add A New Item</h2>
      <div>
        <SearchBar />
      </div>
      <div id="form-container">
        <form>
          <div className="type-box">
            <span>Type:</span>
            <select name="type">
              <option value="card">Card</option>
              <option value="cash">Cash</option>
              <option value="cryptocoin">Cryptocoin</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="name-box">
            <span>Name:</span>
            <input
              type="text"
              name="name"
              placeholder="Enter what you purchased here"
            ></input>
          </div>
          <div className="date-box">
            <span>Date:</span>
            <input type="date" name="date"></input>
          </div>
          <div className="amount-box">
            <span>Amount:</span>
            <input
              type="number"
              name="amount"
              placeholder="Enter amount here"
            ></input>
          </div>
        </form>
        <div className="expense-button">
          <span>Add New Expense</span>
        </div>
        <div className="table">
          <table>
            <tr>
              <th className="expense-box">Payment Type</th>
              <th className="expense-box">Item</th>
              <th className="expense-box">Date</th>
              <th className="expense-box">Amount</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
