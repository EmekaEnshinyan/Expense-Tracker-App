import React, { Component } from "react";
import Header from "./components/Header";
import ExpenseInput from "./components/ExpenseInput";
import ExpenseBtn from "./components/ExpenseBtn";
import ExpenseOutput from "./components/ExpenseOutput";
import Proxy from "./components/Proxy";

class App extends Component {
  render() {
    const btn = [{ one: "one", two: "two" }];
    return (
      <div className="App">
        <Header />
        <div>
          <br />
          <ExpenseInput />
        </div>
        <br />
        <div>
          <ExpenseBtn />
        </div>
        <div>
          <ExpenseOutput />
        </div>
        <hr />
        <div className="proxy-container">
          <Proxy characterData={btn} />
        </div>
      </div>
    );
  }
}

export default App;
