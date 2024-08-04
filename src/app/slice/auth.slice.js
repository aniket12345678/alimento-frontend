import { API } from "../middleware/api";
import { toastMessage } from "../config/methods";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const authSignIn = createAsyncThunk('/user/auth/signin',
    async (data) => {
        try {
            const output = await API.post('/user/auth/signin', data);
            const type = output.data.code === 200 ? 'success' : 'error';
            if (output.status === 200) {
                toastMessage(type, output.data.message);
            }
            return output.data;
        } catch (error) {
            toastMessage('error', error);
            // throw new Error('some error occurred');
        }
    }
)

export const authSignUp = createAsyncThunk('/user/auth/signup',
    async (data) => {
        try {
            const output = await API.post('/user/auth/signup', data);
            const type = output.data.code === 200 ? 'success' : 'error';
            if (output.status === 200) {
                toastMessage(type, output.data.message);
            }
            return output.data;
        } catch (error) {
            toastMessage('error', error);
            // throw new Error('some error occurred');
        }
    }
)

export const authEmailVerify = createAsyncThunk('/user/auth/email-verify',
    async (data) => {
        try {
            const output = await API.post('/user/auth/email-verify', data);
            console.log('output:- ', output);
            return output.data;
        } catch (error) {
            toastMessage('error', error);
            // throw new Error('some error occurred');
        }
    }
)