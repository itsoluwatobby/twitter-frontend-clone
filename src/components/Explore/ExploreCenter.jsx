import React from 'react'
import { TopHome } from '../Home/TopHome'

export const ExploreCenter = () => {
  return (
    <main className='flex-auto flex flex-col overflow-y-scroll border-l border-r overflow-x-hidden'>
      <TopHome explore/>
    </main>
  )
}
