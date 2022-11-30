import React from "react";
import ExpenseItem from "./ExpenseItem";

const Expenses = () => {
  const expenses = [
    { id: 1, name: "gas", cost: 25 },
    { id: 2, name: "food", cost: 25 },
  ];

  return (
    <ul className="list">
      {expenses.map((expense) => (
        <ExpenseItem
          id={expense.id}
          name={expense.name}
          cost={expense.cost}
        ></ExpenseItem>
      ))}
    </ul>
  );
};

export default Expenses;
