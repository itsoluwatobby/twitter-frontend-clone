import React from 'react'
import { FiShare } from 'react-icons/fi';
import { AiOutlineComment, AiFillHeart, AiOutlineRetweet, AiOutlineHeart } from 'react-icons/ai';
import { BsPatchCheckFill } from 'react-icons/bs'
import { RiMoreLine } from 'react-icons/ri'
import { TopHome } from '../Home/TopHome'
import { Card } from '../Home/Card';
import { useState } from 'react';

export const SingleTweet = () => {
  const [display2, setDisplay2] = useState(false)

  return (
    <div className='bg-white'>
     
      <div className='flex flex-col gap-4 pl-4 pr-4 relative'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <img src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' alt='' className='flex-none w-16 h-16 rounded-full object-cover cursor-pointer'/>
            <div className='flex flex-col cursor-pointer'>
              <p className='font-[600] flex items-center gap-1'>
                <span 
                   onMouseOver={() => setDisplay2(true)}
                   onMouseLeave={() => setDisplay2(false)}
                  className='hover:underline'>YabaLeftOnline</span>
                <BsPatchCheckFill className='text-lg text-blue-600'/>
              </p>
              <p className='text-gray-600'>@yabaleftonline</p>
            </div>
          </div>
          <div className='p-2 hover:bg-blue-50 rounded-full cursor-pointer'>
            <RiMoreLine />
          </div>
        </div>
        {/* Post */}
        <p className='text-lg font-medium'>What turns you on?</p>
        <div className='flex items-center gap-1 font-medium'>
          <div className='flex items-center gap-1 font-medium hover:underline cursor-pointer'>
            <p className='flex items-center gap-1'>
              <span className='text-gray-500'>8:48</span>
              <span className='text-gray-400'>&#x2022;</span>
            </p>
            <p className='flex items-center gap-1'>
              <span className='text-gray-500'>Nov 26, 2022</span>
              <span className='text-gray-500'>&#x2022;</span>
            </p>
          </div>
          <p className='text-gray-500 hover:underline cursor-pointer'>Twitter for andriod</p>
        </div>
        <hr />
        <div className='flex items-center gap-6'>
          <p className='flex items-center gap-1 cursor-pointer hover:underline'>
            <span className='font-medium'>10</span>
            <span className='text-gray-500'>Retweets</span>
          </p>
          <p className='flex items-center gap-1 cursor-pointer hover:underline'>
            <span className='font-medium'>100</span>
            <span className='text-gray-500'>Quote Tweets</span>
          </p>
          <p className='flex items-center gap-1 cursor-pointer hover:underline'>
            <span className='font-medium'>45</span>
            <span className='text-gray-500'>Likes</span>
          </p>
        </div>
        <hr />
        <div className='flex items-center justify-around w-full'>
          <p className='text-gray-500 cursor-pointer hover:bg-blue-100 hover:text-blue-500 p-1 hover:rounded-full text-2xl'>
            <AiOutlineComment />
          </p>
          <p className='text-gray-500 cursor-pointer hover:bg-green-100 hover:text-green-500 p-[4px] hover:rounded-full text-2xl'>
            <AiOutlineRetweet />
          </p>
          <p className='text-gray-500 cursor-pointer hover:bg-red-200 hover:text-red-400 p-[4px] hover:rounded-full text-2xl'>
            {false ? 
            <AiFillHeart className='text-red-500'/>
              : <AiOutlineHeart />
            }
          </p>
          <div className='text-gray-500 cursor-pointer hover:bg-gray-100 hover:text-blue-400 p-[4px] hover:rounded-full text-2xl'>
            <FiShare />
          </div>
        </div>
        <hr />
        <div className='flex items-center w-full gap-2 h-full'>
          <img src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' alt='' className='flex-none w-16 h-16 rounded-full object-cover cursor-pointer'/>
          <div className='flex-auto h-full flex items-center pl-2 pr-2 w-full'>
            <input 
              type="text" 
              name="" 
              placeholder='Tweet your reply'
              className='flex-auto placeholder:font-medium placeholder:text-[20px] h-full pl-0 pr-0 p-2 border-none focus:outline-none text-lg'
            />
            <button 
              className='flex-none rounded-full p-2 pl-5 pr-5 bg-blue-500 text-white font-semibold'>
                Reply
            </button>
          </div>
        </div>  
        <hr />
        {display2 && <Card singleTweet={true} setDisplay2={setDisplay2}/>}
      </div>
    </div>
  )
}
