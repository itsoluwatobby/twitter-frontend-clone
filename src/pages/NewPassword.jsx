import React, { useEffect, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaTimes, FaCheck, FaInfoCircle, FaTwitter } from 'react-icons/fa';
import { useSendResetPasswordMutation } from '../features/users/authApiSlice';

const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,24}$/

const NewPassword = () => {
   const navigate = useNavigate();
   const [show, setShow] = useState(false);
   const [validPassword, setValidPassword] = useState(false);
   const [match, setMatch] = useState(false);
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [errorMessage, setErrorMessage] = useState(null);
   const [sendResetPassword, {isLoading, isError, isSuccess, reset}] = useSendResetPasswordMutation();
   const location = useLocation();
   const emailAd = location?.search.split('=')[1]
   console.log(emailAd)
   
   useEffect(() => {
    const validPass = PASSWORD_REGEX.test(password);
    setValidPassword(validPass)
    const match = password === confirmPassword;
    setMatch(match)
 }, [password, confirmPassword])
console.log(isSuccess)
 const canSave = [password, confirmPassword].every(Boolean)

   const handleRegister = async(e) => {
      e.preventDefault()
      try{
        await sendResetPassword({email : emailAd, resetPass: password}).unwrap()
        setPassword('')
        setConfirmPassword('')
        //navigate('/login')
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

   let successContent = ( 
      <div className='flex max-w-[75%] items-center justify-center bg-gray-700 rounded-[10px] p-3 capitalize text-green-500 text-lg right-7 top-10 z-20 absolute'>
         <p>
            Password reset Successful!!
         </p>
      </div>     
   )
console.log(isError)
   let errorContent = ( 
      <div className='flex w-[70%] items-center justify-center bg-gray-300 rounded-[10px] text-xl text-red-500 p-2 absolute top-10 right-7 z-20 whitespace-nowrap'>
         <p>
            {errorMessage}
         </p>
      </div>     
   )

   let mainContent = (
      <div 
        onClick={reset}
        className="w-3/4 h-3/4 flex gap-1 midscreen:flex-col">
         <div className="flex flex-none w-3/5 midscreen:w-full flex-col justify-center gap-2">
            <h3 className="font-[800] text-5xl text-blue-500 flex items-center gap-4">Oluwatobby 
              <div className='shadow-sm rounded-3xl text-5xl p-2 bg-blue-100'>
                <FaTwitter className=''/>
              </div>
            </h3>
            <span className="mt-2 text-2xl capitalize">Connect with friends and the world around you on Oluwatobby</span>
         </div>
            <form 
              onSubmit={handleRegister} className="relative flex-auto" 
              onClick={() => setErrorMessage(null)}>
               {isSuccess && successContent}
               {errorMessage && errorContent}
               <div className="p-4 bg-white rounded-[10px] flex flex-col shadow-lg justify-between gap-3">
               <div className='w-full flex flex-col'>
               {isLoading && <p className='text-center tracking-widest text-green-700 font-medium font-mono'>In progress...</p>}
                  <label className='flex items-center gap-1 font-semibold mb-0' htmlFor='password'>
                      Password: {!password ? '' : validPassword ? <FaCheck className='text-green-500 text-xl p-0 -mt-[5px] -mb-2.5'/> : <FaTimes className='text-red-500 text-2xl -mt-2.5 -mb-2.5'/> }
                  </label>
                  <div className="flex items-center rounded-[10px] border border-gray-300 h-10 relative">
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
                {!validPassword && password &&
                  <div className='w-full -mt-2 -mb-1 p-0.5 pl-[2px] bg-black rounded-[10px] lowercase flex text-left'>
                    <FaInfoCircle className='text-xs text-white'/>
                    <ul className='pl-2.5 text-xs flex flex-col'>
                      <li className='flex items-center gap-1 flex-wrap'>
                        <span className={`${(/[A-Za-z]/).test(password) ? 'text-green-600' : 'text-white'}`}>&#9830; contains letters</span>
                        <span className={`${(/[\d]/).test(password) ? 'text-green-600' : 'text-white'}`}>&#9830; contains numbers</span>
                        <span className={`${(/[\.@$!%*#?&]/).test(password) ? 'text-green-600' : 'text-white'}`}>&#9830; at least a symbol</span>
                      </li>
                      <li className='flex items-center gap-1 flex-wrap'>
                        <span className={`${(/[A-Za-z\d@$!%*#?&]{5,24}/i).test(password) ? 'text-green-600' : 'text-white'}`}>&#9830; min. of 5, max of 25</span>
                        <span className={`${(/[^+-/]/).test(password) ? 'text-green-600' : 'text-white'}`}>&#9830; avoid using quotes,(+-"'/)</span>
                      </li>
                    </ul>
                  </div>
                }
                <div className='w-full flex flex-col'>
                  <label className='flex items-center gap-1 font-semibold mb-0'
                  htmlFor='confirmPassword'
                  >Confirm Password:</label> 
                  <div className="flex items-center rounded-[10px] border border-gray-300 h-10 relative">
                    <input 
                      type={show ? "text" : "password"} placeholder='Confirm Password' 
                      id='confirmPassword' value={confirmPassword} 
                      required autoComplete='off'
                      className="bg-blue-50 h-full flex-auto border-none  focus:outline-none text-lg pl-2 object-cover" 
                      onChange={e => setConfirmPassword(e.target.value)}   
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
                {validPassword && !match && confirmPassword &&
                  <p className='bg-black text-white flex rounded-[10px] items-center text-xs p-1.5 -mt-[9px] -mb-[5px]'>
                    <FaInfoCircle />
                    <span className='pl-2.5'>
                      password must be a match.
                    </span>
                  </p>
                }
                {!password && confirmPassword &&
                  <p className='w-full -mt-2 -mb-1 pl-[5px] bg-black rounded-[10px] lowercase flex text-xs p-1 text-left text-white'>
                    <FaInfoCircle />
                    <span className='pl-2.5'>
                      a valid password input is required first.
                    </span>
                  </p>
                }
                  <button type="submit" 
                    className={`h-10 rounded-lg border-none text-white text-xl font-medium cursor-pointer transition duration-150 ease-in-out hover:text-white hover:brightness-75 active:brightness-100 ${!canSave ? 'bg-gray-400' : 'bg-blue-500'}`}
                    disabled={!canSave && match && validPassword}
                    >reset password</button>
                  <p 
                    className="text-left font-medium pl-1 underline"
                    >
                    <Link className='transition-all cursor-pointer text-black hover:brightness-90 hover:text-gray-700 active:brightness-100' to='/login'>   
                      Back to Login
                    </Link>
                  </p>
               </div>
            </form>
      </div>
   )

  return (
    <main className='container h-screen bg-blue-50 flex items-center justify-center midscreen:flex-col midscreen:-mt-10'>
      {mainContent}
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
