import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BudgetState {
    totalBudget : number,
    nonAllocatedMoney : number,
    categories : Category[],
    currency : string
};

export interface Category {
    name : string
    allocation : number,
    spent: number,
};

interface CategoryUpdate {
    name : string,
    type : CategoryUpdateType,
    value : number
}

enum CategoryUpdateType {
    ALLOCATION,
    SPENDING
}

const initialState : BudgetState = {
    totalBudget: 0,
    nonAllocatedMoney: 0,
    categories: [],
    currency: "SEK"
};

const budgetSlice = createSlice({
    name: "budget",
    initialState,
    reducers: {
        setBudget: (state, action) => {
            state.totalBudget = action.payload;
        },
        addCategory: (state, action : PayloadAction<string>) => {
            const category : Category = {
                name: action.payload,
                allocation : 0,
                spent: 0,
            }
            state.categories.concat(category)
        },
        allocateMoney: (state, action : PayloadAction<CategoryUpdate>) => {
                const categoryIndex = state.categories.findIndex( x => x.name == action.payload.name);
                state.categories[categoryIndex].allocation = action.payload.value;
        },
        spendMoney: (state, action : PayloadAction<CategoryUpdate>) =>
        {
            const categoryIndex = state.categories.findIndex( x => x.name == action.payload.name);
            state.categories[categoryIndex].spent += action.payload.value;
        }

    },
});

export default budgetSlice.reducer;