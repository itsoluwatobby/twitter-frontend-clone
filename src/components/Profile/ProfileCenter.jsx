import React from 'react'
import { TopHome } from '../Home/TopHome'
import { Top } from './Top'

export const ProfileCenter = () => {
  return (
    <main className='flex-auto flex flex-col overflow-y-scroll border-l border-r overflow-x-hidden'>
      <TopHome profile/>
      <Top />
    </main>
  )
}
