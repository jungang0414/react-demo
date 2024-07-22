import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import incartSlice from "./slices/incartSlice";
//商品的reducer
import cakeSlice from "./slices/cakeSlice";
import teaSlice from "./slices/teaSlice";
import coffeeSlice from "./slices/coffeeSlice";
//狀態保存
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
};

const persistedCakeReducer = persistReducer(persistConfig, cakeSlice);
//建立store
const store = configureStore({
    reducer: {
        cart: cartSlice,
        incart: incartSlice,
        cake: persistedCakeReducer,
        tea: teaSlice,
        coffee: coffeeSlice
    }
})

export const persistor = persistStore(store);
export default store;