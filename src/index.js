import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header";

function Page(){
  return (
    <div>
      <Header />
    </div>
  )
}

ReactDOM.render(<Page />, document.getElementById("root"))