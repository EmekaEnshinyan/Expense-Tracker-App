import { useState } from "react";

function AddExpense2({ setExpenses }) {
  const [expense, setExpense] = useState({
    paymentType: "",
    description: "",
    date: "",
    amount: "",
  });
  //this is for output of add expense
  function handleChange(event) {
    setExpense((state) => {
      return { ...state, [event.target.name]: event.target.value };
    });
  }
  return (
    <div>
      <button onClick={handleChange(expense)}>Add Expense</button>
      {expense}
    </div>
  );
}

export default AddExpense2;
