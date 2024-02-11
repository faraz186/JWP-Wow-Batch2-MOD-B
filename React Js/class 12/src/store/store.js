import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import productReducer from "./slices/productSlice";
import addToCartReducer from "./slices/addToCart";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "cart",
  storage,
};

const store = configureStore({
  reducer: {
    counterReducer,
    productReducer,
    addToCartReducer: persistReducer(persistConfig, addToCartReducer),
  },
});

export const persistor = persistStore(store);
export default store;
