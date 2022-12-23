import React from 'react'
import { Main } from './Main'
import { Top } from './Top'
import { TopHome } from './TopHome'

export const Center = () => {
  return (
    <section className='flex-auto h-full border-l border-r w-full overflow-x-hidden overflow-y-scroll'>
      <main className='flex flex-col justify-center'>
        <TopHome />
        <Top />
        <Main />
      </main>
    </section>
  )
}
