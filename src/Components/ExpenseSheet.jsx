import React from "react";
import { useState } from "react";

function ExpenseSheet({onAddExpense}){
    const [item, setItem] = useState('')
    const [expense, setExpense] = useState('')


    const handleSubmitTask = (e) => {
        e.preventDefault()
        onAddExpense({item, expense})
        setItem('')
        setExpense('')


    }

    return(

        <div>
            <h3>Add Exense</h3>
            <form id="addForm" onSubmit={handleSubmitTask}>
          <label htmlFor="add" className="mr-2" >Item: </label>
          <input type="text" name="addItem" id="addItem" className="border border-blue-500" value={item} onChange={(e) => setItem(e.target.value)}/>
          <br />
          <input type="number" name="addExpense" id="addExpense" value={expense} onChange={(e) => setExpense(e.target.value)}></input>
          <button type="Submit">Add Task</button>
        </form>
        </div>
    )

}

export default ExpenseSheet;