import { combineReducers, createSlice } from "@reduxjs/toolkit";
import { categoryFindAll } from "../slice/category.slice";
import { authSignIn } from "../slice/auth.slice";

const categorySlice = createSlice({
    name: 'categorySlice',
    initialState: {
        findAll: [
            { category: 'all' }
        ]
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(categoryFindAll.fulfilled, (state, action) => {
            state.findAll = action.payload.data;
        });
    }
});

const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        signin: {
            token: null,
            user_id: null,
            isLoggedIn: false
        }
    },
    reducers: {
        logout: (state) => {
            state.signin.token = null;
            state.signin.user_id = null;
            state.signin.isLoggedIn = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(authSignIn.fulfilled, (state, action) => {
            console.log('action.payload:- ', action.payload);
            // state.findAll = action.payload.data;
        });
    }
});

export const rootReducer = combineReducers({
    categorySlice: categorySlice.reducer,
    authSlice: authSlice.reducer
});