import React from 'react'
import { postResponses } from '../../../data/data'
import { TopHome } from '../Home/TopHome'
import { Tweets } from '../Home/Tweets'
import { SingleTweet } from './SingleTweet'

export const CenterTweet = () => {
  return (
    <main className='flex-auto flex flex-col overflow-y-scroll border-l border-r overflow-x-hidden'>
      <TopHome centerTweet/>
      <SingleTweet />
      {
        postResponses.map(postResponse => <Tweets centerTweet={true} postResponse={postResponse}/>)
      }
    </main>
  )
}
