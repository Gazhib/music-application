import { createSlice } from "@reduxjs/toolkit";

const initialState = {page: "home"}

const pageSlice = createSlice({
  name:"page",
  initialState,
  reducers: {
    changePage(state, action){
      state.page = action.payload
    },
  }
})

export default pageSlice