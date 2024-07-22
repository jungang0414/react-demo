import { createSlice } from "@reduxjs/toolkit";

//原始狀態 state
const initialState = {
    numCartItem: 20
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    // state & action 兩參數對應上放 state
    reducers: {
        increment: (state) => {
            state.numCartItem++;
            return state;
        },
        decrement: (state) => {
            state.numCartItem--;
            return state;
        },
    }
})


export const { increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;