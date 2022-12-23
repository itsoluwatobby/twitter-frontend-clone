import React, { useContext, useEffect, useRef, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaTwitter } from 'react-icons/fa';
import { useLoginMutation } from '../features/users/authApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials, trustDevice, trustThisDevice } from '../features/auth/authSlice';
//import Spinner from '../assets/Spinner';

const Login = () => {
   const [show, setShow] = useState(false);
   const inputRef = useRef();
   const navigate = useNavigate();
   const location = useLocation();
   const from = location?.search?.from?.pathname || '/' 
   const [errorMessage, setErrorMessage] = useState(null); 
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [login, {isLoading, isError, isSuccess}] = useLoginMutation();
   const dispatch = useDispatch();
   const trust = useSelector(trustThisDevice);

   useEffect(() => {
      inputRef.current.focus()
   }, [])

   const handleLogin = async(e) => {
      e.preventDefault()
      try{ 
         const userData = await login({email, password}).unwrap();
         dispatch(setCredentials(userData))
         trust && localStorage.setItem('loggedInUser', true)
         localStorage.setItem('userId', userData?.rest?._id)
         
         navigate(from, { replace: true })
         setEmail('')
         setPassword('')
      }
      catch(isError){
         let message;
         isError.status === 400 ? message = isError?.data : 
         isError.status === 401 ? message = isError?.data : 
         isError.status === 403 ? message = isError?.data : 
         isError.status === 409 ? message = isError?.data : 
         message ='no server response'
         setErrorMessage(message)
      }
   }

   const canSaveLogIn = Boolean(email) && Boolean(password)

   let errorContent = ( 
      <div className='flex w-[70%] items-center justify-center bg-gray-400 rounded-[10px] text-2xl text-red-500 p-2 absolute top-12 right-7 z-20 whitespace-nowrap'>
         <p>
            {errorMessage}
         </p>
      </div>     
   )

   let loginContent = (
    <main className='container h-screen bg-blue-50 flex items-center justify-center midscreen:flex-col midscreen:-mt-10'>
      <div className="w-3/4 h-3/4 flex gap-3 midscreen:flex-col midscreen:gap-2">
         <div className="flex flex-none w-3/5 midscreen:w-full flex-col justify-center gap-2">
            <h3 className="font-[800] text-5xl text-blue-500 flex items-center gap-4">Oluwatobby 
              <div className='shadow-sm rounded-3xl text-5xl p-2 bg-blue-100'>
                <FaTwitter className=''/>
              </div>
            </h3>
            <span className="mt-2 text-2xl capitalize">Connect with friends and tweet across the globe. Connecting made easy</span>
         </div>
         <form onSubmit={handleLogin} className="flex flex-col justify-center relative flex-auto">
            <div onClick={() => setErrorMessage(null)} className="p-5 pt-3 pb-3 bg-white rounded-[10px] flex flex-col shadow-lg justify-between gap-2.5">
              <div className='w-full flex flex-col'>
                <label
                className='flex items-center gap-1 font-semibold mb-0'
                htmlFor="email">Email:</label>
                  {errorMessage && errorContent}
                  <input 
                      type="email" 
                      ref={inputRef}
                      placeholder='johnDoe@mail.co'
                      id='email'
                      autoComplete='off'
                      required
                      value= {email}
                      className="bg-blue-50 h-9 rounded-[10px] border border-gray-300 focus:outline-none text-base pl-2" 
                      onChange={e => setEmail(e.target.value)}   
                  />
              </div>
              <div className='w-full flex flex-col'>
                <label
                  className='flex items-center gap-1 font-semibold mb-0'
                  htmlFor="password">Password:</label>
                <div className="flex items-center rounded-[10px] border border-gray-300 h-9 relative">
                    <input 
                      type={show ? "text" : "password"} 
                      placeholder='Password' 
                      id='Password' 
                      value= {password}
                      required
                      autoComplete='off'
                      className="bg-blue-50 h-full flex-auto border-none  focus:outline-none text-base pl-2 object-cover" 
                      onChange={e => setPassword(e.target.value)}   
                    />
                    {show ? 
                      <AiFillEyeInvisible 
                          onClick={
                            () => setShow(prev => !prev)}
                            className='absolute right-1 text-2xl cursor-pointer text-gray-800'
                      /> : 
                      <AiFillEye 
                          onClick={
                            () => setShow(prev => !prev)}
                            className='absolute right-1 text-2xl cursor-pointer text-gray-800'
                      />
                    }
                </div>
               </div>
               <div className='flex gap-3 items-center font-medium'>
                  <input type="checkbox" checked={trust} 
                     className='w-4 h-4 border-black'
                     onChange={() => dispatch(trustDevice(!trust))} id='trust'/>
                  <label htmlFor="trust">Trust this device</label>
               </div>
               <button 
                  type="submit" 
                  className={`h-10 rounded-lg border-none text-white text-xl font-medium cursor-pointer transition duration-150 ease-in-out hover:text-white hover:brightness-75 active:brightness-100 ${!canSaveLogIn ? 'bg-gray-400' : 'bg-blue-500'}`} 
                     disabled={!canSaveLogIn}
                     >Sign in
                </button>
               <Link className={`w-36 text-left text-blue-500 cursor-pointer no-underline font-medium transition-all hover:opacity-75`} to='/forgot_password'> 
                  <span>Forgot Password?</span>
               </Link>
               <p 
                  className="w-full m-auto text-black text-base flex items-center gap-2 mildscreen:gap-0.5 mildscreen:flex-col"
                  >
                     Don't have an account? 
                  <Link className='transition-all cursor-pointer text-black hover:brightness-90 hover:text-gray-700 active:brightness-100' to='/register'>   
                     Create an Account
                  </Link>
               </p>
            </div>
         </form>
      </div>
    </main>
  );

  return isLoading ? <h1 className='text-2xl text-center pt-10'>Signing in...</h1> : loginContent
}

export default Login;

