import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  initialState: 0,
  name: "counter",
  reducers: {
    increment: (state) => (state += 1),
    decrement: (state) => (state -= 1),
    // incrementByAmount: (state, action) => {
    //   state += action.payload;
    // },
  },
});

export const { decrement, increment, incrementByAmount } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
