import { RiMoreLine } from 'react-icons/ri';
import { BsPatchCheckFill } from 'react-icons/bs';
import { Card } from './Card';
import { useState } from 'react';
import { TweetBase } from './TweetBase';
import { Link } from 'react-router-dom';

export const Tweets = ({post, centerTweet, postResponse}) => {
  const [like, setLike] = useState(false);
  const [display, setDisplay] = useState(false)
  const [userRes, setUserRes] = useState(false)

  return (
    <div className='relative bg-white hover:bg-slate-100 pr-4 pl-4 pt-2 pb-2 flex flex-col border-b-[1px] w-full gap-2'>
      <div className='w-full flex items-center'>
        <img src={centerTweet ? postResponse.profilePic : post?.profilePic} alt={centerTweet ? postResponse?.name : post?.name} 
          className='cursor-pointer w-12 h-12 rounded-full object-cover flex-none'
        />
        <div className='flex-auto flex flex-col w-full ml-3'>
          {/* name */}
          <div className='flex items-center justify-between w-full'>
            <div className='flex items-center gap-1'>
              <p 
                onMouseOver={() => setDisplay(true)}
                onMouseLeave={() => setDisplay(false)}
                className='flex items-center gap-1'>
                <span className='capitalize font-semibold cursor-pointer hover:underline'>{centerTweet ? postResponse.name : post?.name}</span>
                {/* checkmark here */}
                <BsPatchCheckFill className='text-blue-500 text-[19px]'/>
                <span className='text-gray-600 cursor-pointer'>{centerTweet ? postResponse.username : post?.username}</span>
                <span className='text-gray-600'>&#x2022;</span>
              </p>
                <span className='text-gray-700'>{centerTweet ? postResponse.dateTime : post?.dateTime}</span>
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
                className='text-blue-600 cursor-pointer hover:underline'>@yabaleftonline</span>
            </p>
          }
          <Link to='/tweet/tweetPage'><p className='w-full'>{centerTweet ? postResponse.tweet : post?.tweet}</p></Link>
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
      <TweetBase post={post} like={like} centerTweet={true} postResponse={postResponse}/>
      {display ? <Card post={post} setDisplay={setDisplay} centerTweet postResponse={postResponse} user userRes={userRes} setUserRes={setUserRes}/>
      : 
      userRes && <Card userRes={userRes} setUserRes={setUserRes}/>
      }
    </div>
  )
}
