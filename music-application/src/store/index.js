import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./Authentication"
import pageSlice from "./ChangePage"
import uiSlice from "./Ui"
const store = configureStore({
  reducer: {auth: authSlice.reducer, ui: uiSlice.reducer, page: pageSlice.reducer}
})

export const pageActions = pageSlice.actions
export const authActions = authSlice.actions
export const uiActions = uiSlice.actions
export default store