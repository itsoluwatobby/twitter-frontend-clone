import React from 'react'
import { Outlet } from 'react-router-dom'
import { LeftSide } from './Home/LeftSide'
import { RightSide } from './Home/RightSide'

export const TweetLayout = () => {
  return (
    <section className='flex h-screen container'>
      <LeftSide />
      <Outlet />
      <RightSide />
    </section>
  )
}
