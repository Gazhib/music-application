import { createSlice } from "@reduxjs/toolkit";

const initialState = {genre: null, genreArray: null}

const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers:{
    changeGenre(state, action){
      state.genre = action.payload.genre
      state.genreArray = action.payload.genreArray
    }
  }
})
export default genreSlice