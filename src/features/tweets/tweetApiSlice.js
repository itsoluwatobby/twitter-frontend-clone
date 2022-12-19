import { apiSlice } from "../../app/api/apiSlice";

export const tweetApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    //fetching single post
    fetchSinglePost: builder.query({
      query: (postId) => `/getPost/${postId}`,
      providesTags: ['POSTS']
    }),
    //fetch all posts
    fetchPosts: builder.query({
      query: (userId) => `/getAllPosts/${userId}`,
      transformResponse: response => {
        return response?.data.sort((a, b) => b?.postDate.localeCompare(a?.postDate))
      },
      providesTags: ['POSTS']
    }),
    //fetch all posts by a user
    fetchPostsByUser: builder.query({
      query: (userId) => `/getUserPosts/${userId}`,
      transformResponse: response => {
        return response?.data.sort((a, b) => b?.postDate.localeCompare(a?.postDate))
      },
      providesTags: ['POSTS']
    }),
    //create a new post fro user
    createPosts: builder.mutation({
      query: (newPost) => ({
        url: '/createPost',
        method: 'POST',
        body: newPost
      }),
      invalidatesTags: ['POSTS']
    }),
    //update post by user
    updatePost: builder.mutation({
      query: ({postId, postUpdate}) => ({
        url: `/updatePost/${postId}`,
        method: 'PUT',
        body: postUpdate
      }),
      invalidatesTags: ['POSTS']
    }),
    //delete user post by user
    deletePost: builder.mutation({
      query: ({userId, postId}) => ({
        url: `/deletePost/${userId}/${postId}`,
        method: 'DELETE',
        body: ''
      }),
      invalidatesTags: ['POSTS']
    }),
    //delete user post by admin
    deletePostByAdmin: builder.mutation({
      query: ({adminId, postId}) => ({
        url: `/adminPostDelete/${adminId}/${postId}`,
        method: 'DELETE',
        body: ''
      }),
      invalidatesTags: ['POSTS']
    }),
    //delete user posts by admin
    deleteUserPostsByAdmin: builder.mutation({
      query: ({adminId, userId}) => ({
        url: `/deleteUserPosts?adminId=${adminId}&userId=${userId}`,
        method: 'DELETE',
        body: ''
      }),
      invalidatesTags: ['POSTS']
    }),
  })
})

export const {
  useFetchPostsQuery, useFetchSinglePostQuery, useFetchPostsByUserQuery, 
  useCreatePostsMutation, useUpdatePostMutation, useDeletePostMutation,
  useDeletePostByAdminMutation, useDeleteUserPostsByAdminMutation
} = tweetApiSlice