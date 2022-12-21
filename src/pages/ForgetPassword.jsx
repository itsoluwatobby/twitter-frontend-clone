import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaTwitter } from 'react-icons/fa';
import { useResetPasswordMutation } from '../features/users/authApiSlice';

const ForgetPassword = () => {
   const [emailAd, setEmailAd] = useState('');
   const emailRef = useRef();
   //const navigate = useNavigate();
   const [errorMessage, setErrorMessage] = useState(null);
   const [sentLink, setSentLink] = useState(true);
   const [resetPassword, {isLoading, isError, isSuccess, reset}] = useResetPasswordMutation();

   useEffect(() => {
      emailRef.current.focus()
      setSentLink(false)
   }, []);

   const handleForgetPassword = async(e) => {
      e.preventDefault()
      try{
         await resetPassword({email: emailAd}).unwrap()
         // isSuccess && setSentLink(true)
         setEmailAd('')
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

   const canSubmit = Boolean(emailAd.includes('@') && emailAd.includes('.'))

   let errorContent = ( 
      <div className='flex w-[72%] items-center justify-center bg-gray-400 rounded-[10px] text-2xl text-red-500 p-4 absolute top-10 right-7 z-20 whitespace-nowrap'>
         <p>
            {errorMessage}
         </p>
      </div>     
   )

  return (
    <main
      onClick={reset}
      className='container h-screen bg-blue-50 flex items-center justify-center midscreen:flex-col midscreen:-mt-10'>
      <div className="w-3/4 h-3/4 flex gap-3 midscreen:flex-col midscreen:gap-2">
         <div className="flex flex-none w-3/5 midscreen:w-full flex-col justify-center gap-2">
            <h3 className="font-[800] text-5xl text-blue-500 flex items-center gap-4">Oluwatobby 
              <div className='shadow-sm rounded-3xl text-5xl p-2 bg-blue-100'>
                <FaTwitter className=''/>
              </div>
            </h3>
            <span className="mt-2 text-2xl capitalize">Connect with friends and the world around you on Oluwatobby</span>
         </div>
         <form onSubmit={handleForgetPassword} className="flex flex-col justify-center relative flex-auto">
            <div className="p-4 bg-white rounded-[10px] flex flex-col shadow-lg justify-between gap-2.5">
               {isLoading && <p className='text-center tracking-widest text-green-700 font-medium font-mono'>In progress...</p>}
               {errorMessage && errorContent}
               <div className='w-full flex flex-col'>
                <label className='flex items-center gap-1 font-semibold mb-0' htmlFor='email'>Email:</label>
                <input 
                    type="email" 
                    ref={emailRef}
                    placeholder='johnDoe@mail.co'
                    required
                    autoComplete='off'
                    value= {emailAd}
                    className="bg-blue-50 h-9 rounded-[10px] border border-gray-300 focus:outline-none text-base pl-2" 
                    onChange={e => setEmailAd(e.target.value)}   
                />
               </div>
               <button 
                  type="submit" 
                  className={`h-10 rounded-lg border-none text-white text-xl font-medium cursor-pointer transition duration-150 ease-in-out hover:text-white hover:brightness-75 active:brightness-100 ${!canSubmit ? 'bg-gray-400' : 'bg-blue-500'}`}
                     disabled={!canSubmit}
                     >Reset Password</button>
               {isSuccess && <span className="text-center text-blue-700 capitalize font-mono font-semibold text-lg">Reset Password Link Sent To Your Email</span>}
               <p 
                  className="text-left font-medium pl-1"
                  >
                  <Link className='transition-all cursor-pointer text-black hover:brightness-90 hover:text-gray-700 active:brightness-100' to='/login'>   
                     Back to Login
                  </Link>
               </p>
            </div>
         </form>
      </div>
    </main>
  );
}

export default ForgetPassword;
