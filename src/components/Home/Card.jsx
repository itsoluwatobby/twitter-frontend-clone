import { useState } from 'react'

export const Card = ({display, post, setDisplay}) => {
  const [follow, setFollow] = useState(true)
  
  return (
    <>
    {
      display && (
        <div 
          onMouseEnter={() => setDisplay(true)}
          onMouseLeave={() => setDisplay(false)}
          className='options rounded-3xl bg-white flex flex-col p-3 gap-2 w-80 absolute top-[33px] left-0'>
          <div className='relative'>
            <img src={post?.profilePic} alt='' className='flex-none w-16 h-16 rounded-full object-cover cursor-pointer'/>
            <button 
              onMouseOver={() => setFollow(prev => !prev)}
              onMouseLeave={() => setFollow(true)}
              className={`absolute top-0 right-1 rounded-full p-2 pl-4 pr-4 font-[500] bg-transparent border border-gray-300 mt-2 ${follow ? '' : 'text-red-500 hover:bg-red-100'}`}>{follow ? 'Following' : 'Unfollow'}</button>
          </div>
          <div className='flex flex-col'>
            <p className='capitalize font-semibold cursor-pointer hover:underline'>
              <span>{post?.name}</span>
              {/* checkmark here */}
            </p>
            <p className='text-gray-600 cursor-pointer'>{post?.username}</p>
          </div>
          <p className='flex flex-col text-gray-700'>
          {/* user description */}
            <span>
              News. Entertainment. Celebrities. Viral. contact@yaabaleftonline.ng
            </span>
          {/* user contact */}
            <span>+2545879522325</span>
          </p>
          <div className='flex w-full items-center gap-6'>
            <p className='flex gap-1.5 items-center'>
              {/* following number */}
              <span className='font-[600]'>50</span>
              <span className='font-[500] text-gray-600'>Following</span>
            </p>
            <p className='flex gap-1.5 items-center'>
              {/* following number */}
              <span className='font-[600]'>50M</span>
              <span className='font-[500] text-gray-600'>Followers</span>
            </p>
          </div>
          {/* followed by */}
          <div className='w-full'>
            {/* atmost friends 3 images */}
            <div className='relative flex-none w-12 flex items-center'>
              <img src='https://images.unsplash.com/photo-1657214059212-104dac959c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' alt='' className='flex-none w-7 h-7 border border-2 border-white rounded-full object-cover cursor-pointer absolute top-0 z-20'/>
              <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' alt='' className='flex-none w-7 h-7 border border-2 border-white rounded-full object-cover cursor-pointer absolute top-0 left-3 z-10'/>
              <img src='https://images.unsplash.com/photo-1587304878169-505d63fd6b0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGVsb24lMjBtdXNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' alt='' className='flex-none w-7 h-7 border border-2 border-white rounded-full object-cover cursor-pointer absolute top-0 left-6'/>
            </div>
            <p className='text-gray-600 font-[400] ml-16 text-[15px]'>Followed by friend1, friend2 and 20 others you know</p>
          </div>
        </div>
      )
    }
    </>
  )
}
