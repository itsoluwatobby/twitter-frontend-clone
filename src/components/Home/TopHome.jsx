import React from 'react'
import { BiArrowBack, BiSearch } from 'react-icons/bi'
import { BsStars } from 'react-icons/bs'
import { RiSettings2Line } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectCurrentUser } from '../../features/auth/authSlice'

export const TopHome = ({ centerTweet, profile, explore, user }) => {
  const navigate = useNavigate()
  const currentUser = useSelector(selectCurrentUser)

  return (
    <div className={profile && 'bg-white flex items-center w-full bg-opacity-[0.97] gap-7 p-3 pt-1 pb-1 z-50 sticky top-0' ||explore && 'bg-white flex items-center w-full justify-center p-3 pt-2 pb-2 sticky top-0 z-50 bg-opacity-[0.97]' || centerTweet && 'bg-white flex items-center font-semibold tracking-wider gap-8 p-3 text-lg sticky top-0 z-50 bg-opacity-[0.97]' || 'flex w-full items-center justify-between text-2xl sticky top-0 p-3 pr-4 pl-4 z-50'}>
      {centerTweet && 
        <>
          <div 
            onClick={() => navigate(-1)}
            className='p-2 cursor-pointer rounded-full hover:bg-gray-200'>
            <BiArrowBack />
          </div>
          <h1 className='cursor-pointer'>Tweet</h1>
        </>
        ||
        explore && 
        <>
          <div className='bg-gray-100 rounded-full text-lg flex-auto flex items-center p-3'>
            <BiSearch className='text-[22px] text-gray-500 cursor-pointer'/>
            <input 
              type="text" 
              placeholder='Search Twitter'
              className='border-none pl-2 placeholder:text-gray-500 focus:outline-none h-full bg-transparent'
            />
          </div>
          <RiSettings2Line className='flex-none w-[10%] flex items-end cursor-pointer text-2xl text-gray-500'/>
        </> 
        ||
        profile && 
        <>
          <div 
            onClick={() => navigate(-1)}
            className='text-2xl p-2 cursor-pointer rounded-full hover:bg-gray-200'>
            <BiArrowBack />
          </div>
          <div className='flex flex-col'>
            <h1 className='tracking-wide text-[20px] cursor-pointer font-[700]'>{user?.username || user?.email}</h1>
            <p className='text-gray-600 text-base'>1,255 Tweets</p>
          </div>
        </>
        || 
        <>
          <h1 className='font-semibold'>Home</h1>
          <BsStars />
        </> 
      }
    </div>
  )
}
