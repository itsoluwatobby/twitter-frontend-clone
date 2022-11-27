import { posts } from '../../../data/data'
import { useState } from 'react';
import { Tweets } from './Tweets';

export const Main = () => {
 

  return (
    <article className='h-screen bg-white w-full bg-transparent flex flex-col gap-2'>
      {
        posts.map(post => (
          <Tweets key={post.id} post={post} />
        ))
      }
    </article>
  )
}
// <div key={post.name} className=''>
            {/* top */}// </div>