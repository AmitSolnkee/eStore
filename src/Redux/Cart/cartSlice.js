import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  cartTotalAmount: 0,
  totalItemQty: 0,
  totalQty: 0,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCartAction: (state, action) => {
      let itemExists = state.cart.find((item) => item.id === action.payload.id);
      state.cart = [...state.cart, action.payload];
      state.cartTotalAmount = state.cartTotalAmount + action.payload.price;
      state.totalQty = ++state.totalQty;
      state.totalItemQty = !itemExists
        ? ++state.totalItemQty
        : state.totalItemQty;
    },
  },
});
export const { addToCartAction } = cartSlice.actions;
export default cartSlice.reducer;
