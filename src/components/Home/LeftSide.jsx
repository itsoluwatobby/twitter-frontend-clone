import {RiHome7Fill, RiLeafLine, RiFileList2Line, RiMoreLine, RiHashtag, RiHome7Line} from 'react-icons/ri'
import {CgProfile, CgSearch} from 'react-icons/cg'
import {CiMail} from 'react-icons/ci'
import {CgMoreO} from 'react-icons/cg'
import {BsBookmark, BsBell, BsPersonFill, BsBellFill} from 'react-icons/bs'
import {BsPerson} from 'react-icons/bs'
import { FaTwitter } from 'react-icons/fa'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser, selectCurrentUser } from '../../features/auth/authSlice'
import { useLogoutQuery } from '../../features/users/authApiSlice'
import { switchComment } from '../../features/users/usersSlice'

export const LeftSide = () => {
  const {pathname} = useLocation();
  const currentUser = useSelector(selectCurrentUser);
  const userId = localStorage.getItem('userId');
  const createCommentBg = useSelector(switchComment);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const logoutHandler = async() => {
    dispatch(logoutUser())
    navigate('/login')
  }

  return (
    <aside className={`minscreen:pl-1.5 pl-12 pb-2 pr-2 h-screen w-[22%] minscreen:w-[13%] flex flex-col justify-between pt-4 sticky top-0 m-auto flex-none ${createCommentBg ? 'bg-gray-400' : 'bg-white'}`}>
      <div className='minscreen:ml-2 flex-none mb-2 rounded-full hover:bg-blue-100 cursor-pointer grid place-content-center h-[52px] w-[52px]'>
        <FaTwitter className='text-blue-500 text-3xl'/>
      </div>
      <div className='flex flex-col'>
        <Link to='/'>
          <div title='Home' className='home minscreen:w-[52px] minscreen:h-[52px] minscreen:hover:rounded-full relative minscreen:grid minscreen:ml-2 minscreen:place-content-center flex pt-3 pb-3 items-center gap-4 cursor-pointer hover:rounded-md hover:bg-gray-200 text-[20px]'>
          {/* display for new post */}
          {pathname === '/' ? <RiHome7Fill className='text-3xl'/> :  
            <RiHome7Line className='text-[28px]'/>}
            <h1 className={`minscreen:hidden ${pathname === '/' && 'font-semibold'}`}>Home</h1>
          </div>
        </Link>
        <Link to='/tweet/explore'>
          <div title='Explore' className='minscreen:ml-2 minscreen:w-[52px] minscreen:h-[52px] minscreen:hover:rounded-full flex minscreen:grid minscreen:place-content-center items-center pt-3 pb-3 gap-4 cursor-pointer hover:rounded-md hover:bg-gray-200 text-[20px]'>
            <RiHashtag className='text-[28px] midscreen:hidden'/>
            <CgSearch className='text-[28px] hidden midscreen:block'/>
            <h1 className={`minscreen:hidden ${pathname === '/tweet/explore' && 'font-semibold'}`}>Explore</h1>
          </div>
        </Link>
        <div title='Notification' className='minscreen:w-[52px] minscreen:h-[52px] minscreen:hover:rounded-full minscreen:m-auto minscreen:box-border relative minscreen:grid minscreen:place-content-center flex items-center pt-3 pb-3 gap-4 cursor-pointer hover:rounded-md hover:bg-gray-200'>
           {/* display for new notification */}
           <div className='minscreen:left-[28px] absolute w-[18px] h-[18px] bg-blue-600 rounded-full top-[8px] left-[16px] text-white grid place-content-center text-[14px] p-[2px]'>
            <p>0</p>
           </div>
          {pathname === '/tweet/notification' ? <BsBellFill className='text-[27px]'/> : <BsBell className='text-[27px]'/>}
          <h1 className={`text-[20px] minscreen:hidden ${pathname === '/tweet/notification' && 'font-semibold'}`}>Notifications</h1>
        </div>
        <div title='Messages' className='minscreen:w-[52px] minscreen:h-[52px] minscreen:hover:rounded-full minscreen:ml-2 flex minscreen:grid minscreen:place-content-center items-center pt-3 pb-3 gap-4 cursor-pointer hover:rounded-md hover:bg-gray-200 text-[20px]'>
          <CiMail className='text-[28px]'/>
          <h1 className={`minscreen:hidden ${pathname === '/tweet/messages' && 'font-semibold'}`}>Messages</h1>
        </div>
        <div title='Bookmarks' className='minscreen:w-[52px] minscreen:h-[52px] minscreen:hover:rounded-full minscreen:ml-2 flex minscreen:grid minscreen:place-content-center items-center pt-3 pb-3 gap-4 cursor-pointer hover:rounded-md hover:bg-gray-200 text-[20px]'>
          <BsBookmark className='text-[26px]'/>
          <h1 className={`minscreen:hidden ${pathname === '/tweet/bookmarks' && 'font-semibold'}`}>Bookmarks</h1>
        </div>
        <div title='Lists' className='minscreen:w-[52px] minscreen:h-[52px] minscreen:hover:rounded-full minscreen:ml-2 flex minscreen:grid minscreen:place-content-center items-center pt-3 pb-3 gap-4 cursor-pointer hover:rounded-md hover:bg-gray-200 text-[20px]'>
          <RiFileList2Line className='text-[28px] text-gray-700'/>
          <h1 className={`minscreen:hidden ${pathname === '/tweet/lists' && 'font-semibold'}`}>Lists</h1>
        </div>
        <Link to='/tweet/profile'>
          <div title='Profile' className='minscreen:w-[52px] minscreen:h-[52px] minscreen:hover:rounded-full minscreen:ml-2 flex minscreen:grid minscreen:place-content-center items-center pt-3 pb-3 gap-4 cursor-pointer hover:rounded-md hover:bg-gray-200 text-[20px]'>
            {pathname === '/tweet/profile' ? <BsPersonFill className={`text-[28px] font-[500]`}/> :
              <BsPerson className={`text-[28px] font-[500]`}/>
            }
            <h1 className={`minscreen:hidden ${pathname === '/tweet/profile' && 'font-semibold'}`}>Profile</h1>
          </div>
        </Link>
        <div title='More' className='minscreen:w-[52px] minscreen:h-[52px] minscreen:hover:rounded-full minscreen:ml-2 flex minscreen:grid minscreen:place-content-center items-center pt-3 pb-3 gap-4 cursor-pointer hover:rounded-md hover:bg-gray-200 text-[28px]'>
          <CgMoreO className='text-gray-700'/>
          <h1 className={`text-xl minscreen:hidden ${pathname === '/tweet/more' && 'font-semibold'}`}>More</h1>
        </div>
        <div title='Tweet' className='hidden minscreen:ml-2 minscreen:grid minscreen:place-content-center p-2.5 cursor-pointer rounded-full w-14 h-14 bg-blue-600 text-white'>
          <RiLeafLine className='text-[28px]'/>
        </div>
        <button className='minscreen:hidden rounded-full p-3 bg-blue-500 mt-2'>Tweet</button>
      </div>
      <button onClick={logoutHandler}>Logout</button>
      <Link to={`/tweet/profile/${userId}`}>
      <div className='before minscreen:mt-11 mt-11 flex-none flex items-center gap-1.5 m-auto h-20 w-full p-1 pl-2 pr-2 hover:bg-gray-300 hover:rounded-full'>
        {currentUser?.profilePicture ? 
          <img src={currentUser?.profilePicture} alt='' className='flex-none w-12 h-12 rounded-full object-cover cursor-pointer'/> 
          : <CgProfile className='text-gray-500 minscreen:text-5xl text-7xl'/>
        }
        <div className='minscreen:hidden w-full flex items-center gap-4 justify-between'>
          <p className='flex flex-col cursor-pointer'>
            <span className='font-semibold'>{currentUser?.firstName}</span>
            <span className='text-gray-800'>{currentUser?.username || currentUser?.email}</span>
          </p>
          <RiMoreLine className='cursor-pointer text-2xl font-semibold'/>
        </div>
      </div>
      </Link>
    </aside>
  )
}
