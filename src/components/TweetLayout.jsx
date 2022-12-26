import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { selectCurrentToken } from '../features/auth/authSlice'
import { useGetNewAccessTokenQuery } from '../features/users/authApiSlice'
import { LeftSide } from './Home/LeftSide'
import { RightSide } from './Home/RightSide'

export const TweetLayout = () => {
  //const {data, isLoading, refetch} = useGetNewAccessTokenQuery()
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const currentToken = useSelector(selectCurrentToken);

  // useEffect(() => {
  //   !currentToken && refetch()
  // }, [])

  return (
    <section className='flex h-screen container pr-8'>
      <LeftSide />
      <>
      {/* {!isLoggedIn ? 
          <Outlet /> :
            isLoading ? 
              <p>Loading page...</p>  */}
        <Outlet />
      </>
      <RightSide />
    </section>
  )
}
