import React from "react";
import ExepnseBtn from "./components/ExpenseBtn";
import AddList from "./components/AddList";

/*fields for data:
1. date
2. payment type
3. expense description
4. amount
*/
//app.js is the wrapper where all jsx is put in
//it is here where you can hardcode the data
const [items, setItems] = useState([
  { date: "7/23/22", payment: "tea", amount: 50, isPaid: true },
]);

const App = () => {
  return (
    <div>
      <div>
        <h1>Emeka's Expense Tracker</h1>
      </div>
      <div>
        <form method="post">
          Date: <input type="date" />
          <br />
          Payment Type:
          <select>
            <option selected="selected" value="debit">
              debit
            </option>
            <option selected="selected" value="cash">
              cash
            </option>
          </select>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div>
        <ExepnseBtn incrementBy={5} />
        <ExepnseBtn incrementBy={10} />
      </div>
      <div className="item-list">
        {items.map((item, index) => (
          <div className="item-container">
            <div className="item-name">
              {item.isPaid ? (
                <>
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span className="completed">{item.itemName}</span>
                </>
              ) : (
                <>
                  Item
                  <span>{item.itemName}</span>
                </>
              )}
            </div>
            <div className="quantity">
              <button>Button 1</button>
              <span> {item.quantity} </span>
              <button>Button 2</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
