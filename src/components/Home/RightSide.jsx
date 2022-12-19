import {BiSearch} from 'react-icons/bi'
import {MdDoubleArrow} from 'react-icons/md'
import { RiMoreLine, RiMailAddLine } from 'react-icons/ri'
import { TRENDS } from '../../../data/data'

export const RightSide = () => {
  return (
    <aside className='midscreen:hidden relative flex-none w-[30%] pt-4 pr-2 pl-2 h-full flex flex-col space-y-2 items-center'>
      <div className='w-[97%] flex flex-col gap-4'>
        <div className='flex p-2.5 rounded-2xl items-center gap-2 bg-gray-200 w-full'>
          <BiSearch className='text-[22px]'/>
          <input 
            type="text" 
            placeholder='Search Twitter'
            className='border-none pl-2 placeholder:text-gray-500 focus:outline-none h-full w-full bg-transparent'
          />
        </div>
        <div className='p-3 bg-gray-100 rounded-md flex flex-col gap-2.5 w-full'>
          <h2 className='font-semibold pr-2 pl-2'>Trends for you</h2>
          {
            TRENDS.map((trend, index) => (
              <div key={index} className='cursor-pointer pr-2 pl-2 flex flex-col hover:bg-gray-200 hover:rounded-md'>
                <p className='capitalize text-gray-600 flex items-center justify-between'>
                  <span className='text-[15px]'>{trend?.title}</span>
                  <RiMoreLine />
                </p>
                <p className='font-semibold'>{trend?.hashTag}</p>
                <p className='text-gray-600 text-[15px] capitalize'>{trend.tweets}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className='message cursor-pointer fixed flex items-center justify-between w-[380px] bg-white p-3 right-5 bottom-0 border rounded-tl-lg rounded-tr-lg'>
        <p className='font-semibold text-[22px] flex-auto'>Messages</p>
        <div className='flex-none flex items-center justify-between w-14 text-2xl'>
        <div className='cursor-pointer hover:bg-gray-200 p-[6px] hover:rounded-full text-[20px]'>
          <RiMailAddLine className='cursor-pointer'/>
        </div>
        <div className='cursor-pointer hover:bg-gray-200 p-[6px] hover:rounded-full text-[20px]'>
          <MdDoubleArrow className='rotate-[268deg] cursor-pointer'/>
        </div>
        </div>
      </div>
    </aside>
  )
}
