import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.products = [];
      state.isError = action.payload;
    });
  },
});

export const fetchProduct = createAsyncThunk(
  "product/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const fetchData = await axios.get("https://fakestoreapi.com/products");
      console.log("product data", fetchData.data);
      return fetchData.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const { actions, reducer } = productSlice;

export default reducer;
