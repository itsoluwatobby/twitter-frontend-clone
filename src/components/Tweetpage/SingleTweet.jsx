import React from 'react'
import { FiShare } from 'react-icons/fi';
import { AiOutlineComment, AiFillHeart, AiOutlineRetweet, AiOutlineHeart } from 'react-icons/ai';
import { BsPatchCheckFill } from 'react-icons/bs'
import { RiMoreLine } from 'react-icons/ri'
import { Card } from '../Home/Card';
import { useState } from 'react';
import { useLikeAndUnlikeTweetsMutation } from '../../features/tweets/likeAndUnlikeTweetApiSlice';
import {format} from 'date-fns';
import { CommentRes } from './CommentRes';

export const SingleTweet = (
  { tweet, user, refetch }) => {
  const [display2, setDisplay2] = useState(false)
  const [likeAndUnlikeTweets] = useLikeAndUnlikeTweetsMutation()

  const handleLike = async() => {
    await likeAndUnlikeTweets({userId: user?._id, postId: tweet?._id})
    refetch()
  }

  return (
    <div className='bg-white w-full'>
     
      <div className='flex flex-col gap-4 pl-4 pr-4 relative'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            {
              <img src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' alt='' className='flex-none w-16 h-16 rounded-full object-cover cursor-pointer'/>
              // : <CgProfile className='text-2xl text-gray'/>
            }
            <div className='flex flex-col cursor-pointer'>
              <p className='font-[600] flex items-center gap-1'>
                <span 
                   onMouseOver={() => setDisplay2(true)}
                   onMouseLeave={() => setDisplay2(false)}
                  className='hover:underline'>{user?.firstName}</span>
                <BsPatchCheckFill className='text-lg text-blue-600'/>
              </p>
              <p className='text-gray-600'>{user?.username || user?.email}</p>
            </div>
          </div>
          <div className='p-2 hover:bg-blue-50 rounded-full cursor-pointer'>
            <RiMoreLine />
          </div>
        </div>
        {/* Post */}
        <p className='text-lg font-medium'>{tweet?.body}</p>
        <div className='flex items-center gap-1.5 font-medium text-small whitespace-nowrap'>
          <div className='flex items-center gap-1 font-medium hover:underline cursor-pointer'>
            <p className='flex items-center gap-1'>
              <span className='text-gray-500'>{false ? '8:58 PM' : format(new Date(tweet?.postDate.split('T')[0]), 'p')}</span>
              <span className='text-gray-400'>&#x2022;</span>
            </p>
            <p className='flex items-center gap-1'>
              <span className='text-gray-500'>{false ? 'MAY 19, 2022' : format(new Date(tweet?.postDate.split('T')[0]), 'M-dd-yy')}</span>
              <span className='text-gray-500'>&#x2022;</span>
            </p>
          </div>
          <p className='text-gray-500 hover:underline cursor-pointer whitespace-nowrap'>Twitter for andriod</p>
        </div>
        <hr />
        <div className='flex items-center gap-6 text-small'>
          <p className='flex items-center gap-1 cursor-pointer hover:underline'>
            <span className='font-medium'>{tweet?.isShared?.length}</span>
            <span className='text-gray-500'>Retweets</span>
          </p>
          <p className='flex items-center gap-1 cursor-pointer hover:underline'>
            <span className='font-medium'>100</span>
            <span className='text-gray-500'>Quote Tweets</span>
          </p>
          <p className='flex items-center gap-1 cursor-pointer hover:underline'>
            <span className='font-medium'>{tweet?.likes?.length}</span>
            <span className='text-gray-500'>Likes</span>
          </p>
        </div>
        <hr />
        <div className='flex items-center gap-24 justify-center midscreen:gap-16 w-full'>
          <p className='flex items-center gap-2 text-gray-500 cursor-pointer hover:bg-blue-100 hover:text-blue-500 p-1 hover:rounded-full text-2xl'>
            <AiOutlineComment />
            <span>{tweet?.commentIds?.length}</span>
          </p>
          <p className='text-gray-500 cursor-pointer hover:bg-green-100 hover:text-green-500 p-[4px] hover:rounded-full text-2xl'>
            <AiOutlineRetweet />
          </p>
          <p className='text-gray-500 cursor-pointer hover:bg-red-200 hover:text-red-400 p-[4px] hover:rounded-full text-2xl flex items-center gap-2'>
            {
              tweet?.likes.includes(user?._id) ? 
                <AiFillHeart onClick={handleLike} className={`${tweet?.likes.includes(user?._id) && 'text-red-500'}`}/>
                : 
                <AiOutlineHeart onClick={handleLike} />
            }
            <span className={`${tweet?.likes.includes(user?._id) ? 'text-red-500' : 'text-gray-700'}`}>{tweet?.likes?.length}</span>
          </p>
          <div className='text-gray-500 cursor-pointer hover:bg-gray-100 hover:text-blue-400 p-[4px] hover:rounded-full text-2xl'>
            <FiShare />
          </div>
        </div>
        <hr />
        <div className='flex items-center w-full gap-2 h-full'>
          <img src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' alt='' className='flex-none w-16 h-16 rounded-full object-cover cursor-pointer'/>
          <CommentRes 
            postId={tweet?._id} 
            userId={user?._id}
            refetch={refetch}
          />
        </div>  
        <hr />
        {display2 && <Card singleUser={user} singleTweet={true}  setDisplay2={setDisplay2}/>}
      </div>
    </div>
  )
}
