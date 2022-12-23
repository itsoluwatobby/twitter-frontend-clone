import { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { selectCurrentUser } from '../../features/auth/authSlice';
import { useFollowUserMutation, useUnfollowUserMutation } from '../../features/users/userApiSlice';

export const Card = ({user, singleUser, setDisplay, singleTweet, setDisplay2, postResponse, centerTweet, userRes, setUserRes}) => {
  const [follow, setFollow] = useState(true);
  const userId = localStorage.getItem('userId');
  const {pathname} = useLocation();
  const currentUser = useSelector(selectCurrentUser)
console.log(currentUser)
  const [followUser] = useFollowUserMutation();
  const [unfollowUser] = useUnfollowUserMutation();


  return (
    <div 
      onMouseEnter={() => singleTweet && setDisplay2(true) && !userRes || userRes && setUserRes(true) || setDisplay(true)
      }
      onMouseLeave={() => singleTweet && setDisplay2(false) && !userRes || userRes && setUserRes(false) || setDisplay(false)
      }
      className={`option z-30 rounded-3xl bg-white flex flex-col pt-4 pb-4 p-3 gap-2.5 w-80 absolute top-[32px] left-0 ${userRes && 'top-[56px]'}`}>
      <div className='relative'>
        {
          <img src={(userRes || singleTweet) && 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' || centerTweet && postResponse?.profilePic || user?.profilePic} alt='' className='flex-none w-20 h-20 rounded-full object-cover cursor-pointer'/>
          // : <CgProfile className='text-2xl text-gray'/>
        }
        {
          ((singleTweet && pathname.includes('tweetPage')) && singleUser?._id !== userId) ? 
              ( 
                currentUser?.following.includes(singleUser?._id) ?
                <button 
                  onClick={() => unfollowUser({followerId: userId, followingId: singleUser?._id})}
                  onMouseOver={() => setFollow(prev => !prev)}
                  onMouseLeave={() => setFollow(true)}
                  className={`absolute -top-2 right-1 rounded-full p-2 pl-4 pr-4 font-[500] bg-transparent border border-gray-300 mt-2 ${follow ? 'bg-blue-200' : 'text-red-500 hover:bg-red-100'}`}>
                  {follow ? 'Following' : 'Unfollow'}
                </button>
                :
                <button 
                  onClick={() => followUser({followerId: userId, followingId: singleUser?._id})}
                  onMouseOver={() => setFollow(prev => !prev)}
                  onMouseLeave={() => setFollow(true)}
                  className={`absolute -top-2 right-1 rounded-full p-2 pl-4 pr-4 font-[500] bg-transparent border border-gray-300 mt-2 ${follow ? '' : 'text-red-500 hover:bg-red-100'}`}>
                  Follow
                </button>
              ) 
            : (centerTweet && pathname.includes('tweetPage')) && (
              postResponse?.userId !== userId) ? 
              ( 
                currentUser?.following.includes(postResponse?.userId) ?
                <button 
                  onClick={() => unfollowUser({followerId: userId, followingId: postResponse?.userId})}
                  onMouseOver={() => setFollow(prev => !prev)}
                  onMouseLeave={() => setFollow(true)}
                  className={`absolute -top-2 right-1 rounded-full p-2 pl-4 pr-4 font-[500] bg-transparent border border-gray-300 mt-2 ${follow ? 'bg-blue-200' : 'text-red-500 hover:bg-red-100'}`}>
                  {follow ? 'Following' : 'Unfollow'}
                </button>
                :
                <button 
                  onClick={() => followUser({followerId: userId, followingId: postResponse?.userId})}
                  onMouseOver={() => setFollow(prev => !prev)}
                  onMouseLeave={() => setFollow(true)}
                  className={`absolute -top-2 right-1 rounded-full p-2 pl-4 pr-4 font-[500] bg-transparent border border-gray-300 mt-2 ${follow ? '' : 'text-red-500 hover:bg-red-100'}`}>
                  Follow
                </button>
              ) 
              : pathname === '/' && user?._id !== userId && 

              ( currentUser?.following.includes(user?._id) ?
                <button 
                  onClick={() => unfollowUser({followerId: userId, followingId: user?._id})}
                  onMouseOver={() => setFollow(prev => !prev)}
                  onMouseLeave={() => setFollow(true)}
                  className={`absolute -top-2 right-1 rounded-full p-2 pl-4 pr-4 font-[500] bg-transparent border border-gray-300 mt-2 ${follow ? 'bg-blue-200' : 'text-red-500 hover:bg-red-100'}`}>
                  {follow ? 'Following' : 'Unfollow'}
                </button>
                :
                <button 
                  onClick={() => followUser({followerId: userId, followingId: user?._id})}
                  onMouseOver={() => setFollow(prev => !prev)}
                  onMouseLeave={() => setFollow(true)}
                  className={`absolute -top-2 right-1 rounded-full p-2 pl-4 pr-4 font-[500] bg-transparent border border-gray-300 mt-2 ${follow ? '' : 'text-red-500 hover:bg-red-100'}`}>
                  Follow
                </button>
              )
          }
      </div>
      <div className='flex flex-col'>
        <p className='capitalize font-semibold cursor-pointer hover:underline'>
          <Link to={singleTweet ? `tweet/profile/${singleUser?._id}` : (centerTweet && `tweet/profile/${postResponse?._id}`) ? `tweet/profile/${user?._id}` : ''}>
            <span>
              {(userRes || singleTweet) && singleUser?.firstName || centerTweet && postResponse?.name || user?.firstName}
            </span>
          </Link>
          {/* checkmark here */}
        </p>
        <Link to={singleTweet ? `tweet/profile/${singleUser?._id}` : (centerTweet && `tweet/profile/${postResponse?._id}`) ? `tweet/profile/${user?._id}` : ''}>
          <p className='text-gray-600 cursor-pointer'>
            {(userRes || singleTweet) && (singleUser?.username || singleUser?.email) || centerTweet && (postResponse?.username || postResponse?.firstName) || (user?.username || user?.email)}
          </p>
        </Link>
      </div>
      <p className='flex flex-col text-gray-700'>
      {/* user description */}
        <span>
          {(userRes || singleTweet) && singleUser?.desc || centerTweet && postResponse?.desc || user?.desc}
        </span>
      {/* user contact */}
        <span>+2545879522325</span>
      </p>
      <div className='flex w-full items-center gap-6'>
        <p className='cursor-pointer hover:underline flex gap-1.5 items-center'>
          {/* following number */}
          <span className='font-[600]'>{(userRes || singleTweet) && singleUser?.following.length || user?.following.length}</span>
          <span className='font-[500] text-gray-500'>Following</span>
        </p>
        <p className='flex gap-1.5 items-center cursor-pointer hover:underline'>
          {/* following number */}
          <span className='font-[600]'>{(userRes || singleTweet) && singleUser?.followers.length || user?.followers.length}</span>
          <span className='font-[500] text-gray-500'>Followers</span>
        </p>
      </div>
      {/* followed by */}
      <div className='w-full'>
        {/* atmost friends 3 images */}
        <div className='relative flex-none w-12 flex items-center'>
          {
            <>
              <img src='https://images.unsplash.com/photo-1657214059212-104dac959c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' alt='' className='flex-none w-7 h-7 border border-2 border-white rounded-full object-cover cursor-pointer absolute top-0 z-20'/>
              <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' alt='' className='flex-none w-7 h-7 border border-2 border-white rounded-full object-cover cursor-pointer absolute top-0 left-3 z-10'/>
              <img src='https://images.unsplash.com/photo-1587304878169-505d63fd6b0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGVsb24lMjBtdXNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' alt='' className='flex-none w-7 h-7 border border-2 border-white rounded-full object-cover cursor-pointer absolute top-0 left-6'/>
            </>
            // : <CgProfile className='text-2xl text-gray'/>
          }
        </div>
        <p className='cursor-pointer hover:underline text-gray-600 font-[500] ml-16 text-[15px]'>Followed by friend1, friend2 and 20 others you know</p>
      </div>
    </div> 
  )
}
