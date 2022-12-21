import { apiSlice } from "../../app/api/apiSlice";

function providesList(resultsId, tagTypes){
  return resultsId ? [...resultsId.map(({id}) => ({ type: tagTypes, id })), 
                      { type: tagTypes, id: 'LIST' }]
                     : [{ type: tagTypes, id: 'LIST' }]
}

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({

    //get single user
    getUser: builder.query({
      query: (userId) => `/users/getUser/${userId}`,
      providesTags: (result) => providesList(result, 'USERS')
    }),

    //fetch all users
    getAllUsers: builder.query({
      query: () => '/users/getUsers',
      providesTags: (result) => providesList(result, 'USERS')
    }),

    //fetch user friends
    fetchUserFriends: builder.query({
      query: (userId) => `/users/userFriends/${userId}`,
      providesTags: (result) => providesList(result, 'USERS')
    }),
    
    //follow a user
    followUser: builder.mutation({
      query: ({followerId, followingId}) => ({
        url: `/users/followUser?followerId=${followerId}&followingId=${followingId}`,
        method: 'PUT',
        body: ''
      }),
      invalidatesTags: [{ type: 'USERS', id: 'LIST' }],
    }),

    //unfollow a user
    unfollowUser: builder.mutation({
      query: ({followerId, followingId}) => ({
        url: `/users/unfollowUser?followerId=${followerId}&followingId=${followingId}`,
        method: 'PUT',
        body: ''
      }),
      invalidatesTags: [{ type: 'USERS', id: 'LIST' }]
    }),

    //update user info
    updateUserInfo: builder.mutation({
      query: ({userId, userInfo}) => ({
        url: `/users/updateInfo/${userId}`,
        method: 'PUT',
        body: userInfo
      }),
      invalidatesTags: [{ type: 'USERS', id: 'LIST' }]
    }),

    //lock and unlock user account by admin
    lockAndUnlockAccount: builder.mutation({
      query: ({adminId, userId}) => ({
        url: `/users/lockAndUnlockAccount/${adminId}/${userId}`,
        method: 'PUT',
        body: ''
      }),
      invalidatesTags: [{ type: 'USERS', id: 'LIST' }]
    }),

    //toggle editor role
    toggleEditorRole: builder.mutation({
      query: ({adminId, userId}) => ({
        url: `/users/toggleEditorRole/${adminId}/${userId}`,
        method: 'PUT',
        body: ''
      }),
      invalidatesTags: [{ type: 'USERS', id: 'LIST' }]
    }),

    //toggle admin role
    toggleAdminRole: builder.mutation({
      query: ({adminId, userId}) => ({
        url: `/users/toggleAdminRole/${adminId}/${userId}`,
        method: 'PUT',
        body: ''
      }),
      invalidatesTags: [{ type: 'USERS', id: 'LIST' }]
    }),

    //remove user hubby
    removeHobby: builder.mutation({
      query: (userId) => ({
        url: `/users/remove_hobby/${userId}`,
        method: 'PATCH',
        body: ''
      }),
      invalidatesTags: [{ type: 'USERS', id: 'LIST' }]
    }),
    
    //delete my account
    deleteAccount: builder.mutation({
      query: (userId) => ({
        url: `/users/delete_myaccount/${userId}`,
        method: 'DELETE',
        body: ''
      }),
      invalidatesTags: [{ type: 'USERS', id: 'LIST' }]
    }),

    //delete accounts by admin
    deleteAccountByAdmin: builder.mutation({
      query: ({adminId, userId}) => ({
        url: `/users/deleteAccount?adminId=${adminId}&userId=${userId}`,
        method: 'DELETE',
        body: ''
      }),
      invalidatesTags: [{ type: 'USERS', id: 'LIST' }]
    }),
  })
})

export const {
  useGetUserQuery, useGetAllUsersQuery, useFetchUserFriendsQuery, 
  useFollowUserMutation, useUnfollowUserMutation, useUpdateUserInfoMutation, 
  useLockAndUnlockAccountMutation, useToggleAdminRoleMutation,
  useToggleEditorRoleMutation, useRemoveHobbyMutation, 
  useDeleteAccountMutation, useDeleteAccountByAdminMutation, 
} = userApiSlice