import { configureStore } from "@reduxjs/toolkit"

import authSlice from "./Authentication"
import pageSlice from "./ChangePage"
import uiSlice from "./Ui"
import genreSlice from "./HELPAPI"

const store = configureStore({
  reducer: {auth: authSlice.reducer, ui: uiSlice.reducer, page: pageSlice.reducer, genre: genreSlice.reducer}
})

export const genreActions = genreSlice.actions
export const pageActions = pageSlice.actions
export const authActions = authSlice.actions
export const uiActions = uiSlice.actions
export default store