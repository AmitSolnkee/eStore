import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk("getCategories", () => {
  const categories = fetch("http://localhost:5001/productcategories")
  .then(response=>{
    return response.json();
  })

  return categories;
});
