import {BsStars} from 'react-icons/bs';
import {AiOutlineFileGif} from 'react-icons/ai';
import {IoMdSwitch} from 'react-icons/io';
import {VscSmiley, VscLocation} from 'react-icons/vsc';
import {TbCalendarStats, TbPhoto} from 'react-icons/tb';

export const Top = () => {
  return (
    <header className='flex flex-col w-full pl-2 pr-2 pb-3 gap-1 border-b-[1px]'>
      <div className='flex w-full items-center justify-between text-2xl'>
        <h1 className='font-semibold ml-3'>Home</h1>
        <BsStars />
      </div>
      <div className='cursor-pointer hover:bg-opacity-50 flex p-2.5 rounded-2xl items-center bg-transparent w-full'>
        <div className='w-14 h-14 rounded-full bg-blue-500 flex-none'></div>
        <input 
            type="text"
            placeholder="What's happening?"
            className='flex-auto ml-2 mt-4 h-12 border-none pl-2 placeholder:text-gray-500 placeholder:text-[22px] focus:outline-none bg-transparent'
          />
      </div>
      <div className='flex items-center w-full justify-between'>
        <div className='flex items-center gap-4 ml-12 text-2xl text-blue-500'>
          <TbPhoto className='cursor-pointer hover:rounded-full hover:bg-slate-300 '/>
          <AiOutlineFileGif className='cursor-pointer hover:rounded-full hover:bg-slate-300 '/>
          <IoMdSwitch className='cursor-pointer hover:rounded-full hover:bg-slate-300 '/>
          <VscSmiley className='cursor-pointer hover:rounded-full hover:bg-slate-300 '/>
          <TbCalendarStats className='cursor-pointer hover:rounded-full hover:bg-slate-300 '/>
          <VscLocation className='cursor-pointer hover:rounded-full hover:bg-slate-300 '/>
        </div>
        <button className='rounded-full p-2 pl-5 pr-5 bg-blue-500 text-white font-semibold'>Tweet</button>
      </div>
    </header>
  )
}
