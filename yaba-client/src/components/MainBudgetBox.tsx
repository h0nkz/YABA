import Box from "@mui/material/Box";
import MainHeader from "./MainHeader";
import { List, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import CategoryListItem from "./CategoryListItem";
import { Category } from "../state/budget/budgetSlice";
import { InsertEmoticon } from "@mui/icons-material";

// const categories = useSelector((state : RootState) => state.budgetReducer.categories)


const categories : Array<Category> = [];

categories.push({name: "Horses", allocation: 50, spent: 20});
categories.push({name: "Cheese", allocation: 70, spent: 30});

export default function MainBudgetBox () {
    return (
        <Box>
            <Stack spacing={5}>
                <MainHeader/>
                <Stack spacing={3}>
                    {categories.map((item, index) => (
                        <CategoryListItem category={item} key={index}/>
                    ))}
                </Stack>
            </Stack>
            
        </Box>
    );
}