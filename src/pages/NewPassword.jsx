import React, { useEffect, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
//import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaTimes, FaCheck, FaInfoCircle, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
//import { authUsers } from "../../api/axiosFetch";

const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,24}$/

const NewPassword = () => {
   //const navigate = useNavigate();
   const [show, setShow] = useState(false);
   const [error, setError] = useState('');
   const [loading, setLoading] = useState(false);
   const [validPassword, setValidPassword] = useState(false);
   const [success, setSuccess] = useState(false);
   const [password, setPassword] = useState('');

   useEffect(() => {
      const validPass = PASSWORD_REGEX.test(password);
      setValidPassword(validPass)
   }, [password])

   const handleRegister = async(e) => {
      e.preventDefault()
      setLoading(true)
      try{
         const pass = PASSWORD_REGEX.test(password)
         if(pass){
            // const response = await authUsers.post('/register', 
            // {password})
            setSuccess(true)
            setPassword('')
            navigate('/login')
         }
         else setError('Inputs are not valid')
      } 
      catch(error){
         setSuccess(false)
         setLoading(false)
         !error.response && setError('No Server Response')
         error.response?.status === 403 && setError('Bad Credentials')
         error.response?.status === 400 && setError('Invalid Input')
      }finally{
         setSuccess(false)
         setLoading(false)
      }
   }

   const canSave = Boolean(password)

   let successContent = ( 
      <div className='flex w-[70%] items-center justify-center bg-cyan-400 rounded-[10px] p-5 text-green-500 text-2xl right-7 top-10 z-20 absolute'>
         <p>
            Registration Successful!!
         </p>
      </div>     
   )

   let errorContent = ( 
      <div className='flex w-[72%] items-center justify-center bg-gray-400 rounded-[10px] text-2xl text-red-500 p-4 absolute top-10 right-7 z-20 whitespace-nowrap'>
         <p>
            {error}
         </p>
      </div>     
   )

   let mainContent = (
      <div className="w-3/4 h-3/4 flex gap-1 midscreen:flex-col">
         <div className="flex flex-none w-3/5 midscreen:w-full flex-col justify-center gap-2">
            <h3 className="font-[800] text-5xl text-blue-500 flex items-center gap-4">Oluwatobby 
              <div className='shadow-sm rounded-3xl text-6xl p-2 bg-blue-100'>
                <FaTwitter className=''/>
              </div>
            </h3>
            <span className="mt-2 text-2xl capitalize">Connect with friends and the world around you on Oluwatobby</span>
         </div>
            <form onSubmit={handleRegister} className="flex flex-col justify-center relative flex-auto" onClick={() => setError(false)}>
               {success && successContent}
               {error && errorContent}
               <div className="p-5 bg-white rounded-[10px] flex flex-col shadow-lg justify-between gap-3.5">
               <div className='w-full flex flex-col'>
                  <label className='flex items-center gap-1 font-semibold mb-0' htmlFor='password'>
                      Password: {!password ? '' : validPassword ? <FaCheck className='text-green-500 text-xl p-0 -mt-[5px] -mb-2.5'/> : <FaTimes className='text-red-500 text-2xl -mt-2.5 -mb-2.5'/> }
                  </label>
                  <div className="flex items-center rounded-[10px] border border-gray-300 h-[45px] relative">
                      <input 
                        type={show ? "text" : "password"} 
                        placeholder='Password' 
                        id="password"
                        required
                        value={password}
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
                {!validPassword && password &&
                    <p className='w-full -mt-2 -mb-1 p-1 pl-[5px] pr-[5px] bg-black rounded-[10px] lowercase text-sm flex flex-col text-left text-white'>
                      <FaInfoCircle />
                      <span className='pl-2.5'>
                          must contain at least a letter, a number, a symbol, a minimum of 5 and maximum of 25 characters. Avoid using <span className='uppercase text-xs text-red-500'> quotes</span>
                      </span>
                    </p>
                }
              
                    <button type="submit" 
                      className={`h-12 rounded-lg border-none bg-blue-500 text-white text-xl font-medium cursor-pointer transition duration-150 ease-in-out hover:text-white hover:brightness-75 active:brightness-100 ${!canSave && 'bg-gray-400'}`}
                      disabled={!canSave && validPassword}
                      >reset password</button>
                <Link className='text-white' to='/login'>   
                    <button 
                      type='button' 
                      className="pt-1 pb-1 pl-2 pr-2 w-3/4 m-auto rounded-[10px] bg-teal-300 text-white text-xl cursor-pointer font-medium transition-all hover:brightness-90 hover:text-white active:brightness-100"
                      >Back To Login
                    </button>
                </Link>
               </div>
            </form>
      </div>
   )

  return (
    <main className='container h-screen bg-blue-50 flex items-center justify-center midscreen:flex-col midscreen:-mt-10'>
        {loading ? <p className='text-center text-lg'>Registering...</p> : mainContent}
    </main>
  );
}

export default NewPassword;

const successStyle = {
   display: 'flex', width: '70%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'cyan', borderRadius: '10px', padding: '20px', color: 'green', fontSize: '24px', right: '28px', top: '40px', zIndex: '5', position: 'absolute'
}

const errorStyle = {
   display: 'flex', width: '70%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightgray', borderRadius: '10px', padding: '20px', color: 'red', fontSize: '24px', right: '28px', top: '40px', zIndex: '5', position: 'absolute', whiteSpace: 'nowrap'
}

const passStyle = {
   width: '97%', margin: '-2px 0 -3px 0', padding: '2px 5px 2px 5px', backgroundColor: 'black', borderRadius: '10px', color: 'white', textTransform: 'lowercase', fontSize: '14px', display: 'flex', flexDirection: 'column', textAlign: 'left'
}
