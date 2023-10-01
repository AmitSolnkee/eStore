import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullname: "",
  emailId: "",
  password: "",
  mobNumber: "",
};
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default userSlice.reducer;
