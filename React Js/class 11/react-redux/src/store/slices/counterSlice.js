import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    addCounter: (state, payload) => {
      console.log("add counter call", state.counter);
      state.counter = ++state.counter;
    },
    minusCounter: (state, payload) => {
      state.counter = state.counter > 0 ? --state.counter : 0;
    },
  },
});

const { actions, reducer } = counterSlice;

export const { addCounter, minusCounter } = actions;

export default reducer;
