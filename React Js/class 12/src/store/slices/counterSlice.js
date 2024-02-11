import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counterValue: 101,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addCounter: (state, action) => {
      console.log("state", state.counterValue);
      console.log("action", action);
      state.counterValue = ++state.counterValue;
    },
  },
});

const { actions, reducer } = counterSlice;

export const { addCounter } = actions;

export default reducer;
