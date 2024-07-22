import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    inCart: []
};

const incartSlice = createSlice({
    name: "incart",
    initialState: initialState,
    reducers: {
        addIncart: (state, action) => {
            const { name, price, count } = action.payload;
            const existingProduct = state.inCart.find((product) => product.name === name);
            if (existingProduct) {
                existingProduct.count++;
            } else {
                state.inCart.push({ name: name, count: count, price: price });
            }
        },
        delectIncart: (state, action) => {
            const { name } = action.payload;
            state.inCart = state.inCart.filter((product) => product.name !== name);
        }
    }
});

export const { addIncart, delectIncart } = incartSlice.actions;
export default incartSlice.reducer;
