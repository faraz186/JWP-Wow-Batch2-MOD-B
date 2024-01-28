import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import productReducer from "./slices/productSlice";

const store = configureStore({
  reducer: {
    counterReducer,
    productReducer,
  },
});

export default store;
