import React from 'react'
import { TopHome } from '../Home/TopHome'
import { Top } from './Top'
import { useSelector } from 'react-redux';
import { getSingleUser } from '../../features/users/usersSlice';
import { useParams } from 'react-router-dom';
import { useGetUserQuery } from '../../features/users/userApiSlice';

export const ProfileCenter = () => {
  const {userId} = useParams()
  const user = useSelector(state => getSingleUser(state, userId))
  //const {data: user} = useGetUserQuery(userId)

  return (
    <main className='flex-auto flex flex-col overflow-y-scroll border-l border-r overflow-x-hidden'>
      <TopHome profile user={user}/>
      <Top user={user}/>
    </main>
  )
}
