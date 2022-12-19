import { apiSlice } from "../../app/api/apiSlice";

export const shareApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    sharePost: builder.mutation({
      query: ({sharerId, ownerId, postId}) => ({
        url: `/sharePost?sharerId=${sharerId}&ownerId=${ownerId}&postId=${postId}`,
        method: 'POST',
        body: ''
      }),
      invalidatesTags: ['POSTS']
    }),

    unSharePost: builder.mutation({
      query: ({sharerId, ownerId, postId}) => ({
        url: `/sharePost?sharerId=${sharerId}&ownerId=${ownerId}&postId=${postId}`,
        method: 'DELETE',
        body: ''
      }),
      invalidatesTags: ['POSTS']
    }),

    getSharedPost: builder.query({
      query: ({userId, sharedPostId}) => `/getSharedPost/${userId}/${sharedPostId}`,
      providesTags: [POSTS]
    }),

    getUserSharedPost: builder.mutation({
      query: (sharerId) => `/getUserSharedPost/${sharerId}`,
      transformResponse: res => res?.data.sort((a, b) => b?.sharedDate.localeCompare(a?.sharedDate)),
      providesTags: [POSTS]
    }),

    getAllSharedPost: builder.mutation({
      query: (ownerId) => `/getAllSharedPost/${ownerId}`,
      transformResponse: res => res?.data.sort((a, b) => b?.sharedDate.localeCompare(a?.sharedDate)),
      providesTags: [POSTS]
    })
  })
})

export const {
  useGetAllSharedPostMutation, useGetSharedPostQuery, useGetUserSharedPostMutation,
  useSharePostMutation, useUnSharePostMutation
} = shareApiSlice
