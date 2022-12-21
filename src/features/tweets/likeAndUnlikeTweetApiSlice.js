import { apiSlice } from "../../app/api/apiSlice";

export const likeAndUnlikeTweetApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    likeAndUnlikeTweets: builder.mutation({
      query: ({userId, postId}) => ({
        url: `/tweets/likeAndUnlikePost/${userId}/${postId}`,
        method: 'PUT',
        body: ''
      }),
      invalidatesTags: [{ type: 'POSTS', id: 'LIST' }]
    }),
    
    likeAndUnlikeComments: builder.mutation({
      query: ({userId, commentId}) => ({
        url: `/tweets/likeAndUnlikeComment/${userId}/${commentId}`,
        method: 'PUT',
        body: ''
      }),
      invalidatesTags: [{ type: 'COMMENTS', id: 'LIST' }]
    }),

    disLikeAndUnDisLikeComments: builder.mutation({
      query: ({userId, commentId}) => ({
        url: `/tweets/dislikeAndUnDislikeComment/${userId}/${commentId}`,
        method: 'PUT',
        body: ''
      }),
      invalidatesTags: [{ type: 'COMMENTS', id: 'LIST' }]
    }),
    
    likeAndUnlikeResponse: builder.mutation({
      query: ({userId, responseId}) => ({
        url: `/tweets/likeAndUnlikeResponse/${userId}/${responseId}`,
        method: 'PUT',
        body: ''
      }),
      invalidatesTags: [{ type: 'RESPONSE', id: 'LIST' }]
    }),

    dislikeAndUnDislikeResponse: builder.mutation({
      query: ({userId, responseId}) => ({
        url: `/tweets/dislikeAndUnDislikeResponse/${userId}/${responseId}`,
        method: 'PUT',
        body: ''
      }),
      invalidatesTags: [{ type: 'RESPONSE', id: 'LIST' }]
    }),

  })
})

export const {
  useLikeAndUnlikeTweetsMutation, useDislikeAndUnDislikeResponseMutation,
  useLikeAndUnlikeResponseMutation, useLikeAndUnlikeCommentsMutation, 
  useDisLikeAndUnDisLikeCommentsMutation
} = likeAndUnlikeTweetApiSlice
