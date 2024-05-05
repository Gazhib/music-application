import { configureStore } from "@reduxjs/toolkit"

import authSlice from "./Authentication"
import pageSlice from "./ChangePage"
import uiSlice from "./Ui"
import apiSlice from "./HELPAPI"

const store = configureStore({
  reducer: {auth: authSlice.reducer, ui: uiSlice.reducer, page: pageSlice.reducer, api: apiSlice.reducer}
})

export const apiActions = apiSlice.actions
export const pageActions = pageSlice.actions
export const authActions = authSlice.actions
export const uiActions = uiSlice.actions
export default store