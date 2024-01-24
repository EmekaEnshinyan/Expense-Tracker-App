import React from 'react'
import { useState } from 'react'
import './App.css'
import ExpenseSheet from './Components/ExpenseSheet'
import ListExpenses from './Components/ListExpenses'

function App() {

  const [exp, setExp] = useState([])

  const handleAddExpense = (newExp) =>
{
  setExp([...exp, newExp])
}

return(
  <div>
    <p>
      <ExpenseSheet onAddExpense={handleAddExpense} />
      <ListExpenses expenses={exp} />
    </p>
  </div>

    )
}

export default App;