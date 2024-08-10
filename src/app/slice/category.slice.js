import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../middleware/api";
import { authToken } from "../config/methods";

export const categoryFindAll = createAsyncThunk('/categories/find/all',
    async (_, { getState }) => {
        try {
            const output = await API.get('/categories/find/all', authToken(getState));
            return output.data;
        } catch (error) {
            console.log('error:- ', error);
        }
    }
)