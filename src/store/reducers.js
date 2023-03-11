// const counterInitialValue = 0;
// export const countReducer = (state = counterInitialValue, action) => {
//   switch (action.type) {
//     case "increment":
//       return state + 1;

//     case "decrement":
//       return state - 1;

//     default:
//       return 0;
//   }
// };

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      //   state.value += action.payload;
      state.value += Number(action.payload);
    },
    resetCounter: (state) => {
      state.value = 0;
    },
  },
});
export const { increment, decrement, incrementByAmount, resetCounter } =
  counterSlice.actions;

export const selectCount = (state) => state.counter.value;
export default counterSlice.reducer;
