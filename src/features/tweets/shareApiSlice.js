import { apiSlice } from "../../app/api/apiSlice";

function providesList(resultsId, tagTypes){
  return resultsId ? [...resultsId.map(({id}) => ({ type: tagTypes, id })), 
                      { type: tagTypes, id: 'LIST' }]
                     : [{ type: tagTypes, id: 'LIST' }]
}

export const shareApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    sharePost: builder.mutation({
      query: ({sharerId, ownerId, postId}) => ({
        url: `/sharePost?sharerId=${sharerId}&ownerId=${ownerId}&postId=${postId}`,
        method: 'POST',
        body: ''
      }),
      invalidatesTags: ['SHARED']
    }),

    unSharePost: builder.mutation({
      query: ({sharerId, ownerId, postId}) => ({
        url: `/sharePost?sharerId=${sharerId}&ownerId=${ownerId}&postId=${postId}`,
        method: 'DELETE',
        body: ''
      }),
      invalidatesTags: ['SHARED']
    }),

    getSharedPost: builder.query({
      query: ({userId, sharedPostId}) => `/getSharedPost/${userId}/${sharedPostId}`,
      providesTags: (result) => providesList(result, 'SHARED')
    }),

    getUserSharedPost: builder.mutation({
      query: (sharerId) => `/getUserSharedPost/${sharerId}`,
      transformResponse: res => res?.data.sort((a, b) => b?.sharedDate.localeCompare(a?.sharedDate)),
      providesTags: (result) => providesList(result, 'SHARED')
    }),

    getAllSharedPost: builder.mutation({
      query: (ownerId) => `/getAllSharedPost/${ownerId}`,
      transformResponse: res => res?.data.sort((a, b) => b?.sharedDate.localeCompare(a?.sharedDate)),
      providesTags: (result) => providesList(result, 'SHARED')
    })
  })
})

export const {
  useGetAllSharedPostMutation, useGetSharedPostQuery, useGetUserSharedPostMutation,
  useSharePostMutation, useUnSharePostMutation
} = shareApiSlice
