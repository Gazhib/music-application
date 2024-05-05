import { createSlice } from "@reduxjs/toolkit";

const initialState = {genre: null, genreArray: null, token: null, tracks: null, tracksName: null, track: null}

const apiSlice = createSlice({
  name: "genre",
  initialState,
  reducers:{
    changeGenre(state, action){
      state.genre = action.payload.genre
      state.genreArray = action.payload.genreArray
    },
    acquireToken(state, action){
      state.token = action.payload
    },
    acquireTracks(state, action){
      state.tracks = action.payload
    },
    acquireTracksName(state, action){
      state.tracksName = action.payload
    },
    acquireTrack(state, action){
      state.track = action.payload
    }
  }
})
export default apiSlice