import {FaTwitter} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Success = () => {
  return (
    <div className='flex flex-col items-center gap-11 pt-5 bg-blue-50 h-screen'>
      <div className="flex flex-none w-3/5 midscreen:w-full flex-col justify-center gap-1">
        <h3 className="font-[800] text-5xl text-blue-500 flex items-center gap-4">Oluwatobby 
          <div className='shadow-sm rounded-3xl text-6xl p-2 bg-blue-100'>
            <FaTwitter className=''/>
          </div>
        </h3>
        <span className="mt-2 text-2xl capitalize">Connect with friends and tweet across the globe. Connecting made easy</span>
      </div>
      <h1 className='capitalize text-2xl'>Your Account verification is successful</h1>
      <Link to='/login'>
        <button className='bg-blue-600 p-2 rounded-lg text-white pl-5 pr-5 shadow-lg text-xl hover:bg-blue-500 active:bg-blue-600 transition duration-200 ease-in-out'>
          Sign in here
        </button>
      </Link>
    </div>
  )
}
