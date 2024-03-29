import {createSlice} from '@reduxjs/toolkit'

const usersSlice = createSlice({
  name: 'users',
  initialState: { users: [], tweets: [], createComment: false },
  reducers: {
    allUsers: (state, action) => {
      state.users = action.payload
    },
    allTweets: (state, action) => {
      state.tweets = action.payload
    },
    openComment: (state, action) => {
      state.createComment = action.payload
    }
  }
})

export const selectAllUsers = state => state?.users?.users
export const selectAllTweets = state => state?.users?.tweets
export const switchComment = state => state?.users?.createComment

export const { allUsers, allTweets, openComment } = usersSlice.actions

export const getSingleUser = (state, userId) => {
  return state?.users?.users.find(user => user?._id === userId)
}

export const getSingleTweet = (state, tweetId) => {
  return state?.users?.tweets.find(tweet => tweet?._id === tweetId)
}

export const getUserTweets = (state, tweetId) => {
  const targetTweet = state?.users?.tweets.find(tweet => tweet?._id === tweetId)
  const userTweet = state?.users?.users.find(user => user?._id === targetTweet?.userId)
  return userTweet
}

export const getUserInTweet = (state, tweetId) => {
  state?.users?.tweets.find(tweet => tweet?._id === tweetId)
}

export default usersSlice.reducer