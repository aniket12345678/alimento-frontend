import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../middleware/api";

export const authSignIn = createAsyncThunk('/user/auth/signin',
    async () => {
        try {
            const output = await API.post('/user/auth/signin');
            return output.data;
        } catch (error) {
            console.log('error:- ', error);
        }
    }
)

export const authSignUp = createAsyncThunk('/user/auth/signup',
    async () => {
        try {
            const output = await API.post('/user/auth/signup');
            return output.data;
        } catch (error) {
            console.log('error:- ', error);
        }
    }
)