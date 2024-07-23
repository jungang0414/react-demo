import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from "./slices/cartSlice";
import incartSlice from "./slices/incartSlice";
//商品的reducer
import cakeSlice from "./slices/cakeSlice";
import teaSlice from "./slices/teaSlice";
import coffeeSlice from "./slices/coffeeSlice";
//狀態保存
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: 'root',
    storage,
};

const persistedCakeReducer = persistReducer(persistConfig, cakeSlice);
const persistedTeaReducer = persistReducer(persistConfig, teaSlice);
const persistedCoffeeReducer = persistReducer(persistConfig, coffeeSlice);
const persistedInCartReducer = persistReducer(persistConfig, incartSlice);
//建立store
const store = configureStore({
    reducer: {
        // cart: cartSlice,
        incart: persistedInCartReducer,
        cake: persistedCakeReducer,
        tea: persistedTeaReducer,
        coffee: persistedCoffeeReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store);
export default store;