import { createSlice } from "@reduxjs/toolkit";
const initialState = ["Men", "Women", "Kids", "Best Offers", "All"];

const CategorySlice = createSlice({
  name: "CategorySlice",
  initialState: initialState,
});

export default CategorySlice;
