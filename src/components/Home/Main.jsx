import { posts } from '../../../data/data'
import { useState } from 'react';
import { Card } from './Card';
import { Tweets } from './Tweets';

export const Main = () => {
  const [like, setLike] = useState(false);
  const [display, setDisplay] = useState(false)

  return (
    <article className='h-screen bg-white w-full bg-transparent flex flex-col gap-2'>
      {
        posts.map(post => (
          <div key={post.name} className='relative bg-white hover:bg-slate-100 pr-4 pl-4 pt-2 pb-2 flex flex-col border-b-[1px] w-full gap-2'>
            {/* top */}
            <Tweets post={post} like={like} setDisplay={setDisplay} display/>
            <Card display={display} post={post} setDisplay={setDisplay}/>
          </div>
        ))
      }
    </article>
  )
}
