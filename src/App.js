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
      <div id="form-box">
        <form>
          <div>
            <span>Type:</span>
            <select name="type">
              <option value="card">Card</option>
              <option value="cash">Cash</option>
              <option value="cryptocoin">Cryptocoin</option>
              <option value="other">Other</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
