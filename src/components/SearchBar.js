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
  const shouldDisplayButton = searchValue.length > 0;

  const showExpense = expense.map((e) => {
    return <span>{e} </span>;
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
    </div>
  );
};

export default SearchBar;
