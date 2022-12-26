import { apiSlice } from "../../app/api/apiSlice";

function providesList(resultsId, tagTypes){
  return resultsId ? [...resultsId.map(({ _id }) => ({ type: tagTypes, id: _id })), 
                      { type: tagTypes, id: 'LIST' }]
                     : [{ type: tagTypes, id: 'LIST' }]
}

export const shareApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    sharePost: builder.mutation({
      query: ({sharerId, ownerId, postId}) => ({
        url: `/tweets/sharePost?sharerId=${sharerId}&ownerId=${ownerId}&postId=${postId}`,
        method: 'POST',
        body: ''
      }),
      invalidatesTags: ['SHARED']
    }),

    unSharePost: builder.mutation({
      query: ({sharerId, ownerId, postId}) => ({
        url: `/tweets/sharePost?sharerId=${sharerId}&ownerId=${ownerId}&postId=${postId}`,
        method: 'DELETE',
        body: ''
      }),
      invalidatesTags: ['SHARED']
    }),

    getSharedPost: builder.query({
      query: ({userId, sharedPostId}) => `/tweets/getSharedPost/${userId}/${sharedPostId}`,
      providesTags: (result) => providesList(result, 'SHARED')
    }),

    getUserSharedPost: builder.mutation({
      query: (sharerId) => `/tweets/getUserSharedPost/${sharerId}`,
      transformResponse: res => res?.data.sort((a, b) => b?.sharedDate.localeCompare(a?.sharedDate)),
      providesTags: (result) => providesList(result, 'SHARED')
    }),

    getAllSharedPost: builder.mutation({
      query: (ownerId) => `/tweets/getAllSharedPost/${ownerId}`,
      transformResponse: res => res?.data.sort((a, b) => b?.sharedDate.localeCompare(a?.sharedDate)),
      providesTags: (result) => providesList(result, 'SHARED')
    })
  })
})

export const {
  useGetAllSharedPostMutation, useGetSharedPostQuery, useGetUserSharedPostMutation,
  useSharePostMutation, useUnSharePostMutation
} = shareApiSlice
