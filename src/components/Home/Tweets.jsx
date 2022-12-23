import { RiMoreLine } from 'react-icons/ri';
import { BsPatchCheckFill } from 'react-icons/bs';
import { Card } from './Card';
import { useState } from 'react';
import { TweetBase } from './TweetBase';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import {formatDistanceToNow, parseISO} from 'date-fns';
import { useSelector } from 'react-redux';
import { getUserTweets } from '../../features/users/usersSlice';

export const Tweets = ({post, centerTweet, postResponse}) => {
  const [display, setDisplay] = useState(false)
  const [userRes, setUserRes] = useState(false)
  const user = useSelector(state => getUserTweets(state, post?._id))

  const formatTime = (date) => {
    const dateTime = parseISO(date)
    return formatDistanceToNow(dateTime)
  }

  return (
    <div className='relative bg-white hover:bg-slate-100 pr-4 pl-4 pt-2 pb-2 flex flex-col border-b-[1px] w-full gap-2'>
      <div className='w-full flex items-center'>
        {centerTweet && postResponse?.profilePic ?
          <img src={centerTweet ? postResponse?.profilePic : user?.profilePic} alt={centerTweet ? postResponse?.name : user?.firstName} 
            className='cursor-pointer w-12 h-12 rounded-full object-cover flex-none'
          /> : <CgProfile className='text-6xl text-gray-600'/>
        }
        <div className='flex-auto flex flex-col w-full ml-3'>
          {/* name */}
          <div className='flex items-center justify-between w-full'>
            <div className='flex items-center gap-1'>
              <p 
                onMouseOver={() => setDisplay(true)}
                onMouseLeave={() => setDisplay(false)}
                className='flex items-center gap-1'>
                <Link to={`${centerTweet ? `tweet/profile/${postResponse?._id}` : `tweet/profile/${user?._id}`}`}>
                  <span className='capitalize font-semibold cursor-pointer hover:underline'>{centerTweet ? postResponse?.name : user?.firstName}</span>
                </Link>
                {/* checkmark here */}
                <BsPatchCheckFill className='text-blue-500 text-[19px]'/>
                <Link to={`${centerTweet ? `tweet/profile/${postResponse?._id}` : `tweet/profile/${user?._id}`}`}>
                  <span className='text-gray-600 cursor-pointer'>{centerTweet ? postResponse?.username : (user?.username || user?.email)}</span>
                </Link>
                <span className='text-gray-600'>&#x2022;</span>
              </p>
                <span className='text-gray-700'>{centerTweet ? postResponse.dateTime : (post?.postDate)}</span>
            </div>
            <RiMoreLine className='text-2xl cursor-pointer'/>
          </div>
          {/* body */}
          {postResponse && 
            <p className='text-gray-600 flex items-center gap-1'>
              <span>Replying to</span>
              <span 
                 onMouseEnter={() =>setUserRes(true)
                 }
                 onMouseLeave={() =>setUserRes(false)
                 }
                className='text-blue-600 cursor-pointer hover:underline'>{user?.username || user?.email}</span>
            </p>
          }
          <Link to={`/tweet/tweetPage/${post?._id}`}><p className='w-full'>{centerTweet ? postResponse?.tweet : post?.body.length >= 75 ? post?.body.slice(0, 75)+'...' : post?.body}</p></Link>
        </div>
      </div>
      {/* mid for picture ....optional */}
      <div className='ml-16'>
        {
          post?.picture ?
            <img src={post?.picture} alt={post.name} 
              className='w-full h-60 object-cover rounded-2xl'
            /> 
            : 
            centerTweet && postResponse?.picture ?
              <img src={postResponse?.picture} alt={postResponse.name} 
                className='w-full h-60 object-cover rounded-2xl'
              /> : ''
        }
      </div>
      {/* base */}
      <TweetBase post={post} centerTweet={true} postResponse={postResponse}/>
      {display ? <Card user={user} setDisplay={setDisplay} centerTweet postResponse={postResponse} userRes={userRes} setUserRes={setUserRes}/>
      : 
      userRes && <Card userRes={userRes} setUserRes={setUserRes}/>
      }
    </div>
  )
}
