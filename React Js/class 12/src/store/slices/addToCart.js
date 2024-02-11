import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addToCart: [],
  isLoading: false,
  isError: false,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      if (state.addToCart.length === 0) {
        state.addToCart.push(action.payload);
      } else {
        const indexNum = state.addToCart.findIndex((p) => {
          if (p.id === action.payload.id) {
            return true;
          }
        });
        if (indexNum == -1) {
          state.addToCart.push(action.payload);
        }
      }
    },
    removeAddToCart: (state, action) => {
      state.addToCart = state.addToCart.filter(
        (prod) => prod.id !== action.payload.id
      );
    },
  },
});

const { actions, reducer } = CartSlice;

export const { addCart, removeAddToCart } = actions;
export default reducer;
