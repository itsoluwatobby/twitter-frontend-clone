import { FiShare } from 'react-icons/fi';
import { AiOutlineComment, AiFillHeart, AiOutlineRetweet, AiOutlineHeart } from 'react-icons/ai';

export const TweetBase = ({post, like, centerTweet, postResponse}) => {

  return (
    <div className='flex items-center gap-24 ml-16 w-full'>
      <div className='flex items-center gap-3 cursor-pointer'>
        <p className='text-gray-700 cursor-pointer hover:bg-blue-100 hover:text-blue-500 p-[4px] hover:rounded-full text-[20px]'>
          <AiOutlineComment />
        </p>
        <span className='text-gray-700 hover:text-blue-500'>{post?.comment || centerTweet && postResponse?.comment}</span>
      </div>
      <div className='flex items-center gap-3 cursor-pointer hover:text-green-500'>
        <p className='text-gray-700 cursor-pointer hover:bg-green-100 hover:text-green-500 p-[4px] hover:rounded-full text-[20px]'>
          <AiOutlineRetweet />
        </p>
        <span className='text-gray-700 hover:text-green-500'>{post?.retweet || centerTweet && postResponse?.retweet}</span>
      </div>
      <div className='flex items-center gap-3 cursor-pointer hover:text-red-400'>
        <p className='text-gray-700 cursor-pointer hover:bg-red-200 hover:text-red-400 p-[4px] hover:rounded-full text-[20px]'>
          {
            like ? 
            <AiFillHeart className='text-red-500'/>
            : <AiOutlineHeart />
          }
        </p>
        <span className='text-gray-700 hover:text-red-400'>{post?.heart || centerTweet && postResponse?.heart}</span>
      </div>
      <div className='text-gray-700 cursor-pointer hover:bg-gray-100 hover:text-blue-400 p-[4px] hover:rounded-full text-[20px]'>
        {<FiShare /> || centerTweet && <FiShare />}
      </div>
    </div>
  )
}
