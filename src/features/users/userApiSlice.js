import { apiSlice } from "../../app/api/apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({

    //get single user
    getUser: builder.query({
      query: (userId) => `/getUser/${userId}`,
      providesTags: ['USERS']
    }),

    //fetch all users
    getAllUsers: builder.query({
      query: () => '/getUsers',
      providesTags: ['USERS']
    }),

    //fetch user friends
    fetchUserFriends: builder.query({
      query: (userId) => `/userFriends/${userId}`,
      providesTags: ['USERS']
    }),
    
    //follow a user
    followUser: builder.mutation({
      query: ({followerId, followingId}) => ({
        url: `/followUser?followerId=${followerId}&followingId=${followingId}`,
        method: 'PUT',
        body: ''
      }),
      invalidatesTags: ['USERS']
    }),

    //unfollow a user
    unfollowUser: builder.mutation({
      query: ({followerId, followingId}) => ({
        url: `/unfollowUser?followerId=${followerId}&followingId=${followingId}`,
        method: 'PUT',
        body: ''
      }),
      invalidatesTags: ['USERS']
    }),

    //update user info
    updateUserInfo: builder.mutation({
      query: ({userId, userInfo}) => ({
        url: `/updateInfo/${userId}`,
        method: 'PUT',
        body: userInfo
      }),
      invalidatesTags: ['USERS']
    }),

    //lock and unlock user account by admin
    lockAndUnlockAccount: builder.mutation({
      query: ({adminId, userId}) => ({
        url: `/lockAndUnlockAccount/${adminId}/${userId}`,
        method: 'PUT',
        body: ''
      }),
      invalidatesTags: ['USERS']
    }),

    //toggle editor role
    toggleEditorRole: builder.mutation({
      query: ({adminId, userId}) => ({
        url: `/toggleEditorRole/${adminId}/${userId}`,
        method: 'PUT',
        body: ''
      }),
      invalidatesTags: ['USERS']
    }),

    //toggle admin role
    toggleAdminRole: builder.mutation({
      query: ({adminId, userId}) => ({
        url: `/toggleAdminRole/${adminId}/${userId}`,
        method: 'PUT',
        body: ''
      }),
      invalidatesTags: ['USERS']
    }),

    //remove user hubby
    removeHobby: builder.mutation({
      query: (userId) => ({
        url: `/remove_hobby/${userId}`,
        method: 'PATCH',
        body: ''
      }),
      invalidatesTags: ['USERS']
    }),
    
    //delete my account
    deleteAccount: builder.mutation({
      query: (userId) => ({
        url: `/delete_myaccount/${userId}`,
        method: 'DELETE',
        body: ''
      }),
      invalidatesTags: ['USERS']
    }),

    //delete accounts by admin
    deleteAccountByAdmin: builder.mutation({
      query: ({adminId, userId}) => ({
        url: `/deleteAccount?adminId=${adminId}&userId=${userId}`,
        method: 'DELETE',
        body: ''
      }),
      invalidatesTags: ['USERS']
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