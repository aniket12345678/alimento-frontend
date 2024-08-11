import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../middleware/api";
import { authToken } from "../config/methods";

export const orderCreatePaymentIntent = createAsyncThunk('/orders/create-payment-intent',
    async (data, { getState }) => {
        try {
            const output = await API.post('/orders/create-payment-intent', data, authToken(getState));
            return output.data;
        } catch (error) {
            console.log('error:- ', error);
        }
    }
)