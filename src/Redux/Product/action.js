import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProduct = createAsyncThunk("productReducer", () => {
  const products = fetch("http://localhost:5001/product").then((response) => {
    return response.json();
  });
  console.log('product in product action' , products)
  return products;
});
