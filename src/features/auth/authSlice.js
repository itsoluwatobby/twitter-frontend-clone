import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: {}, token: null },
  reducers:{
    setCredentials: (state, action) => {
      state.token = action.payload?.accessToken
      state.user = action.payload?.rest
    },
    logout: state => {
      state.user = {}
      state.token = null
    }
  }
})

export const { setCredentials, logout } = authSlice.actions
export const selectCurrentUser = state => state?.auth?.user
export const selectCurrentToken = state => state?.auth?.token

export default authSlice.reducer
