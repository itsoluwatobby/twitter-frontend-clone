import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {setCredentials, logoutUser, trustDevice} from '../../features/auth/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:5300',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth?.token
    token && headers.set('authorization', `Bearer ${token}`)
    return headers
  }
})

const baseQueryWithReAuth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  if(result?.error?.status === 403){
    const refreshResult = await baseQuery('/users/get_accessToken', api, extraOptions)

    if(refreshResult?.data){
      const user = api.getState().auth.user
      api.dispatch(setCredentials({accessToken: refreshResult?.data, user}))
      result = await baseQuery(args, api, extraOptions)
    }
    else{
      api.dispatch(logoutUser())
      api.dispatch(trustDevice(
        localStorage.setItem('isLoggedIn', false)
      ))
    }
  }
  return result
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  tagTypes: ['POSTS', 'USERS', 'SHARED', 'COMMENTS', 'RESPONSE'],
  endpoints: builder => ({})
})
