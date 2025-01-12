import { configureStore } from "@reduxjs/toolkit";
import budgetReducer from "./budget/budgetSlice";

export const store = configureStore({
    reducer: {
        budgetReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
