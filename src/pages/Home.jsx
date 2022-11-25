import React from 'react'
import { Center } from '../components/Home/Center'
import { LeftSide } from '../components/Home/LeftSide'
import { RightSide } from '../components/Home/RightSide'

export const Home = () => {
  return (
    <main className='h-screen w-full flex items-center pt-4 pb-4 pl-10 pr-10'>
      <LeftSide />
      <Center />
      <RightSide />
    </main>
  )
}
