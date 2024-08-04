import { combineReducers, createSlice } from "@reduxjs/toolkit";
import { categoryFindAll } from "../slice/category.slice";
import { authSignIn } from "../slice/auth.slice";

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
            if (action.payload.code === 200) {
                state.signin.isLoggedIn = true;
                state.signin.user_id = action.payload.user_id;
                state.signin.token = action.payload.auth_token;
            }
        });
    }
});

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

export const { logout } = authSlice.actions;

export const rootReducer = combineReducers({
    authSlice: authSlice.reducer,
    categorySlice: categorySlice.reducer
});