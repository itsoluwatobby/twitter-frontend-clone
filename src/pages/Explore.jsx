import React from 'react'
import { ExploreCenter } from '../components/Explore/ExploreCenter'
import { LeftSide } from '../components/Home/LeftSide'
import { RightSide } from '../components/Home/RightSide'

export const Explore = () => {
  return (
    <section className='flex max-w-fit h-screen'>
      <ExploreCenter />
    </section>
  )
}
