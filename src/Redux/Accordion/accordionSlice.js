import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    mainCategory: "Men",
    subCategory: [
      "Top wears",
      "Bottom wears",
      "Winter wears",
      "Wallets",
      "Sports wears",
    ],
  },
  {
    id: 1,
    mainCategory: "Women",
    subCategory: [
      "Top wears",
      "Bottom wears",
      "Winter wears",
      "Wallets",
      "Sports wears",
    ],
  },
  {
    id: 1,
    mainCategory: "Kids",
    subCategory: [
      "Top wears",
      "Bottom wears",
      "Winter wears",
      "Wallets",
      "Sports wears",
    ],
  },
];
const accordionSlice = createSlice({
  name: "AccordionSlice",
  initialState: initialState,
});

export default accordionSlice;
