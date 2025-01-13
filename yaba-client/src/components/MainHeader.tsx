import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
export default function MainHeader() {
    const totalBudget = useSelector((state : RootState) => state.budgetReducer.totalBudget);
    const nonAllocatedBudget = useSelector((state : RootState) => state.budgetReducer.nonAllocatedMoney);
    const currency = useSelector((state : RootState) => state.budgetReducer.currency)

    const calculatePercentage = () => {
        return (nonAllocatedBudget / totalBudget) * 100;
    }

    const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[200],
            ...theme.applyStyles('dark', {
                backgroundColor: theme.palette.grey[800],
            }),
        },
        [`&.${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: '#1a90ff',
            ...theme.applyStyles('dark', {
                backgroundColor: '#308fe8',
            }),
        }
    }));
    
    return (
        <div>
            <h1>You have {nonAllocatedBudget} {currency} left to allocate</h1>
            <StyledLinearProgress variant="determinate" value={calculatePercentage()}/>
        </div>
    );
}