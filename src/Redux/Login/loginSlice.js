import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  userName: "",
  password: "",
};

const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {},
});

export default loginSlice.reducer;
