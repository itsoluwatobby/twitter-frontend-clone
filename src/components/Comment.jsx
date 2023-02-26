import { CgProfile } from 'react-icons/cg';
import { BsPatchCheckFill } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import { CommentRes } from './Tweetpage/CommentRes';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import { openComment } from '../features/users/usersSlice'

export const Comment = ({ 
  post, user, resize, setCreateComment
}) => {
  const dispatch = useDispatch();

  const switchComment = () => {
    dispatch(openComment(false))
    setCreateComment(false)
  }

  return (
    <article className='z-10 absolute w-[85%] rounded-lg bg-white top-2 shadow-2xl flex flex-col p-3 pb-4'>
      <FaTimes 
        onClick={switchComment}
        className='cursor-pointer text-2xl font-medium translate-x-[410px] text-gray-600'
      />
      <div className='w-full flex items-center'>
        {user?.profilePic ?
          <img src={user?.profilePic} alt={user?.firstName} 
            className='cursor-pointer w-12 h-12 rounded-full object-cover flex-none'
          /> : <CgProfile className='text-6xl text-gray-600'/>
        }
        <div className='flex-auto flex flex-col w-full ml-3'>
          {/* name */}
          <div className='flex items-center justify-between w-full'>
            <div className='flex items-center gap-1'>
              <p className='flex items-center gap-1'>
                <Link to={`tweet/profile/${user?._id}`}>
                  <span className='capitalize font-semibold cursor-pointer hover:underline'>{(resize || user?.firstName.length < 6 ? user?.firstName : user?.firstName.slice(0, 10)+'...')}</span>
                </Link>
                {/* checkmark here */}
                <BsPatchCheckFill className='text-blue-500 text-[19px]'/>
                <Link to={`tweet/profile/${user?._id}`}>
                  <span className='text-gray-600 cursor-pointer'>{(resize || user?.email.length < 6 ? user?.email : user?.email.slice(0, 10)+'...')}</span>
                </Link>
                <span className='text-gray-600'>&#x2022;</span>
              </p>
                <span className='text-gray-700'>{format(new Date(post?.postDate.split('T')[0]), 'MMM dd')}</span>
            </div>
          </div>
          <Link to={`/tweet/tweetPage/${post?._id}/${user?._id}`}>
            <p className='w-full'>{post?.body}
            </p>
          </Link>
        </div>
      </div>
      <div className='flex items-center gap-10 ml-5'>
        <p className='h-16 w-[2px] bg-gray-300'></p>
        <p className='flex items-center gap-1.5'>Replying to 
          <Link to={`tweet/profile/${user?._id}`}>
            <span className='text-blue-500 underline cursor-pointer'>{user?.email}</span>
          </Link>
        </p>
      </div>
      <div className='flex items-center w-full gap-2 h-full pt-1'>
          <img src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' alt='' className='flex-none w-12 h-12 rounded-full object-cover cursor-pointer'/>
          <CommentRes 
            postId={post?._id} 
            userId={user?._id}
            //refetch={refetch}
          />
        </div>  
    </article>
  )
}
