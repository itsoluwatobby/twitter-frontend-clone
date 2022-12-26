import React from 'react'
import { useState } from 'react'
import { useCreateCommentMutation } from '../../features/comment/commentApiSlice'
import {sub} from 'date-fns'

export const CommentRes = ({ postId, userId, refetch }) => {
  const [comment, setComment] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [createComment, {isLoading, isError}] = useCreateCommentMutation()

  const onCommentChangeHandler = e => setComment(e.target.value)

  const postComment = async() => {
    if(!comment) return
    try{ 
      const commentDate = sub(new Date(), { minutes: 0 }).toISOString();
      const newComment = {postId, userId, body: comment, commentDate}
      await createComment(newComment).unwrap();
      //dispatch(setCredentials(userData))
      refetch();
      setComment('');
   }
   catch(isError){
      let message;
      isError.status === 400 ? message = isError?.data :  
      isError.status === 403 ? message = isError?.data : 
      message ='no server response'
      setErrorMessage(message)
   }
  }

  return (
    <div className='flex-auto h-full flex items-center pl-2 pr-2 w-full'>
      <input 
        type="text" 
        value={comment} 
        placeholder='Tweet your reply'
        className='flex-auto placeholder:font-medium placeholder:text-[20px] h-full pl-0 pr-0 p-2 border-none focus:outline-none text-lg'
        onChange={onCommentChangeHandler}
      />
      <button 
        onClick={postComment}
        className='flex-none rounded-full p-2 pl-5 pr-5 bg-blue-500 text-white font-semibold'>
          {isLoading ? 'Replying...' : 'Reply'}
      </button>
    </div>
  )
}
