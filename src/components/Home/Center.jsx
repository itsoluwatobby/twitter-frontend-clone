import React from 'react'
import { useGetUserQuery } from '../../features/users/userApiSlice'
import { Main } from './Main'
import { Top } from './Top'
import { TopHome } from './TopHome'

export const Center = () => {
  const userId = localStorage.getItem('userId');
  const {data: current} = useGetUserQuery(userId);

  return (
    <section className='flex-auto h-full border-l border-r w-full overflow-x-hidden overflow-y-scroll'>
      <main className='pb-10 flex flex-col justify-center'>
        <TopHome />
        <Top />
        <Main current={current}/>
      </main>
    </section>
  )
}
