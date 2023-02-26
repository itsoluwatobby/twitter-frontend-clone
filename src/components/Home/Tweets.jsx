import { RiMoreLine } from 'react-icons/ri';
import { BsPatchCheckFill } from 'react-icons/bs';
import { Card } from './Card';
import { useState } from 'react';
import { TweetBase } from './TweetBase';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import {formatDistanceToNow, parseISO, format} from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { getUserTweets, openComment, switchComment } from '../../features/users/usersSlice';
import { useGetUserQuery } from '../../features/users/userApiSlice';
import { useEffect } from 'react';
import { Comment } from '../Comment';

export const Tweets = (
  { post, centerTweet, postComment }) => {
  const [display, setDisplay] = useState(false)
  const [userRes, setUserRes] = useState(false)
  const [createComment, setCreateComment] = useState(false)
  //const user = useSelector(state => getUserTweets(state, post?._id))
  const {data: user} = useGetUserQuery(post?.userId)
  const {data: userComment} = useGetUserQuery(postComment?.userId)
  const [width, setWidth] = useState(undefined);
  const [resize, setResize] = useState(false);
  const dispatch = useDispatch();

  const closeComment = () => {
    dispatch(openComment(false));
  }

  useEffect(() => {
    const widthListener = () => setWidth(window.innerWidth);
    window.addEventListener('resize', widthListener)

    return () => window.removeEventListener('resize', widthListener)
  }, [window])

  useEffect(() => {
    width >= 1168 ? setResize(true) : setResize(false)
  }, [width])

  return (
    <div className='relative hover:bg-slate-100 pr-4 pl-4 pt-2 pb-2 flex flex-col border-b-[1px] w-full gap-2'>
      <div className='w-full flex items-center'>
        {centerTweet && userComment?.profilePic ?
          <img src={centerTweet ? userComment?.profilePic : user?.profilePic} alt={centerTweet ? userComment?.firstName : user?.firstName} 
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
                <Link to={`${centerTweet ? `tweet/profile/${postComment?._id}` : `tweet/profile/${user?._id}`}`}>
                  <span className='capitalize font-semibold cursor-pointer hover:underline'>{centerTweet ? (resize || userComment?.firstName.length < 6 ? userComment?.firstName : userComment?.firstName.slice(0, 10)+'...') : (resize || user?.firstName.length < 6 ? user?.firstName : user?.firstName.slice(0, 10)+'...')}</span>
                </Link>
                {/* checkmark here */}
                <BsPatchCheckFill className='text-blue-500 text-[19px]'/>
                <Link to={`${centerTweet ? `tweet/profile/${postComment?._id}` : `tweet/profile/${user?._id}`}`}>
                  <span className='text-gray-600 cursor-pointer'>{centerTweet ? (resize || userComment?.email.length < 6 ? userComment?.email : userComment?.email.slice(0, 10)+'...') : (resize || user?.email.length < 6 ? user?.email : user?.email.slice(0, 10)+'...')}</span>
                </Link>
                <span className='text-gray-600'>&#x2022;</span>
              </p>
                <span className='text-gray-700'>{centerTweet ? format(new Date(postComment?.commentDate.split('T')[0]), 'MMM dd') : format(new Date(post?.postDate.split('T')[0]), 'MMM dd')}</span>
            </div>
            <RiMoreLine className='text-2xl cursor-pointer'/>
          </div>
          {/* body */}
          {postComment && 
            <p className='text-gray-600 flex items-center gap-1'>
              <span>Replying to</span>
              <span 
                 onMouseEnter={() =>setUserRes(true)
                 }
                 onMouseLeave={() =>setUserRes(false)
                 }
                className='text-blue-600 cursor-pointer hover:underline'>{userComment?.username || userComment?.email}</span>
            </p>
          }
          <Link to={`/tweet/tweetPage/${post?._id}/${user?._id}`}>
            <p 
              onClick={closeComment}
              className='w-full'>{centerTweet ? (postComment?.body.length >= 75 ? postComment?.body.slice(0, 75)+'...' : postComment?.body) : (post?.body.length >= 75 ? post?.body.slice(0, 75)+'...' : post?.body)}
            </p>
          </Link>
        </div>
      </div>
      {/* mid for picture ....optional */}
      <div className='ml-16'>
        {
          // post?.picture ?
          //   <img src={post?.picture} alt={post.name} 
          //     className='w-full h-60 object-cover rounded-2xl'
          //   /> 
          //   : 
          //   centerTweet && postComment?.picture ?
          //     <img src={postComment?.picture} alt={postComment.name} 
          //       className='w-full h-60 object-cover rounded-2xl'
          //     /> : ''
        }
      </div>
      {/* base */}
      <TweetBase 
        post={post} centerTweet={true} 
        postComment={postComment}
        setCreateComment={setCreateComment}
      />
      {display ? <Card user={user} setDisplay={setDisplay} centerTweet postComment={postComment} userRes={userRes} setUserRes={setUserRes}/>
      : 
      userRes && <Card userRes={userRes} setUserRes={setUserRes}/>
      }
      {createComment &&
        <Comment Tweets
          post={post} 
          user={user} 
          resize={resize}
          createComment={createComment}
          setCreateComment={setCreateComment}
        />
      }
    </div>
  )
}
