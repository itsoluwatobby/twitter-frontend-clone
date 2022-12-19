import { apiSlice } from "../../app/api/apiSlice";

function providesList(resultsId, tagTypes){
  return resultsId ? [...resultsId.map(({id}) => ({ type: tagTypes, id })), 
                      { type: tagTypes, id: 'LIST' }]
                     : [{ type: tagTypes, id: 'LIST' }]
}

export const tweetApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    //fetching single post
    fetchSinglePost: builder.query({
      query: (postId) => `/getPost/${postId}`,
      providesTags: result => providesList(result, 'POSTS') 
    }),

    //fetch all posts
    fetchPosts: builder.query({
      query: (userId) => `/getAllPosts/${userId}`,
      transformResponse: response => {
        return response?.data.sort((a, b) => b?.postDate.localeCompare(a?.postDate))
      },
      providesTags: (result) => providesList(result, 'POSTS')
    }),

    //fetch all posts by a user
    fetchPostsByUser: builder.query({
      query: (userId) => `/getUserPosts/${userId}`,
      transformResponse: response => {
        return response?.data.sort((a, b) => b?.postDate.localeCompare(a?.postDate))
      },
      providesTags: (result) => providesList(result, 'POSTS')
    }),

    //create a new post fro user
    createPosts: builder.mutation({
      query: (newPost) => ({
        url: '/createPost',
        method: 'POST',
        body: newPost
      }),
      invalidatesTags: [{ type: 'POSTS', id: 'LIST' }]
    }),

    //update post by user
    updatePost: builder.mutation({
      query: ({postId, postUpdate}) => ({
        url: `/updatePost/${postId}`,
        method: 'PUT',
        body: postUpdate
      }),
      invalidatesTags: [{ type: 'POSTS', id: 'LIST' }]
    }),

    //delete user post by user
    deletePost: builder.mutation({
      query: ({userId, postId}) => ({
        url: `/deletePost/${userId}/${postId}`,
        method: 'DELETE',
        body: ''
      }),
      invalidatesTags: [{ type: 'POSTS', id: 'LIST' }]
    }),

    //delete user post by admin
    deletePostByAdmin: builder.mutation({
      query: ({adminId, postId}) => ({
        url: `/adminPostDelete/${adminId}/${postId}`,
        method: 'DELETE',
        body: ''
      }),
      invalidatesTags: [{ type: 'POSTS', id: 'LIST' }]
    }),

    //delete user posts by admin
    deleteUserPostsByAdmin: builder.mutation({
      query: ({adminId, userId}) => ({
        url: `/deleteUserPosts?adminId=${adminId}&userId=${userId}`,
        method: 'DELETE',
        body: ''
      }),
      invalidatesTags: [{ type: 'POSTS', id: 'LIST' }]
    }),
  })
})

export const {
  useFetchPostsQuery, useFetchSinglePostQuery, useFetchPostsByUserQuery, 
  useCreatePostsMutation, useUpdatePostMutation, useDeletePostMutation,
  useDeletePostByAdminMutation, useDeleteUserPostsByAdminMutation
} = tweetApiSlice