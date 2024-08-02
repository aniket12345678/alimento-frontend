import { createAsyncThunk } from "@reduxjs/toolkit";
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