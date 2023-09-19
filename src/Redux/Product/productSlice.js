const { createSlice } = require("@reduxjs/toolkit");

const initialState = [
  {
    id: 1,
    pName: "Coat",
    pPrice: 2699,
    img: "shop-1.jpg",
  },
  {
    id: 1,
    pName: "Coat",
    pPrice: 2699,
    img: "shop-2.jpg",
  },
  {
    id: 1,
    pName: "Coat",
    pPrice: 2699,
    img: "shop-3.jpg",
  },
  {
    id: 1,
    pName: "Coat",
    pPrice: 2699,
    img: "shop-4.jpg",
  },
  {
    id: 1,
    pName: "Coat",
    pPrice: 2699,
    img: "shop-5.jpg",
  },
  {
    id: 1,
    pName: "Coat",
    pPrice: 2699,
    img: "shop-6.jpg",
  },
];

const productSlice = createSlice({
  name: "ProductSlice",
  initialState: initialState,
});

export default productSlice;
