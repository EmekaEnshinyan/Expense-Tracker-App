import React, { Component } from "react";
import ExpenseBtn from "./components/ExpenseBtn";
import Proxy from "./components/Proxy";

class App extends Component {
  render() {
    const characters = [
      {
        name: "Charlie",
        job: "Janitor",
      },
      {
        name: "Mac",
        job: "Bouncer",
      },
      {
        name: "Dee",
        job: "Aspring actress",
      },
      {
        name: "Dennis",
        job: "Bartender",
      },
    ];
    return (
      <div className="container">
        <Proxy characterData={characters} />
        <div>
          <ExpenseBtn />
        </div>
      </div>
    );
  }
}

export default App;
