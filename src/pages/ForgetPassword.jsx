import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaTwitter } from 'react-icons/fa';

const ForgetPassword = () => {
   const [email, setEmail] = useState('');
   const emailRef = useRef();
   //const navigate = useNavigate();
   const [error, setError] = useState('');
   const [sentLink, setSentLink] = useState(false)

   useEffect(() => {
      emailRef.current.focus()
      setSentLink(false)
   }, []);

   const handleForgetPassword = async(e) => {
      e.preventDefault()
      console.log(email)
      setEmail('')
      setSentLink(true)
   }

   const canSubmit = Boolean(email.includes('@') && email.includes('.'))

   let errorContent = ( 
      <div className='flex w-[72%] items-center justify-center bg-gray-400 rounded-[10px] text-2xl text-red-500 p-4 absolute top-10 right-7 z-20 whitespace-nowrap'>
         <p>
            {error}
         </p>
      </div>     
   )

  return (
    <main className='container h-screen bg-blue-50 flex items-center justify-center midscreen:flex-col midscreen:-mt-10'>
      <div className="w-3/4 h-3/4 flex gap-3 midscreen:flex-col midscreen:gap-2">
         <div className="flex flex-none w-3/5 midscreen:w-full flex-col justify-center gap-2">
            <h3 className="font-[800] text-5xl text-blue-500 flex items-center gap-4">Oluwatobby 
              <div className='shadow-sm rounded-3xl text-6xl p-2 bg-blue-100'>
                <FaTwitter className=''/>
              </div>
            </h3>
            <span className="mt-2 text-2xl capitalize">Connect with friends and the world around you on Oluwatobby</span>
         </div>
         <form onSubmit={handleForgetPassword} className="flex flex-col justify-center relative flex-auto">
            <div className="p-5 bg-white rounded-[10px] flex flex-col shadow-lg justify-between gap-3.5">
               {error && errorContent}
               <div className='w-full flex flex-col'>
                <label className='flex items-center gap-1 font-semibold mb-0' htmlFor='email'>Email:</label>
                <input 
                    type="email" 
                    ref={emailRef}
                    placeholder='johnDoe@mail.co'
                    required
                    autoComplete='off'
                    value= {email}
                    className="bg-blue-50 h-[45px] rounded-[10px] border border-gray-300 focus:outline-none text-lg pl-2" 
                    onChange={e => setEmail(e.target.value)}   
                />
               </div>
               <button 
                  type="submit" 
                  className={`h-12 rounded-lg border-none bg-blue-500 text-white text-xl font-medium cursor-pointer transition duration-150 ease-in-out hover:text-white hover:brightness-75 active:brightness-100 ${!canSubmit && 'bg-gray-400'}`}
                     disabled={!canSubmit}
                     >Reset Password</button>
               {sentLink && <span className="text-center text-blue-700 capitalize">Reset Password Link Sent To Your Email</span>}
               <button 
                  type='button' 
                  className="pt-1 pb-1 pl-2 pr-2 w-3/4 m-auto rounded-[10px] bg-teal-300 text-white text-xl cursor-pointer font-medium transition-all hover:brightness-90 hover:text-white active:brightness-100"
                  >
                     <Link className='text-white' to='/login'>
                        Login into your Account
                     </Link>
               </button>
            </div>
         </form>
      </div>
    </main>
  );
}

export default ForgetPassword;
