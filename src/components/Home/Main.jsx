import { useState } from 'react';
import { Tweets } from './Tweets';
import { useFetchPostsQuery } from '../../features/tweets/tweetApiSlice';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUser, selectCurrentUser } from '../../features/auth/authSlice';
import { allTweets } from '../../features/users/usersSlice';

export const Main = ({ current }) => {
  const currentUser = useSelector(selectCurrentUser)
  const {data, isLoading, isSuccess} = useFetchPostsQuery()
  const [tweets, setTweets] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setTweets(data)
    dispatch(allTweets(data))
  }, [data, currentUser])

  useEffect(() => {
    dispatch(getCurrentUser(current))
  }, [current])

  return (
    <article className='h-screen bg-white w-full bg-transparent flex flex-col gap-2'>
      {isLoading ? <p>Fetching tweets...</p>
      :
      isSuccess ?
        (
          tweets?.length ?
            tweets.map(tweet => (
            <Tweets key={tweet?._id} post={tweet} />
          ))
          : <p>No tweets available</p>
        ) 
        : <p>Erorr loading posts</p> 
      }
    </article>
  )
}
// <div key={post.name} className=''>
            {/* top */}// </div>