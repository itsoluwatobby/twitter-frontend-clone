import { apiSlice } from "../../app/api/apiSlice";

function providesList(resultsId, tagTypes){
  return resultsId ? [...resultsId.map(({id}) => ({ type: tagTypes, id })), 
                      { type: tagTypes, id: 'LIST' }]
                     : [{ type: tagTypes, id: 'LIST' }]
}

export const commentApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    //fetching single comment
    getSingleComment: builder.query({
      query: ({commentId, postId}) => `/getComment/${commentId}/${postId}`,
      providesTags: (result) => providesList(result, 'COMMENTS')
    }),

    //fetch all user comments
    fetchUserComments: builder.query({
      query: (userId) => `/getComments/${userId}`,
      transformResponse: response => {
        return response?.data.sort((a, b) => b?.commentDate.localeCompare(a?.commentDate))
      },
      providesTags: (result) => providesList(result, 'COMMENTS')
    }),

    //fetch all user comments by admin
    fetchUserCommentsByAdmin: builder.query({
      query: ({adminId, userId}) => `/getUserComments/${adminId}/${userId}`,
      transformResponse: response => {
        return response?.data.sort((a, b) => b?.commentDate.localeCompare(a?.commentDate))
      },
      providesTags: (result) => providesList(result, 'COMMENTS')
    }),

    //fetch all posts by a user
    getCommentsInPost: builder.query({
      query: (postId) => `/getCommentsInPost/${postId}`,
      transformResponse: response => {
        return response?.data.sort((a, b) => b?.commentDate.localeCompare(a?.commentDate))
      },
      providesTags: (result) => providesList(result, 'COMMENTS')
    }),

    //create a new comment from user
    createComment: builder.mutation({
      query: (newComment) => ({
        url: '/createComment',
        method: 'POST',
        body: newComment
      }),
      invalidatesTags: [{ type: 'COMMENTS', id: 'LIST' }]
    }),

    //update comment by user
    updateComment: builder.mutation({
      query: ({commentId, commentUpdate}) => ({
        url: `/updateComment/${commentId}`,
        method: 'PUT',
        body: commentUpdate
      }),
      invalidatesTags: [{ type: 'COMMENTS', id: 'LIST' }]
    }),

    //delete user comment by user
    deleteComment: builder.mutation({
      query: ({userId, commentId}) => ({
        url: `/deleteComment/${userId}/${commentId}`,
        method: 'DELETE',
        body: ''
      }),
      invalidatesTags: [{ type: 'COMMENTS', id: 'LIST' }]
    }),

    //delete user comment by post owner
    deleteCommentByPostOwner: builder.mutation({
      query: ({ownerId, commentId}) => ({
        url: `/deleteCommentByPostOwner/${ownerId}/${commentId}`,
        method: 'DELETE',
        body: ''
      }),
      invalidatesTags: [{ type: 'COMMENTS', id: 'LIST' }]
    }),

    //delete user comment by admin
    deleteCommentByAdmin: builder.mutation({
      query: ({adminId, commentId}) => ({
        url: `/adminCommentDelete/${adminId}/${commentId}`,
        method: 'DELETE',
        body: ''
      }),
      invalidatesTags: [{ type: 'COMMENTS', id: 'LIST' }]
    }),

    //delete user posts by admin
    deleteUserCommentsByAdmin: builder.mutation({
      query: ({adminId, postId}) => ({
        url: `/deleteUserComments?adminId=${adminId}&postId=${postId}`,
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