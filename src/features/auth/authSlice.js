import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: {}, token: null, trust: false, currentUser: {} },
  reducers:{
    setCredentials: (state, action) => {
      state.token = action.payload?.accessToken
      state.user = action.payload?.rest
    },
    getCurrentUser: (state, action) => {
      state.currentUser = action.payload
    },
    logout: state => {
      state.user = {}
      state.token = null
      state.currentUser = {}
    },
    trustDevice: (state, action) => {
      state.trust = action.payload
    }
  }
})

export const { setCredentials, logout, trustDevice, getCurrentUser } = authSlice.actions
export const selectCurrentUser = state => state?.auth?.currentUser
export const selectCurrentToken = state => state?.auth?.token
export const trustThisDevice = state => state?.auth.trust

export default authSlice.reducer
