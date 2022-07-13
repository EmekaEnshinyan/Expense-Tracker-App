import React, { Component } from "react";
import ExpenseBtn from "./components/ExpenseBtn";
import ExpenseInput from "./components/ExpenseInput";

/*fields for data:
1. date
2. payment type
3. expense description
4. amount
*/

class App extends Component {
  state = {
    characters: [],
  };
  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };
  render() {
    const { characters } = this.state;
    return (
      <div className="container-btn">
        <ExpenseBtn
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <div className="container-input">
          <ExpenseInput
            characterData={characterData}
            removeCharacter={this.removeCharacter}
          />
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
