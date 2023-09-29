import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProduct = createAsyncThunk("productReducer", () => {
  const products = fetch("http://localhost:5001/product").then((response) => {
    return response.json();
  });
  return products;
});
