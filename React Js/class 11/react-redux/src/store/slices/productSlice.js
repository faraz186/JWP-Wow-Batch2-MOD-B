import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allProducts: [],
  isLoading: false,
  error: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state, payload) => {
      state.isLoading = true;
      console.log("pending");
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allProducts = action.payload;
      console.log("fulfilled");
    });
    builder.addCase(fetchProduct.rejected, (state, payload) => {
      state.isLoading = false;
      state.isLoading = false;
      state.allProducts = [];
      state.error = true;
      console.log("rejected");
    });
  },
});

export const fetchProduct = createAsyncThunk("products/fetch", async () => {
  try {
    const data = await axios.get("https://fakestoreapi.com/products");
    console.log("data.data", data.data);
    return data.data;
  } catch (error) {
    console.log("error", error);
    return error;
  }
});

const { actions, reducer } = productSlice;
export default reducer;
