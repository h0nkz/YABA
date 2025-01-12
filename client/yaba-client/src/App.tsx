import { useSelector } from "react-redux";
import { RootState } from "./state/store"
import './App.css'

function App() {
  const totalBudget = useSelector((state : RootState) => state.budgetReducer.totalBudget)

  return (
      <div>
      <p>Your total budget is {totalBudget}</p>
      </div>
  )
}

export default App
