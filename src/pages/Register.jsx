import React, { useEffect, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { FaTimes, FaCheck, FaInfoCircle, FaTwitter } from 'react-icons/fa';
import {useRegisterUserMutation} from '../features/users/authApiSlice'

//'const USER_REGEX = /^[A-Za-z][A-Za-z0-9_]{2,25}$/
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$\.!%*#?&])[A-Za-z\d\.@$!%*#?&]{5,24}$/
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const Register = () => {
   //const navigate = useNavigate();
   const [show, setShow] = useState(false);
   //const [validName, setValidName] = useState(false);
   const [validPassword, setValidPassword] = useState(false);
   const [validEmail, setValidEmail] = useState(false);
   const [match, setMatch] = useState(false);
   const [errorMessage, setErrorMessage] = useState(null);
   const [register, setRegister] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
   });

   const [registerUser, 
    {isLoading, isError, isSuccess, error, reset}] = useRegisterUserMutation()

   const {firstName, lastName, email, password, confirmPassword} = register;

   const handleChange = (e) => {
      const name = e.target.name
      const value = e.target.value
      setRegister({...register, [name]: value})
   }

  //  useEffect(() => {
  //     const result = [USER_REGEX.test(firstName), USER_REGEX.test(lastName)].every(Boolean);
  //     setValidName(result)
  //  }, [firstName, lastName])

   useEffect(() => {
      const result = EMAIL_REGEX.test(email);
      setValidEmail(result)
   }, [email])

   useEffect(() => {
      const validPass = PASSWORD_REGEX.test(password);
      setValidPassword(validPass)
      const match = password === confirmPassword;
      setMatch(match)
   }, [password, confirmPassword])

   const canSave = Object.values(register).every(Boolean)

   const handleRegister = async(e) => {
      e.preventDefault()
      setValidEmail(false)
      setValidPassword(false)
      try{
        await registerUser({firstName, lastName, email, password}).unwrap()
        //isSuccess && navigate('/login')
      } 
      catch(isError){
        let message;
        isError.status === 400 ? message = isError?.data : 
        isError.status === 403 ? message = isError?.data : 
        isError.status === 409 ? message = isError?.data : 
        message ='no server response'
        setErrorMessage(message)
      }
    }
    
    //console.log(errorMessage)
   let successContent = ( 
      <div className='midscreen:mt-12 flex flex-col whitespace-nowrap midscreen:w-[90%] items-center midscreen:gap-6 bg-blue-100 shadow-2xl rounded-[10px] p-5 text-black text-2xl border border-gray-400 justify-evenly'>
        <p>Registration Successful!!</p>
        <span className='text-base'>A verification link has been sent to your email.</span>
        <span className='text-lg'>Please verify your account</span>
      </div>     
   )

   let errorContent = ( 
      <div className='flex w-[67%] items-center justify-center bg-gray-400 rounded-[10px] text-xl text-red-500 p-1.5 absolute top-10 right-7 z-20 whitespace-nowrap capitalize'>
         <p>
            {errorMessage}
         </p>
      </div>     
   )

   let mainContent = (
      <div className="w-3/4 h-3/4 flex gap-2 midscreen:flex-col midscreen:gap-2 midscreen:-mt-8">
         <div className="flex flex-none w-3/5 midscreen:w-full flex-col justify-center gap-1">
            <h3 className="font-[800] text-5xl text-blue-500 flex items-center gap-4">Oluwatobby 
              <div className='shadow-sm rounded-3xl text-5xl p-2 bg-blue-100'>
                <FaTwitter className=''/>
              </div>
            </h3>
            <span className="mt-2 text-2xl capitalize">Connect with friends and the world around you on Oluwatobby</span>
         </div>
          {isSuccess ? successContent
          :
          <form onSubmit={handleRegister}
          className="relative flex-auto">
            <div
              onClick={() => {
                setErrorMessage(null)
                reset()
              }}
              className="p-4 bg-white rounded-[10px] flex flex-col shadow-2xl gap-2.5"> 
              <div className='flex w-full gap-2 midscreen:flex-col'>
                <div className='w-full flex flex-col'> 
                  <label className='flex items-center gap-1 font-semibold mb-0 text-sm' htmlFor='firstName'>Firstname:</label>
                  <input 
                      type="text" id="firstName" 
                      name="firstName" required
                      autoComplete='off' minLength={3}
                      maxLength={25} placeholder='FirstName' 
                      className="bg-blue-50 h-9 rounded-[10px] border border-gray-300 focus:outline-none text-base pl-2" 
                      onChange={handleChange}   
                  />
                </div>
                <div className='w-full flex flex-col'> 
                  <label className='flex items-center gap-1 font-semibold mb-0 text-sm' htmlFor='lastName'>Lastname:</label>
                  <input 
                      type="text" id="lastName" 
                      name="lastName" required
                      autoComplete='off' minLength={3}
                      maxLength={25} placeholder='LastName' 
                      className="bg-blue-50 h-9 rounded-[10px] border border-gray-300 focus:outline-none text-base pl-2" 
                      onChange={handleChange}   
                  />
                </div>
              </div>
              <div className='w-full flex flex-col'>
                <label className='flex items-center gap-1 font-semibold mb-0 text-sm' htmlFor='email'>
                    Email: {!email ? '' : validEmail ? <FaCheck className='text-green-500 text-xl p-0 -mt-[5px] -mb-2.5'/> : <FaTimes className='text-red-500 text-2xl -mt-2.5 -mb-2.5'/> }
                </label>
                <input 
                    type="email" placeholder='johnDoe@mail.co'
                    name="email" id="email"
                    minLength={5} maxLength={25} 
                    required autoComplete='off'
                    className="bg-blue-50 h-9 rounded-[10px] border border-gray-300 focus:outline-none text-base pl-2" 
                    onChange={handleChange}   
                />
              </div>
              {!validEmail && email &&
                <div className='w-full -mt-2 -mb-1 p-0.5 pl-[5px] bg-black rounded-[10px] lowercase flex flex-col text-left'>
                    <FaInfoCircle className='text-xs text-white'/>
                    <ul className='pl-2.5 text-xs flex flex-col'>
                      <li className='flex items-center gap-2.5'>
                        <span className={`${(/[A-Za-z]/).test(email) ? 'text-green-600' : 'text-white'}`}>&#9830; Begins with a letter/number</span>
                        <span className={`${(/[@]/).test(email) ? 'text-green-600' : 'text-white'}`}>&#9830; has a @ symbol</span>
                      </li>
                      <li className='flex items-center gap-2.5'>
                        <span className={`${(/[A-Za-z@]{5,25}/).test(email) ? 'text-green-600' : 'text-white'}`}>&#9830; min. of 5, max of 25</span>
                      </li>
                    </ul>
                </div>
              }
              {errorMessage && errorContent}
              <div className='w-full flex flex-col'>
                <label className='flex items-center gap-1 font-semibold mb-0 text-sm' htmlFor='password'>
                    Password: {!password ? '' : validPassword ? <FaCheck className='text-green-500 text-xl p-0 -mt-[5px] -mb-2.5'/> : <FaTimes className='text-red-500 text-2xl -mt-2.5 -mb-2.5'/> }
                </label>
                <div className="flex items-center rounded-[10px] border border-gray-300 h-9 relative">
                  <input 
                    type={show ? "text" : "password"} placeholder='Password' 
                    name="password" id="password"
                    required autoComplete='off'
                    className="bg-blue-50 h-full flex-auto border-none  focus:outline-none text-base pl-2 object-cover" 
                    onChange={handleChange}   
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
                <label className='flex items-center gap-1 font-semibold mb-0 text-sm'>Confirm Password:</label> 
                <div className="flex items-center rounded-[10px] border border-gray-300 h-9 relative">
                  <input 
                    type={show ? "text" : "password"} placeholder='Confirm Password' 
                    name='confirmPassword' required autoComplete='off'
                    className="bg-blue-50 h-full flex-auto border-none  focus:outline-none text-base pl-2 object-cover" 
                    onChange={handleChange}   
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
            {!password && !email && confirmPassword &&
              <p className='w-full -mt-2 -mb-1 pl-[5px] bg-black rounded-[10px] lowercase flex text-xs p-1 text-left text-white'>
                  <FaInfoCircle />
                  <span className='pl-2.5'>
                    a valid password input is required first.
                  </span>
              </p>
            }
              <button type="submit" 
                  className={`h-10 rounded-lg border-none text-white text-xl font-medium cursor-pointer transition duration-150 ease-in-out hover:text-white hover:brightness-75 active:brightness-100 ${!canSave ? 'bg-gray-400' : 'bg-blue-500'}`} 
                  disabled={!canSave && !match && !validPassword}
                  >Sign Up</button>
            
              <p 
                className="mildscreen:flex-col w-full m-auto text-black text-base flex items-center gap-2 mildscreen:gap-0.5"
                >
                  Already have an account? 
                <Link className='transition-all cursor-pointer text-black hover:brightness-90 hover:text-gray-700 active:brightness-100' to='/login'>   
                  Log into your Account
                </Link>
              </p>
          </div>
        </form>
        }
      </div>
   )

  return (
    <main className='container h-screen bg-blue-50 flex items-center justify-center midscreen:flex-col midscreen:justify-start midscreen:pt-10'>
         {isLoading ? <p style={{textAlign:'center', fontSize:'18px'}}>Registering...</p> : mainContent}
    </main>
  );
}

export default Register;
