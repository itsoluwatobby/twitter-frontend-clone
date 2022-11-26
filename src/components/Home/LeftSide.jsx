import {RiHome7Fill, RiFileList2Line, RiMoreLine, RiHashtag} from 'react-icons/ri'
import {CgProfile} from 'react-icons/cg'
import {CiMail} from 'react-icons/ci'
import {CgMoreO} from 'react-icons/cg'
import {BsBookmark, BsBell} from 'react-icons/bs'
import {BiMale} from 'react-icons/bi'
import { FaTwitter } from 'react-icons/fa'

export const LeftSide = () => {
  return (
    <aside className='pb-2 pr-3 bg-white z-10 flex-none w-[22%] h-screen flex flex-col space-y-4 pt-4'>
      <FaTwitter className='text-blue-500 text-3xl flex-none ml-5'/>
      <div className='flex-auto flex flex-col w-[85%] m-auto'>
        <div className='flex pt-3 pb-3 items-center gap-4 cursor-pointer hover:rounded-md hover:bg-gray-200 text-[20px]'>
          <RiHome7Fill className='text-3xl'/>
          <h1>Home</h1>
        </div>
        <div className='flex items-center pt-3 pb-3 gap-4 cursor-pointer hover:rounded-md hover:bg-gray-200 text-[20px]'>
          <RiHashtag className='text-3xl'/>
          <h1>Explore</h1>
        </div>
        <div className='flex items-center pt-3 pb-3 gap-4 cursor-pointer hover:rounded-md hover:bg-gray-200'>
          <BsBell className='text-3xl'/>
          <h1 className='text-[20px]'>Notifications</h1>
        </div>
        <div className='flex items-center pt-3 pb-3 gap-4 cursor-pointer hover:rounded-md hover:bg-gray-200 text-[20px]'>
          <CiMail className='text-3xl'/>
          <h1>Messages</h1>
        </div>
        <div className='flex items-center pt-3 pb-3 gap-4 cursor-pointer hover:rounded-md hover:bg-gray-200 text-[20px]'>
          <BsBookmark className='text-3xl'/>
          <h1>Bookmarks</h1>
        </div>
        <div className='flex items-center pt-3 pb-3 gap-4 cursor-pointer hover:rounded-md hover:bg-gray-200 text-[20px]'>
          <RiFileList2Line className='text-3xl'/>
          <h1>Lists</h1>
        </div>
        <div className='flex items-center pt-3 pb-3 gap-4 cursor-pointer hover:rounded-md hover:bg-gray-200 text-[20px]'>
          <BiMale className='text-3xl'/>
          <h1>Profile</h1>
        </div>
        <div className='flex items-center pt-3 pb-3 gap-4 cursor-pointer hover:rounded-md hover:bg-gray-200 text-[20px]'>
          <CgMoreO className='text-3xl'/>
          <h1>More</h1>
        </div>
        <button className='rounded-full p-3 bg-blue-500 mt-2'>Tweet</button>
      </div>
      <div className='flex items-center gap-2 m-auto h-20 w-full p-2 pl-3 pr-3 hover:bg-gray-300 hover:rounded-full'>
        <img src='https://images.unsplash.com/photo-1634150872480-1a193b9ee47f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGVsb24lMjBtdXNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' alt='' className='flex-none w-12 h-12 rounded-full object-cover cursor-pointer'/>
        <div className='w-full flex items-center gap-4 justify-between'>
          <p className='flex flex-col cursor-pointer'>
            <span className='font-semibold'>Oluwatobiloba</span>
            <span className='text-gray-800'>@itsoluwatobby</span>
          </p>
          <RiMoreLine className='cursor-pointer text-2xl font-semibold'/>
        </div>
      </div>
    </aside>
  )
}
