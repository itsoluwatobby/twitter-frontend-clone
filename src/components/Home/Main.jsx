import { posts } from '../../../data/data'
import { useState } from 'react';
import { Tweets } from './Tweets';
import { useFetchPostsQuery } from '../../features/tweets/tweetApiSlice';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUser, selectCurrentUser } from '../../features/auth/authSlice';
import { allTweets } from '../../features/users/usersSlice';
import { useGetUserQuery } from '../../features/users/userApiSlice';

export const Main = () => {
  const userId = localStorage.getItem('userId');
  const currentUser = useSelector(selectCurrentUser)
  const {data, isLoading} = useFetchPostsQuery(userId)
  const {data: current} = useGetUserQuery(userId);
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
      tweets?.length ?
        tweets.map(tweet => (
          <Tweets key={tweet?._id} post={tweet} />
        )): <p>No tweets available</p>
      }
    </article>
  )
}
// <div key={post.name} className=''>
            {/* top */}// </div>