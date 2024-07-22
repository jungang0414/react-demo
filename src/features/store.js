import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import incartSlice from "./slices/incartSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        incart: incartSlice,
    }
})

export default store;