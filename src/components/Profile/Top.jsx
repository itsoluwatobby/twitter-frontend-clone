import {VscLocation} from 'react-icons/vsc';
import {TbBallon} from 'react-icons/tb';
import {MdOutlineDateRange} from 'react-icons/md';
import {RiLink} from 'react-icons/ri';
import { Tweets } from '../Home/Tweets';
import { format } from 'date-fns';

export const Top = ({user}) => {
  console.log(user)

  return (
    <section className='flex flex-col'>
      <div className='relative w-full'>
        <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60" alt="user" 
        className='w-full h-52 object-cover'
        />
        <img src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60" alt="user" 
        className='absolute rounded-full w-36 h-36 object-cover border-4 top-[140px] left-4'
        />
        <button 
          className='absolute top-56 border-gray-300 right-2 rounded-full p-2 pl-5 pr-5 font-medium border hover:bg-gray-100'>Edit Profile</button>
      </div>
      <div className='mt-20 p-3 flex flex-col gap-4'>
        <p className='flex flex-col text-[20px] font-[700] tracking-wider'>
          <span>{user?.firstName}</span>
          <span className='text-base font-[400] text-gray-600'>@{user?.username || user?.email}</span>
        </p>
        <p>{user?.desc}</p>
        <div className='flex flex-col gap-1'>
          <div className='flex items-center gap-3'>
            <p className='flex items-center gap-1'>
              <VscLocation className='text-2xl text-gray-800'/>
              <span className='text-gray-700 capitalize'>{user?.city}</span>
            </p>
            {/* extra link optional */}
            <p className='flex items-center gap-1'>
              <RiLink className='text-2xl text-gray-600'/>
              <a href='plait.fb.tw.com' target='_blank' className='text-blue-700 capitalize'>plait.fb.tw.com</a>
            </p>
            <p className='flex items-center gap-1'>
              <TbBallon className='text-2xl text-gray-700'/>
             {
              user?.dob ?
              <span>
                {`Born ${format(new Date(user?.dob.split('T')[0]), 'MMM dd')}`}
              </span> : <span>Birth day</span>
              }
            </p>
          </div>
          <p className='flex items-center gap-1'>
            <MdOutlineDateRange className='text-2xl text-gray-600'/>
            <span className='text-gray-700 capitalize'>Joined {format(new Date(user?.registrationDate.split('T')[0]), 'MMM dd, yyyy')}</span>
          </p>
        </div>
      </div>
      <div className='border-b-[1px] flex w-full items-center '>
          <p className={`grid place-content-center p-4 pr-12 pl-12 font-medium cursor-pointer hover:bg-gray-300`}>Tweets</p>
          <p className={`grid place-content-center p-4 pr-12 pl-12 font-medium cursor-pointer hover:bg-gray-300`}>Tweets & replies</p>
          <p className={`grid place-content-center p-4 pr-12 pl-12 font-medium cursor-pointer hover:bg-gray-300`}>Media</p>
          <p className={`grid place-content-center p-4 pr-12 pl-12 font-medium cursor-pointer hover:bg-gray-300`}>Likes</p>
        </div>
        {/* <Tweets /> */}
    </section>
  )
}
