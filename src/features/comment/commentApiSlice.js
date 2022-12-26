import { apiSlice } from "../../app/api/apiSlice";

function providesList(resultsId, tagTypes){
  return resultsId ? [...resultsId.map(({ _id }) => ({ type: tagTypes, id: _id })), 
                      { type: tagTypes, id: 'LIST' }]
                     : [{ type: tagTypes, id: 'LIST' }]
}

export const commentApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    //fetching single comment
    getSingleComment: builder.query({
      query: ({commentId, postId}) => `/tweets/getComment/${commentId}/${postId}`,
      providesTags: (result) => [{ type: 'COMMENTS', id: 'LIST' }]
    }),

    //fetch all user comments
    fetchUserComments: builder.query({
      query: (userId) => `/tweets/getComments/${userId}`,
      transformResponse: response => {
        return response.sort((a, b) => b?.commentDate.localeCompare(a?.commentDate))
      },
      providesTags: (result) => providesList(result, 'COMMENTS')
    }),

    //fetch all user comments by admin
    fetchUserCommentsByAdmin: builder.query({
      query: ({adminId, userId}) => `/tweets/getUserComments/${adminId}/${userId}`,
      transformResponse: response => {
        return response.sort((a, b) => b?.commentDate.localeCompare(a?.commentDate))
      },
      providesTags: (result) => providesList(result, 'COMMENTS')
    }),

    //fetch all posts by a user
    getCommentsInPost: builder.query({
      query: (postId) => `/tweets/getCommentsInPost/${postId}`,
      transformResponse: res => {
        return res?.sort((a, b) => b?.commentDate.localeCompare(a?.commentDate))
      },
      providesTags: (result) => providesList(result, 'COMMENTS')
    }),

    //create a new comment from user
    createComment: builder.mutation({
      query: (newComment) => ({
        url: '/tweets/createComment',
        method: 'POST',
        body: newComment
      }),
      invalidatesTags: [{ type: 'COMMENTS', id: 'LIST' }]
    }),

    //update comment by user
    updateComment: builder.mutation({
      query: ({commentId, commentUpdate}) => ({
        url: `/tweets/updateComment/${commentId}`,
        method: 'PUT',
        body: commentUpdate
      }),
      invalidatesTags: [{ type: 'COMMENTS', id: 'LIST' }]
    }),

    //delete user comment by user
    deleteComment: builder.mutation({
      query: ({userId, commentId}) => ({
        url: `/tweets/deleteComment/${userId}/${commentId}`,
        method: 'DELETE',
        body: ''
      }),
      invalidatesTags: [{ type: 'COMMENTS', id: 'LIST' }]
    }),

    //delete user comment by post owner
    deleteCommentByPostOwner: builder.mutation({
      query: ({ownerId, commentId}) => ({
        url: `/tweets/deleteCommentByPostOwner/${ownerId}/${commentId}`,
        method: 'DELETE',
        body: ''
      }),
      invalidatesTags: [{ type: 'COMMENTS', id: 'LIST' }]
    }),

    //delete user comment by admin
    deleteCommentByAdmin: builder.mutation({
      query: ({adminId, commentId}) => ({
        url: `/tweets/adminCommentDelete/${adminId}/${commentId}`,
        method: 'DELETE',
        body: ''
      }),
      invalidatesTags: [{ type: 'COMMENTS', id: 'LIST' }]
    }),

    //delete user posts by admin
    deleteUserCommentsByAdmin: builder.mutation({
      query: ({adminId, postId}) => ({
        url: `/tweets/deleteUserComments?adminId=${adminId}&postId=${postId}`,
        method: 'DELETE',
        body: ''
      }),
      invalidatesTags: [{ type: 'COMMENTS', id: 'LIST' }]
    }),
  })
})

export const {
  useFetchUserCommentsQuery, useGetSingleCommentQuery, useGetCommentsInPostQuery, 
  useCreateCommentMutation, useUpdateCommentMutation, useDeleteCommentMutation,
  useDeleteCommentByAdminMutation, useDeleteUserCommentsByAdminMutation, 
  useFetchUserCommentsByAdminQuery, useDeleteCommentByPostOwnerMutation
} = commentApiSlice