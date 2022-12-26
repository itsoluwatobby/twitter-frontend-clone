import React, { Suspense, lazy } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useGetCommentsInPostQuery } from '../../features/comment/commentApiSlice'
import { useFetchSinglePostQuery } from '../../features/tweets/tweetApiSlice'
import { useGetUserQuery } from '../../features/users/userApiSlice'
import { getSingleTweet, getUserTweets } from '../../features/users/usersSlice'
import { TopHome } from '../Home/TopHome'
import { Tweets } from '../Home/Tweets'
import { SingleTweet } from './SingleTweet'

//const SingleTweet = lazy(() => import('./SingleTweet'))

export const CenterTweet = () => {
  const {tweetId, userId} = useParams()
  //const singleTweet = useSelector(state => getSingleTweet(state, tweetId))
  const { data: singleTweet, isLoading: loading, refetch } = useFetchSinglePostQuery(tweetId)
  const user = useSelector(state => getUserTweets(state, tweetId));
  //const { data: user } = useGetUserQuery(userId)
  const { data: postComments, isLoading, isSuccess } = useGetCommentsInPostQuery(tweetId)

  return (
    <main className='flex-auto flex flex-col overflow-y-scroll border-l border-r overflow-x-hidden w-full pb-10'>
      <TopHome centerTweet/>
      {!loading &&
        <SingleTweet 
          tweet={singleTweet}
          user={user}
          postComments={postComments}
          refetch={refetch}
        />
      }
      {isLoading ? <p>Page loading...</p>
      :
      isSuccess && postComments?.length ? 
        postComments.map(postComment => (
          <Tweets centerTweet={true} key={postComment._id} postComment={postComment}/>
        )) : <p>no comments</p> 
      }
    </main>
  )
}
