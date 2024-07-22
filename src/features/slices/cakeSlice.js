import { createSlice } from "@reduxjs/toolkit";

//蛋糕的初始數量
const initialState = {
    cakeCount: 0
}

//蛋糕的reducer

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        //購買
        buyCake: (state, action) => {
            if (state.cakeCount < action.payload.qty) {
                alert("數量不足");
                return state;
            }
            if (action.payload.qty < 0) {
                alert("請輸入正確數量");
                return state;
            }
            state.cakeCount -= action.payload.qty;
            return state;
        },
        //新增
        addCake: (state, action) => {
            state.cakeCount += action.payload.qty;
            return state;
        }
    }
})

//輸出reducer
export const { buyCake, addCake } = cakeSlice.actions;
export default cakeSlice.reducer;