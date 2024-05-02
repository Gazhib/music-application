import { createSlice } from "@reduxjs/toolkit";
const initialState = { isAuthorized: true };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeAuth(state) {
      state.isAuthorized = !state.isAuthorized;
    },
  },
});

export default authSlice;