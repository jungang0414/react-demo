import { createSlice } from "@reduxjs/toolkit";

//蛋糕的初始數量
const initialState = {
    teaName: '茶',
    teaCount: 10
}

//蛋糕的reducer

const teaSlice = createSlice({
    name: 'tea',
    initialState,
    reducers: {
        //購買
        buyTea: (state, action) => {
            if (state.teaCount < action.payload.qty) {
                alert("數量不足");
                return state;
            }
            if (action.payload.qty < 0) {
                alert("請輸入正確數量");
                return state;
            }
            state.teaCount -= action.payload.qty;
            return state;
        },
        //新增
        addTea: (state, action) => {
            state.teaCount += action.payload.qty;
            return state;
        }
    }
})

//輸出reducer
export const { buyTea, addTea } = teaSlice.actions;
export default teaSlice.reducer;