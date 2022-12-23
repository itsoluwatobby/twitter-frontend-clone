import {apiSlice} from '../../app/api/apiSlice'

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({

    registerUser: builder.mutation({
      query: (credentials) => ({
        url: '/users/register',
        method: 'POST',
        body: {...credentials}
      }),
      //invalidatesTags: [{ type: 'USERS', id: 'LIST' }]
    }),

    login: builder.mutation({
      query: (credentials) => ({
        url: '/users/login',
        method: 'POST',
        body: {...credentials}
      }),
      //invalidatesTags: [{ type: 'USERS', id: 'LIST' }]
    }),

    resetPassword: builder.mutation({
      query: (email) => ({
        url: '/users/reset_password',
        method: 'POST',
        body: email
      }),
      //invalidatesTags: [{ type: 'USERS', id: 'LIST' }]
    }),

    sendResetPassword: builder.mutation({
      query: (passwordUpdate) => ({
        url: `/users/password_confirmation`,
        method: 'PUT',
        body: passwordUpdate
      })
    }),

    logout: builder.query({
      query: () => '/users/logout',
      //invalidatesTags: [{ type: 'USERS', id: 'LIST' }]
    }),
  })
})

export const { 
  useLoginMutation, useRegisterUserMutation, useResetPasswordMutation,
  useSendResetPasswordMutation, useLogoutQuery
} = authApiSlice
