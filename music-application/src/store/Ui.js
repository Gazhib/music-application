import { createSlice } from "@reduxjs/toolkit";
const initialState = {sideBar: false, isReg: false}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    sideBar(state){
      state.sideBar = !state.sideBar
    },
    modal(state){
      state.isReg = !state.isReg
    }
  }
})
export default uiSlice