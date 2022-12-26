import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
  user: {}, 
  token: null, 
  trust: JSON.parse(localStorage.getItem('isLoggedIn')) || false, 
  currentUser: {} 
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers:{
    setCredentials: (state, action) => {
      state.token = action.payload?.accessToken
      state.user = action.payload?.rest
    },
    getCurrentUser: (state, action) => {
      state.currentUser = action.payload
    },
    logoutUser: state => {
      state.user = {}
      state.token = null
      state.currentUser = {}
      localStorage.setItem('isLoggedIn', false)
    },
    trustDevice: (state, action) => {
      state.trust = action.payload
    }
  }
})

export const { setCredentials, logoutUser, trustDevice, getCurrentUser } = authSlice.actions
export const selectCurrentUser = state => state?.auth?.currentUser
export const selectCurrentToken = state => state?.auth?.token
export const trustThisDevice = state => state?.auth.trust

export default authSlice.reducer
