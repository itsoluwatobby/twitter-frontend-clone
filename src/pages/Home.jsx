import React from 'react'
import { Center } from '../components/Home/Center'
import { LeftSide } from '../components/Home/LeftSide'
import { RightSide } from '../components/Home/RightSide'

export const Home = () => {
  return (
    <main className='h-screen w-full overflow-y-scroll overflow-x-hidden flex items-center z-10 pb-4 pl-10 pr-10'>
      <LeftSide />
      <Center />
      <RightSide />
    </main>
  )
}
