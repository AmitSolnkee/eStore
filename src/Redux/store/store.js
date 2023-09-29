import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "../Category/CategorySlice";
import productSlice from "../Product/productSlice";
import cartSlice from "../Cart/cartSlice";

export const store = configureStore({
  reducer: {
    cr: CategorySlice,
    productReducer: productSlice,
    cartReducer: cartSlice,
  },
});
