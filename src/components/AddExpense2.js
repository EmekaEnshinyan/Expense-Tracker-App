import { useState } from "react";
import AddExpense2 from "./AddExpense2";

function AddExpense2({ setExpenses }) {
  const [expense, setExpense] = useState({
    paymentType: "",
    description: "",
    date: "",
    amount: "",
  });

  function handleChange(event) {
    setExpense((state) => {
      return { ...state, [event.target.name]: event.target.value };
    });
  }
}

export default AddExpense2;
