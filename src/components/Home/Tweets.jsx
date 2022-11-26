import { RiMoreLine } from 'react-icons/ri';
import { FiShare } from 'react-icons/fi';
import { AiOutlineComment, AiFillHeart, AiOutlineRetweet, AiOutlineHeart } from 'react-icons/ai';

export const Tweets = ({post, like, setDisplay}) => {
  return (
    <>
      <div className='w-full flex items-center'>
        <img src={post?.profilePic} alt={post?.name} 
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
                <span className='capitalize font-semibold cursor-pointer hover:underline'>{post?.name}</span>
                {/* checkmark here */}
                <span className='text-gray-600 cursor-pointer'>{post?.username}</span>
                <span className='text-gray-600'>&#x2022;</span>
              </p>
                <span className='text-gray-700'>{post?.dateTime}</span>
            </div>
            <RiMoreLine className='text-2xl cursor-pointer'/>
          </div>
          {/* body */}
          <p>{post?.tweet}</p>
        </div>
      </div>
      {/* mid for picture ....optional */}
      <div className='ml-16'>
        {
          post?.picture ?
          <img src={post?.picture} alt={post.name} 
            className='w-full h-60 object-cover rounded-2xl'
          /> : ''
        }
      </div>
      {/* base */}
      <div className='flex items-center gap-24 ml-16 w-full'>
        <div className='flex items-center gap-3 cursor-pointer'>
          <p className='text-gray-700 cursor-pointer hover:bg-blue-100 hover:text-blue-500 p-[4px] hover:rounded-full text-[20px]'>
            <AiOutlineComment />
          </p>
          <span className='text-gray-700 hover:text-blue-500'>{post?.comment}</span>
        </div>
        <div className='flex items-center gap-3 cursor-pointer hover:text-green-500'>
          <p className='text-gray-700 cursor-pointer hover:bg-green-100 hover:text-green-500 p-[4px] hover:rounded-full text-[20px]'>
            <AiOutlineRetweet />
          </p>
          <span className='text-gray-700 hover:text-green-500'>{post?.comment}</span>
        </div>
        <div className='flex items-center gap-3 cursor-pointer hover:text-red-400'>
          <p className='text-gray-700 cursor-pointer hover:bg-red-200 hover:text-red-400 p-[4px] hover:rounded-full text-[20px]'>
            {like ? 
            <AiFillHeart className='text-red-500'/>
              : <AiOutlineHeart />
            }
          </p>
          <span className='text-gray-700 hover:text-red-400'>{post?.comment}</span>
        </div>
        <div className='text-gray-700 cursor-pointer hover:bg-gray-100 hover:text-blue-400 p-[4px] hover:rounded-full text-[20px]'>
          <FiShare />
        </div>
      </div>
    </>
  )
}
