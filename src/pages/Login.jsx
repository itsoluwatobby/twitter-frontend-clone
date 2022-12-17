import React, { useContext, useEffect, useRef, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
//import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom';
//import { authUsers } from '../../api/axiosFetch';
//import Spinner from '../assets/Spinner';

const Login = () => {
   const [show, setShow] = useState(false);
   const inputRef = useRef();
  // const navigate = useNavigate();
   const [error, setError] = useState(''); 
   const [loading, setLoading] = useState(false);
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   useEffect(() => {
      inputRef.current.focus()
   }, [])

   const handleLogin = async(e) => {
      e.preventDefault()
      setLoading(true)
      try{ 
         // const response = await authUsers.post('/login', 
         //    {email, password},
         //    {
         //       headers: {
         //       'Content-Type': 'application/json'
         //       },
         //       withCredentials: true
         //    }
         // )
         JSON.stringify(localStorage.setItem('isLoggedIn', true))
         //navigate('/')
         setEmail('')
         setPassword('')
      }
      catch(error){
         setLoading(false)
         !error.response && setError('No Server Response')
         error.response?.status === 403 && setError('Bad Credentials')
         error.response?.status === 400 && setError('Invalid Input')
      }
      finally{
         setLoading(false)
      }
      await setTimeout(() => {
         setError(false)
      }, 2000);
   }

   const canSaveLogIn = Boolean(email) && Boolean(password)

   let errorContent = ( 
      <div className='flex w-[72%] items-center justify-center bg-gray-400 rounded-[10px] text-2xl text-red-500 p-4 absolute top-10 right-7 z-20 whitespace-nowrap'>
         <p>
            {error}
         </p>
      </div>     
   )

   let loginContent = (
    <main className='container h-screen bg-blue-50 flex items-center justify-center midscreen:flex-col midscreen:-mt-10'>
      <div className="w-3/4 h-3/4 flex gap-3 midscreen:flex-col midscreen:gap-2">
         <div className="flex flex-none w-3/5 midscreen:w-full flex-col justify-center gap-2">
            <h3 className="font-[800] text-5xl text-blue-500 flex items-center gap-4">Oluwatobby 
              <div className='shadow-sm rounded-3xl text-6xl p-2 bg-blue-100'>
                <FaTwitter className=''/>
              </div>
            </h3>
            <span className="mt-2 text-2xl capitalize">Connect with friends and tweet across the globe. Connecting made easy</span>
         </div>
         <form onSubmit={handleLogin} className="flex flex-col justify-center relative flex-auto">
            <div className="p-5 bg-white rounded-[10px] flex flex-col shadow-lg justify-between gap-3.5">
              <div className='w-full flex flex-col'>
                <label
                className='flex items-center gap-1 font-semibold mb-0'
                htmlFor="email">Email:</label>
                  {error && errorContent}
                  <input 
                      type="email" 
                      ref={inputRef}
                      placeholder='johnDoe@mail.co'
                      id='email'
                      autoComplete='off'
                      required
                      value= {email}
                      className="bg-blue-50 h-[45px] rounded-[10px] border border-gray-300 focus:outline-none text-lg pl-2" 
                      onChange={e => setEmail(e.target.value)}   
                  />
              </div>
              <div className='w-full flex flex-col'>
                <label
                  className='flex items-center gap-1 font-semibold mb-0'
                  htmlFor="password">Password:</label>
                <div className="flex items-center rounded-[10px] border border-gray-300 h-[45px] relative">
                    <input 
                      type={show ? "text" : "password"} 
                      placeholder='Password' 
                      id='Password' 
                      value= {password}
                      required
                      autoComplete='off'
                      className="bg-blue-50 h-full flex-auto border-none  focus:outline-none text-lg pl-2 object-cover" 
                      onChange={e => setPassword(e.target.value)}   
                    />
                    {show ? 
                      <AiFillEyeInvisible 
                          onClick={
                            () => setShow(prev => !prev)}
                            className='absolute right-1 text-3xl cursor-pointer text-gray-800'
                      /> : 
                      <AiFillEye 
                          onClick={
                            () => setShow(prev => !prev)}
                            className='absolute right-1 text-3xl cursor-pointer text-gray-800'
                      />
                    }
                </div>
               </div>
               <button 
                  type="submit" 
                  className={`h-12 rounded-lg border-none bg-blue-500 text-white text-xl font-medium cursor-pointer transition duration-150 ease-in-out hover:text-white hover:brightness-75 active:brightness-100 ${!canSaveLogIn && 'bg-gray-400'}`} 
                     disabled={!canSaveLogIn}
                     >Sign in
                </button>
                     <Link className={`text-left text-blue-500 cursor-pointer no-underline font-medium transition-all hover:opacity-75`} to='/forgot_password'> 
                        <span>Forgot Password?</span>
                     </Link>
               <button 
                  type='button' 
                  className="pt-1 pb-1 pl-2 pr-2 w-3/4 m-auto rounded-[10px] bg-teal-300 text-white text-xl cursor-pointer font-medium transition-all hover:brightness-90 hover:text-white active:brightness-100"
                  >
                     <Link className='text-white' to='/register'>
                        Create a New Account
                        </Link>
               </button>
            </div>
         </form>
      </div>
    </main>
  );

  return loading ? <Spinner /> : loginContent
}

export default Login;

