import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../middleware/api";
import { authToken } from "../config/methods";

export const itemFindAll = createAsyncThunk('/items/find/all',
    async (data, { getState }) => {
        try {
            const response = await API.post('/items/find/all', data, authToken(getState));
            return response.data;
        } catch (error) {
            console.log('itemFindAll -> slice -> error');
            // toastMessage('error', 'We are facing some technical issue');
            const errorObj = { ...error }
            throw errorObj;
        }
    }
);