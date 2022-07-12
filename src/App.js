import React, { Component } from "react";
import Proxy from "./components/Proxy";

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
      <div className="container">
        <Proxy
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
      </div>
    );
  }
}

export default App;
