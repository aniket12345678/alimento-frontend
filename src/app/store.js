import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { categorySlice } from "./slice/category.slice";

const rootReducer = combineReducers({
    categorySlice: categorySlice.reducer
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: true
})