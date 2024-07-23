import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    inCart: []
};

const incartSlice = createSlice({
    name: "incart",
    initialState,
    reducers: {
        addIncart: (state, action) => {
            const { name, count, price } = action.payload;
            const existingProduct = state.inCart.find((product) => product.name === name);
            if (existingProduct) {
                existingProduct.count = Number(existingProduct.count) + Number(count);
            } else {
                state.inCart.push({ name: name, count: count, price: price });
            }
        },
        delectIncart: (state, action) => {
            const { name } = action.payload;
            state.inCart = state.inCart.filter((product) => product.name !== name);
        },
        clearInCart: (state) => {
            state.inCart = [];

        }
    }
});

export const { addIncart, delectIncart, clearInCart } = incartSlice.actions;
export default incartSlice.reducer;
