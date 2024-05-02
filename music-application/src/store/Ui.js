import { createSlice } from "@reduxjs/toolkit";
const initialState = {sideBar: false}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    sideBar(state){
      state.sideBar = !state.sideBar
    }
  }
})
export default uiSlice