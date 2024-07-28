import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../middleware/api";

export const categoryFindAll = createAsyncThunk('/categories/find/all',
    async () => {
        try {
            const output = await API.get('/categories/find/all');
            return output.data;
        } catch (error) {
            console.log('error:- ', error);
        }
    }
)

const initialState = {
    findAll: [
        { category: 'all' }
    ]
}

export const categorySlice = createSlice({
    name: 'categorySlice',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(categoryFindAll.fulfilled, (state, action) => {
            state.findAll = action.payload.data;
        });
    }
})