import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { postResponses } from '../../../data/data'
import { useGetUserQuery } from '../../features/users/userApiSlice'
import { getSingleTweet, getUserTweets } from '../../features/users/usersSlice'
import { TopHome } from '../Home/TopHome'
import { Tweets } from '../Home/Tweets'
import { SingleTweet } from './SingleTweet'

export const CenterTweet = () => {
  const {tweetId} = useParams()
  const singleTweet = useSelector(state => getSingleTweet(state, tweetId))
  const user = useSelector(state => getUserTweets(state, tweetId));
  //const {data: user} = useGetUserQuery(singleTweet?.userId)
  return (
    <main className='flex-auto flex flex-col overflow-y-scroll border-l border-r overflow-x-hidden'>
      <TopHome centerTweet/>
      <SingleTweet tweet={singleTweet} user={user}/>
      {
        postResponses.map(postResponse => (
          <Tweets centerTweet={true} key={postResponse.id} postResponse={postResponse}/>
        ))
      }
    </main>
  )
}
