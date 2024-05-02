import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./Authentication"
import uiSlice from "./Ui"
const store = configureStore({
  reducer: {auth: authSlice.reducer, ui: uiSlice.reducer}
})

export const authActions = authSlice.actions
export const uiActions = uiSlice.actions
export default store