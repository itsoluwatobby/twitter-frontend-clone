import { apiSlice } from "../../app/api/apiSlice";

function providesList(resultsId, tagTypes){
  return resultsId ? [...resultsId.map(({ _id }) => ({ type: tagTypes, id: _id })), 
                      { type: tagTypes, id: 'LIST' }]
                     : [{ type: tagTypes, id: 'LIST' }]
}

export const tweetApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    
    //fetching single post
    fetchSinglePost: builder.query({
      query: (postId) => `/tweets/getPost/${postId}`,
      providesTags: result => ['POSTS'] 
    }),

    //fetch all posts
    fetchPosts: builder.query({
      query: () => '/tweets/getAllPosts',
      transformResponse: response => {
        return response?.sort((a, b) => b?.postDate.localeCompare(a?.postDate))
      },
      providesTags: (result) => providesList(result, 'POSTS')
    }),

    //fetch all posts by a user
    fetchPostsByUser: builder.query({
      query: (userId) => `/tweets/getUserPosts/${userId}`,
      transformResponse: response => {
        return response?.data.sort((a, b) => b?.postDate.localeCompare(a?.postDate))
      },
      providesTags: (result) => providesList(result, 'POSTS')
    }),

    //create a new post fro user
    createPosts: builder.mutation({
      query: (newPost) => ({
        url: '/tweets/createPost',
        method: 'POST',
        body: newPost
      }),
      invalidatesTags: [{ type: 'POSTS', id: 'LIST' }]
    }),

    //update post by user
    updatePost: builder.mutation({
      query: ({postId, postUpdate}) => ({
        url: `/tweets/updatePost/${postId}`,
        method: 'PUT',
        body: postUpdate
      }),
      invalidatesTags: [{ type: 'POSTS', id: 'LIST' }]
    }),

    //delete user post by user
    deletePost: builder.mutation({
      query: ({userId, postId}) => ({
        url: `/tweets/deletePost/${userId}/${postId}`,
        method: 'DELETE',
        body: ''
      }),
      invalidatesTags: [{ type: 'POSTS', id: 'LIST' }]
    }),

    //delete user post by admin
    deletePostByAdmin: builder.mutation({
      query: ({adminId, postId}) => ({
        url: `/tweets/adminPostDelete/${adminId}/${postId}`,
        method: 'DELETE',
        body: ''
      }),
      invalidatesTags: [{ type: 'POSTS', id: 'LIST' }]
    }),

    //delete user posts by admin
    deleteUserPostsByAdmin: builder.mutation({
      query: ({adminId, userId}) => ({
        url: `/tweets/deleteUserPosts?adminId=${adminId}&userId=${userId}`,
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