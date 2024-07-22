import { createSlice } from "@reduxjs/toolkit";

//蛋糕的初始數量
const initialState = {
    coffeeCount: 10
}

//蛋糕的reducer

const coffeeSlice = createSlice({
    name: 'coffee',
    initialState,
    reducers: {
        //購買
        buyCoffee: (state, action) => {
            if (state.coffeeCount < action.payload.qty) {
                alert("數量不足");
                return state;
            }
            if (action.payload.qty < 0) {
                alert("請輸入正確數量");
                return state;
            }
            state.coffeeCount -= action.payload.qty;
            return state;
        },
        //新增
        addCoffee: (state, action) => {
            state.coffeeCount += action.payload.qty;
            return state;
        }
    }
})

//輸出reducer
export const { buyCoffee, addCoffee } = coffeeSlice.actions;
export default coffeeSlice.reducer;