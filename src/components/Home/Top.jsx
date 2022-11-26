import {BsStars, BsPersonCheck} from 'react-icons/bs';
import {BiCheck} from 'react-icons/bi';
import {AiOutlineFileGif} from 'react-icons/ai';
import {FaGlobeAmericas} from 'react-icons/fa';
import {IoMdSwitch, IoIosPeople, IoIosArrowDown} from 'react-icons/io';
import {VscSmiley, VscLocation} from 'react-icons/vsc';
import {TbCalendarStats, TbPhoto} from 'react-icons/tb';
import { useEffect, useState } from 'react';

export const Top = () => {
  const [what, setWhat] = useState(false);
  const [everyone, setEveryone] = useState(false);
  const [reply, setReply] = useState(false);
  const [count, setCount] = useState(0);

  const handleTweet = async() => {
    setWhat(false)
    setEveryone(false)
    setReply(false)
  }

  return (
    <header className='bg-white relative flex flex-col w-full pl-2 pr-2 pb-3 gap-1 border-b-[1px]'>
      <div className='flex w-full items-center justify-between text-2xl'>
        <h1 className='font-semibold ml-3'>Home</h1>
        <BsStars />
      </div>
      <div className='cursor-pointer hover:bg-opacity-50 flex p-2.5 rounded-2xl items-center bg-transparent w-full'>
        <div className='absolute top-12 w-14 h-14 rounded-full bg-blue-500 flex-none'></div>
        {/* <img src={post?.profilePic} alt={post?.name} 
                className='absolute top-12 cursor-pointer w-12 h-12 rounded-full object-cover flex-none'
              /> */}
        <div className='pb-2 ml-[70px] flex flex-col w-full border-b-[1px]'>
         { what &&
            <div 
              onClick={() => setEveryone(prev => !prev)}
              className='flex items-center gap-1 text-blue-500 font-[500] p-1 border rounded-2xl tracking-wide w-28 pl-2 pr-2 hover:bg-slate-100'>
              <p>Everyone</p>
              <IoIosArrowDown />
            </div>
          }
          <input 
            type="text"
            // ref={whatsRef}
            placeholder="What's happening?"
            onFocus={() => setWhat(prev => !prev)}
            className='flex-auto mt-4 h-12 border-none pl-2 placeholder:text-gray-500 placeholder:text-[22px] focus:outline-none bg-transparent'
          />
          {what && 
            <div 
              onClick={() => setReply(prev => !prev)}
              className='flex items-center gap-1 text-blue-500 font-[500] p-1 tracking-wide pl-2 pr-2 hover:bg-slate-200 w-48 rounded-full'>
              <FaGlobeAmericas />
              <p>Everyone can reply</p>
            </div>}
            {everyone && <div className='option absolute top-[90px] left-0 w-[280px] bg-white flex flex-col gap-2 rounded-2xl pt-4 pb-4'>
              <p className='flex-none font-semibold text-[22px] ml-3'>Choose audience</p>
              <div className='flex-auto flex flex-col w-full'>
                <div className='flex items-center gap-2 p-4 hover:bg-gray-200 rounded-2xl'>
                  <div className='flex-none grid place-content-center font-[500] p-2 bg-blue-600 rounded-full w-12 h-12'>
                  <FaGlobeAmericas className='text-white text-2xl'/>
                  </div>
                  <p className='font-semibold tracking-wider w-full flex items-center justify-between'>
                    <span>Everyone</span>
                    <BiCheck className='text-blue-500 font-[600] text-2xl'/>
                  </p>
                </div>
                <div className='flex tracking-wide items-center gap-2 p-4 hover:bg-gray-200 rounded-2xl'>
                  <div className='flex-none grid place-content-center font-[500] p-2 bg-green-700 rounded-full w-12 h-12'>
                  <IoIosPeople className='text-white text-3xl'/>
                  </div>
                  <div className='font-semibold flex flex-col'>
                    <p>Twitter Circle</p>
                    <div className='flex justify-between items-center'>
                      <p className='flex items-center gap-1'>
                        <span>{count}</span>
                        <span className='text-gray-500 font-[500]'>People</span>
                      </p>
                      <p className='pl-3 pr-3 rounded-full hover:bg-gray-400'>
                        <span className='border-b-2 border-black'>Edit</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
            {reply && <div className='option absolute top-[180px] left-0 w-[340px] bg-white flex flex-col gap-2 rounded-2xl pt-4 pb-4'>
              <div className='flex-none flex flex-col font-semibold text-[18px] ml-3'>
                <p>Who can reply?</p>
                <p className='flex flex-col text-gray-500 text-base font-[500]'>
                  <span>Choose who can reply to this Tweet.</span>
                  <span>Anyone mentioned can always reply</span>
                </p>
              </div>
              <div className='flex-auto flex flex-col w-full'>
                <div className='flex items-center gap-2 p-3 hover:bg-gray-200 rounded-2xl'>
                  <div className='flex-none grid place-content-center font-[500] p-2 bg-blue-600 rounded-full w-12 h-12'>
                  <FaGlobeAmericas className='text-white text-2xl'/>
                  </div>
                  <p className='font-semibold tracking-wider w-full flex items-center justify-between'>
                    <span>Everyone</span>
                    <BiCheck className='text-blue-500 font-[600] text-2xl'/>
                  </p>
                </div>
                <div className='flex tracking-wide items-center gap-2 p-3 hover:bg-gray-200 rounded-2xl'>
                  <div className='flex-none grid place-content-center font-[500] p-2 bg-blue-600 rounded-full w-12 h-12'>
                  <BsPersonCheck className='text-white text-2xl'/>
                  </div>
                  <p className='font-semibold flex flex-col'>
                    People you follow
                  </p>
                </div>
                <div className='flex tracking-wide items-center gap-2 p-3 hover:bg-gray-200 rounded-2xl'>
                  <div className='flex-none grid place-content-center font-[500] p-2 bg-blue-600 rounded-full w-12 h-12'>
                  <p className='text-white text-2xl'>&#64;</p>
                  </div>
                  <p className='font-semibold flex flex-col'>
                    Only people you mention
                  </p>
                </div>
              </div>
            </div>}
        </div>
      </div>
      <div className='flex items-center w-full justify-between'>
        <div className='flex items-center gap-3 ml-12 text-2xl text-blue-500'>
          <p className='cursor-pointer hover:bg-slate-200 p-[6px] hover:rounded-full'>
            <TbPhoto />
          </p>
          <p className='cursor-pointer hover:bg-slate-200 p-[6px] hover:rounded-full'>
            <AiOutlineFileGif />
          </p>
          <p className='cursor-pointer hover:bg-slate-200 p-[6px] hover:rounded-full'>
            <IoMdSwitch />
          </p>
          <p className='cursor-pointer hover:bg-slate-200 p-[6px] hover:rounded-full'>
            <VscSmiley />
          </p>
          <p className='cursor-pointer hover:bg-slate-200 p-[6px] hover:rounded-full'>
            <TbCalendarStats />
          </p>
          <p className='cursor-pointer hover:bg-slate-200 p-[6px] hover:rounded-full'>
            <VscLocation />
          </p>
        </div>
        <button 
          onClick={handleTweet}
          className='rounded-full p-2 pl-5 pr-5 bg-blue-500 text-white font-semibold'>Tweet</button>
      </div>
    </header>
  )
}
