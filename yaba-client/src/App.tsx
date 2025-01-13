import { useSelector } from "react-redux";
import { RootState } from "./state/store";
import TemporaryDrawer from "./components/Drawer";
import MainHeader from "./components/MainHeader";
import './App.css';
import Container from "@mui/material/Container";
import MainBudgetBox from "./components/MainBudgetBox";

function App() {
  const totalBudget = useSelector((state : RootState) => state.budgetReducer.totalBudget)

  return (
    <Container sx={{ display: 'flex' }}>
      <MainBudgetBox/>
    </Container>
  );
}

export default App
