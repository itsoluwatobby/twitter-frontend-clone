import { apiSlice } from "../../app/api/apiSlice";

export const likeAndUnlikeTweetApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    likeAndUnlikeTweets: builder.mutation({
      query: ({userId, postId}) => ({
        url: `/likeAndUnlikePost/${userId}/${postId}`,
        method: 'PUT',
        body: ''
      }),
      invalidatesTags: ['POSTLIKE']
    }),
    
    likeAndUnlikeComments: builder.mutation({
      query: ({userId, commentId}) => ({
        url: `/likeAndUnlikeComment/${userId}/${commentId}`,
        method: 'PUT',
        body: ''
      }),
      invalidatesTags: ['COMMENTLIKE']
    }),

    disLikeAndUnDisLikeComments: builder.mutation({
      query: ({userId, commentId}) => ({
        url: `/dislikeAndUnDislikeComment/${userId}/${commentId}`,
        method: 'PUT',
        body: ''
      }),
      invalidatesTags: ['COMMENTLIKE']
    }),
    
    likeAndUnlikeResponse: builder.mutation({
      query: ({userId, responseId}) => ({
        url: `/likeAndUnlikeResponse/${userId}/${responseId}`,
        method: 'PUT',
        body: ''
      }),
      invalidatesTags: ['RESPONSELIKE']
    }),

    dislikeAndUnDislikeResponse: builder.mutation({
      query: ({userId, responseId}) => ({
        url: `/dislikeAndUnDislikeResponse/${userId}/${responseId}`,
        method: 'PUT',
        body: ''
      }),
      invalidatesTags: ['RESPONSELIKE']
    }),

  })
})

export const {
  useLikeAndUnlikeTweetsMutation, useDislikeAndUnDislikeResponseMutation,
  useLikeAndUnlikeResponseMutation, useLikeAndUnlikeCommentsMutation, 
  useDisLikeAndUnDisLikeCommentsMutation
} = likeAndUnlikeTweetApiSlice
