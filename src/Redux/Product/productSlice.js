import { getProduct } from "./action";
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    product: [],
    status: "idle",
    err: "",
  },

  reducers: {},
  extraReducers: {
    [getProduct.pending]: (state, action) => {
      state.status = "Loading";
    },
    [getProduct.fulfilled]: (state, action) => {
      state.status = "Success";
      state.product = action.payload;
    },
    [getProduct.rejected]: (state, action) => {
      state.status = "Failed";
      state.err = action.error.message;
    },
  },
});

export default productSlice.reducer;
