import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./action";

const CategorySlice = createSlice({
  name: "CategorySlice",
  initialState: {
    categories: [],
    status: "idle",
    error: "",
  },
  reducers: {},
  extraReducers: {
    [getCategories.pending]: (state, action) => {
      state.status = "Loading";
    },
    [getCategories.fulfilled]: (state, action) => {
      state.status = "Success";
      state.categories = action.payload;
    },
    [getCategories.rejected]: (state, action) => {
      state.status = "Failed";
      state.error = action.error.message;
    },
  },
});

export default CategorySlice.reducer;
