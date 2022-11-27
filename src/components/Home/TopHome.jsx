import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { BsStars } from 'react-icons/bs'

export const TopHome = ({singleTweet}) => {
  return (
    <div className={singleTweet  ? '' : 'flex w-full items-center justify-between text-2xl sticky top-0 p-3 pr-4 pl-4 z-50 bg-white'}>
      {singleTweet ? 
      <nav className='bg-white flex items-center font-semibold tracking-wider gap-8 p-3 text-lg'>
        <BiArrowBack />
        <h1>Tweet</h1>
      </nav>
      : 
      <>
        <h1 className='font-semibold'>Home</h1>
        <BsStars />
      </>
      }
    </div>
  )
}
