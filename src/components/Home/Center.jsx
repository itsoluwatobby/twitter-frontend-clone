import React from 'react'
import { Main } from './Main'
import { Top } from './Top'

export const Center = () => {
  return (
    <section className='flex-auto h-full border-l-[1px] border-r-[1px]'>
      <main className='flex flex-col justify-center'>
        <Top />
        <Main />
      </main>
    </section>
  )
}
