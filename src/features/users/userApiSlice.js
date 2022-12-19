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
      query: (userId) => `/getUser/${userId}`,
      providesTags: (result) => providesList(result, 'USERS')
    }),

    //fetch all users
    getAllUsers: builder.query({
      query: () => '/getUsers',
      providesTags: (result) => providesList(result, 'USERS')
    }),

    //fetch user friends
    fetchUserFriends: builder.query({
      query: (userId) => `/userFriends/${userId}`,
      providesTags: (result) => providesList(result, 'USERS')
    }),
    
    //follow a user
    followUser: builder.mutation({
      query: ({followerId, followingId}) => ({
        url: `/followUser?followerId=${followerId}&followingId=${followingId}`,
        method: 'PUT',
        body: ''
      }),
      invalidatesTags: [{ type: 'USERS', id: 'LIST' }],
    }),

    //unfollow a user
    unfollowUser: builder.mutation({
      query: ({followerId, followingId}) => ({
        url: `/unfollowUser?followerId=${followerId}&followingId=${followingId}`,
        method: 'PUT',
        body: ''
      }),
      invalidatesTags: [{ type: 'USERS', id: 'LIST' }]
    }),

    //update user info
    updateUserInfo: builder.mutation({
      query: ({userId, userInfo}) => ({
        url: `/updateInfo/${userId}`,
        method: 'PUT',
        body: userInfo
      }),
      invalidatesTags: [{ type: 'USERS', id: 'LIST' }]
    }),

    //lock and unlock user account by admin
    lockAndUnlockAccount: builder.mutation({
      query: ({adminId, userId}) => ({
        url: `/lockAndUnlockAccount/${adminId}/${userId}`,
        method: 'PUT',
        body: ''
      }),
      invalidatesTags: [{ type: 'USERS', id: 'LIST' }]
    }),

    //toggle editor role
    toggleEditorRole: builder.mutation({
      query: ({adminId, userId}) => ({
        url: `/toggleEditorRole/${adminId}/${userId}`,
        method: 'PUT',
        body: ''
      }),
      invalidatesTags: [{ type: 'USERS', id: 'LIST' }]
    }),

    //toggle admin role
    toggleAdminRole: builder.mutation({
      query: ({adminId, userId}) => ({
        url: `/toggleAdminRole/${adminId}/${userId}`,
        method: 'PUT',
        body: ''
      }),
      invalidatesTags: [{ type: 'USERS', id: 'LIST' }]
    }),

    //remove user hubby
    removeHobby: builder.mutation({
      query: (userId) => ({
        url: `/remove_hobby/${userId}`,
        method: 'PATCH',
        body: ''
      }),
      invalidatesTags: [{ type: 'USERS', id: 'LIST' }]
    }),
    
    //delete my account
    deleteAccount: builder.mutation({
      query: (userId) => ({
        url: `/delete_myaccount/${userId}`,
        method: 'DELETE',
        body: ''
      }),
      invalidatesTags: [{ type: 'USERS', id: 'LIST' }]
    }),

    //delete accounts by admin
    deleteAccountByAdmin: builder.mutation({
      query: ({adminId, userId}) => ({
        url: `/deleteAccount?adminId=${adminId}&userId=${userId}`,
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