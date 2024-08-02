import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: 'root',
    storage
}

const mainReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: mainReducer,
    devTools: true,
    middleware: (getMiddleware) => getMiddleware({
        serializableCheck: false
    })
});

export const persistor = persistStore(store);