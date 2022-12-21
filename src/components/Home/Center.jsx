import React from 'react'
import { Main } from './Main'
import { Top } from './Top'
import { TopHome } from './TopHome'

export const Center = () => {
  return (
    <section className='flex-auto h-full border-l-[1px] border-r-[1px] max-w-full'>
      <main className='flex flex-col justify-center'>
        <TopHome />
        <Top />
        <Main />
      </main>
    </section>
  )
}
