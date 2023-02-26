import React from 'react'
import { useSelector } from 'react-redux'
import { useGetUserQuery } from '../../features/users/userApiSlice'
import { switchComment } from '../../features/users/usersSlice'
import { Main } from './Main'
import { Top } from './Top'
import { TopHome } from './TopHome'

export const Center = () => {
  const userId = localStorage.getItem('userId');
  const {data: current} = useGetUserQuery(userId);
  const createCommentBg = useSelector(switchComment);

  return (
    <section className={`flex-auto h-full border-l border-r w-full overflow-x-hidden overflow-y-scroll ${createCommentBg ? 'bg-gray-400' : 'bg-white'}`}>
      <main className='pb-10 flex w-full flex-col justify-center relative'>
        <TopHome />
        <Top />
        <Main current={current}/>
      </main>
    </section>
  )
}
