import { apiSlice } from "../../../app/api/apiSlice";

function providesList(resultsId, tagTypes){
  return resultsId ? [...resultsId.map(({id}) => ({ type: tagTypes, id })), 
                      { type: tagTypes, id: 'LIST' }]
                     : [{ type: tagTypes, id: 'LIST' }]
}

export const responseApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    //fetching single response
    getSingleResponse: builder.query({
      query: ({commentId, responseId}) => `/getResponse/${commentId}/${responseId}`,
      providesTags: (result) => providesList(result, 'RESPONSE')
    }),

    //fetch all user response
    getAllResponse: builder.query({
      query: (userId) => `/getAllResponse/${userId}`,
      transformResponse: response => {
        return response?.data.sort((a, b) => b?.responseDate.localeCompare(a?.responseDate))
      },
      providesTags: (result) => providesList(result, 'RESPONSE')
    }),

    //fetch all response in a comment
    getResponseInComment: builder.query({
      query: ({userId, commentId}) => `/getResponseInComment/${userId}/${commentId}`,
      transformResponse: response => {
        return response?.data.sort((a, b) => b?.responseDate.localeCompare(a?.responseDate))
      },
      providesTags: (result) => providesList(result, 'RESPONSE')
    }),

    //create a new response from user
    createResponse: builder.mutation({
      query: (newResponse) => ({
        url: '/createResponse',
        method: 'POST',
        body: newResponse
      }),
      invalidatesTags: [{ type: 'RESPONSE', id: 'LIST' }]
    }),

    //update response by user
    editResponse: builder.mutation({
      query: ({responseId, responseUpdate}) => ({
        url: `/editResponse/${responseId}`,
        method: 'PUT',
        body: responseUpdate
      }),
      invalidatesTags: [{ type: 'RESPONSE', id: 'LIST' }]
    }),

    //delete user response by user
    deleteResponse: builder.mutation({
      query: ({userId, responseId}) => ({
        url: `/deleteResponse/${userId}/${responseId}`,
        method: 'DELETE',
        body: ''
      }),
      invalidatesTags: [{ type: 'RESPONSE', id: 'LIST' }]
    }),

    //delete user response by post owner
    deleteResponseByPostOwner: builder.mutation({
      query: ({userId, commentId, responseId}) => ({
        url: `/deleteResponseByPostOwner/${userId}/${commentId}/${responseId}`,
        method: 'DELETE',
        body: ''
      }),
      invalidatesTags: [{ type: 'RESPONSE', id: 'LIST' }]
    }),
  })
})

export const {
  useGetAllResponseQuery, useGetSingleResponseQuery, useGetResponseInCommentQuery, 
  useCreateResponseMutation, useEditResponseMutation, useDeleteResponseMutation, 
  useFetchUserCommentsByAdminQuery, useDeleteResponseByPostOwnerMutation
} = responseApiSlice