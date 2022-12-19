import {apiSlice} from '../../app/api/apiSlice'

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({

    register: builder.mutation({
      query: (credentials) => ({
        url: '/register',
        method: 'POST',
        body: {...credentials}
      })
    }),

    login: builder.mutation({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: {...credentials}
      })
    }),

    resetPassword: builder.mutation({
      query: (email) => ({
        url: '/reset_password',
        method: 'POST',
        body: email
      })
    }),

    sendResetPassword: builder.mutation({
      query: ({email, resetPassword}) => ({
        url: `/password_confirmation?email=${email}`,
        method: 'PATCH',
        body: resetPassword
      })
    }),

    logout: builder.query({
      query: () => '/logout'
    }),
  })
})

export const { 
  useLoginMutation, useRegisterMutation, useResetPasswordMutation,
  useSendResetPasswordMutation, useLogoutQuery
} = authApiSlice
