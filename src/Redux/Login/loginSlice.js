import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
};

const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    
  },
});

export default loginSlice.reducer;
