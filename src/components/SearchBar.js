import React, { useState } from "react";

const expense = ["debit", "tea", "7/28/2022", "$50"];

const SearchBar = () => {
  //structure of hook: adds local state
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClearButton = () => {
    setSearchValue(shouldDisplayButton);
  };
  const shouldDisplayButton = "";

  const showExpense = expense.map((e) => {
    return <span key={e}>{e} </span>;
  });
  //when making a list with .map(), make sure to include a key property to tag
  const showExpenseAsList = expense.map((e) => {
    return <li key={e}>{e} </li>;
  });
  return (
    <div>
      <input type="text" value={searchValue} onChange={handleInputChange} />
      {/*short circuting/conditional rendering: if operand on left of && is true, then render what is on right, otherwise don't */}
      {shouldDisplayButton && (
        <button onClick={handleClearButton}>Clear</button>
      )}
      <br />
      {showExpense}
      <br />
      <ul>{showExpenseAsList}</ul>
    </div>
  );
};

export default SearchBar;
