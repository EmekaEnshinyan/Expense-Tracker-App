import React from "react";


const ListExpenses = ({expenses}) => {



    return(
        <div>
        <h3>Item: Expense</h3>
            <ol>
                {expenses.map((item, index) => ( <li key={index}>{item.item}: ${item.expense}</li>))}
            </ol>
        </div>
    )
}


export default ListExpenses;