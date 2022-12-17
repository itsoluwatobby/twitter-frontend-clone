import React, { useEffect, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
//import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaTimes, FaCheck, FaInfoCircle, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
//import { authUsers } from "../../api/axiosFetch";

const USER_REGEX = /^[A-Za-z][A-Za-z0-9_]{2,25}$/
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,24}$/
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const Register = () => {
   //const navigate = useNavigate();
   const [show, setShow] = useState(false);
   const [error, setError] = useState('');
   const [loading, setLoading] = useState(false);
   const [validUsername, setValidUsername] = useState(false);
   const [validPassword, setValidPassword] = useState(false);
   const [validEmail, setValidEmail] = useState(false);
   const [match, setMatch] = useState(false);
   const [success, setSuccess] = useState(false);
   const [register, setRegister] = useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
   });

   const {username, email, password, confirmPassword} = register;

   const handleChange = (e) => {
      const name = e.target.name
      const value = e.target.value
      setRegister({...register, [name]: value})
   }

   useEffect(() => {
      const result = USER_REGEX.test(username);
      setValidUsername(result)
   }, [username])

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

   const handleRegister = async(e) => {
      e.preventDefault()
      setLoading(true)
      try{
         const name = USER_REGEX.test(username)
         const pass = PASSWORD_REGEX.test(password)
         const email = email.includes('@')
         if(name && pass && email){
            // const response = await authUsers.post('/register', 
            // {username, email, password})
            setSuccess(true)
            //navigate('/login')
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

   const canSave = Object.values(register).every(Boolean)

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
      <div className="w-3/4 h-3/4 flex gap-2 midscreen:flex-col midscreen:gap-2 midscreen:-mt-8">
         <div className="flex flex-none w-3/5 midscreen:w-full flex-col justify-center gap-1.5">
            <h3 className="font-[800] text-5xl text-blue-500 flex items-center gap-4">Oluwatobby 
              <div className='shadow-sm rounded-3xl text-6xl p-2 bg-blue-100'>
                <FaTwitter className=''/>
              </div>
            </h3>
            <span className="mt-2 text-2xl capitalize">Connect with friends and the world around you on Oluwatobby</span>
         </div>
        <form onSubmit={handleRegister} 
          className="flex flex-col justify-center relative flex-auto shadow-2xl" onClick={() => setError(false)}>
          <div className="p-5 bg-white rounded-[10px] flex flex-col shadow-lg gap-2.5"> 
            <div className='w-full flex flex-col'> 
              <label className='flex items-center gap-1 font-semibold mb-0' htmlFor='username'>
                  Username: {!username ? '' : validUsername ? <FaCheck className='text-green-500 text-xl p-0 -mt-[5px] -mb-2.5'/> : <FaTimes className='text-red-500 text-2xl -mt-2.5 -mb-2.5'/>
                  }
              </label>
              <input 
                  type="text" 
                  id="username" 
                  name="username"
                  required
                  autoComplete='off'
                  minLength={3}
                  maxLength={25}
                  placeholder='Username' 
                  className="bg-blue-50 h-[45px] rounded-[10px] border border-gray-300 focus:outline-none text-lg pl-2" 
                  onChange={handleChange}   
              />
              </div>
              {!validUsername && username &&
                <p className='w-full -mt-2 -mb-1 p-1 pl-[5px] pr-[5px] bg-black rounded-[10px] lowercase text-sm flex flex-col text-left text-white'>
                    <FaInfoCircle />
                    <span className='pl-2.5'>
                      Username must begin with a letter, can have a lowercase or uppercase, a minimum of 3 and maximum of 25 characters.
                    </span>
                </p>
              }
              <div className='w-full flex flex-col'>
              <label className='flex items-center gap-1 font-semibold mb-0' htmlFor='email'>
                  Email: {!email ? '' : validEmail ? <FaCheck className='text-green-500 text-xl p-0 -mt-[5px] -mb-2.5'/> : <FaTimes className='text-red-500 text-2xl -mt-2.5 -mb-2.5'/> }
              </label>
              <input 
                  type="email" 
                  placeholder='johnDoe@mail.co'
                  name="email"
                  id="email"
                  minLength={5} 
                  maxLength={25} 
                  required
                  autoComplete='off'
                  className="bg-blue-50 h-[45px] rounded-[10px] border border-gray-300 focus:outline-none text-lg pl-2" 
                  onChange={handleChange}   
              />
              </div>
              {!validEmail && email &&
                <p className='w-full -mt-2 -mb-1 p-1 pl-[5px] pr-[5px] bg-black rounded-[10px] lowercase text-sm flex flex-col text-left text-white'>
                    <FaInfoCircle />
                    <span className='pl-2.5'>
                      email begin with a letter or number, contains at least a @ symbol, a minimum of 5 and a maximum of 25 characters.
                    </span>
                </p>
              }
              {success && successContent}
              {error && errorContent}
              <div className='w-full flex flex-col'>
              <label className='flex items-center gap-1 font-semibold mb-0' htmlFor='password'>
                  Password: {!password ? '' : validUsername && validPassword ? <FaCheck className='text-green-500 text-xl p-0 -mt-[5px] -mb-2.5'/> : <FaTimes className='text-red-500 text-2xl -mt-2.5 -mb-2.5'/> }
              </label>
              <div className="flex items-center rounded-[10px] border border-gray-300 h-[45px] relative">
                  <input 
                    type={show ? "text" : "password"} 
                    placeholder='Password' 
                    name="password"
                    id="password"
                    required
                    autoComplete='off'
                    className="bg-blue-50 h-full flex-auto border-none  focus:outline-none text-lg pl-2 object-cover" 
                    onChange={handleChange}   
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
              {!validPassword && password && validUsername &&
                <p className='w-full -mt-2 -mb-1 p-1 pl-[5px] pr-[5px] bg-black rounded-[10px] lowercase text-sm flex flex-col text-left text-white'>
                    <FaInfoCircle />
                    <span className='pl-2.5'>
                      must contain at least a letter, a number, a symbol, a minimum of 5 and maximum of 25 characters. Avoid using <span className='uppercase text-xs text-red-500'> quotes</span>
                    </span>
                </p>
              }
              <div className='w-full flex flex-col'>
              <label className='flex items-center gap-1 font-semibold mb-0'>Confirm Password:</label> 
              <div className="flex items-center rounded-[10px] border border-gray-300 h-[45px] relative">
                  <input 
                    type={show ? "text" : "password"} 
                    placeholder='Confirm Password' 
                    name='confirmPassword' 
                    required
                    autoComplete='off'
                    className="bg-blue-50 h-full flex-auto border-none  focus:outline-none text-lg pl-2 object-cover" 
                    onChange={handleChange}   
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
            {validPassword && !match && confirmPassword &&
              <p className='bg-black text-white flex rounded-[10px] items-center text-sm p-2.5 -mt-[9px] -mb-[5px]'>
                  <FaInfoCircle />
                  <span className='pl-2.5'>
                    password must be a match.
                  </span>
              </p>
            }
            {!password && confirmPassword &&
              <p className='w-full -mt-2 -mb-1 p-1 pl-[5px] pr-[5px] bg-black rounded-[10px] lowercase text-sm flex flex-col text-left text-white'>
                  <FaInfoCircle />
                  <span className='pl-2.5'>
                    a valid password input is required first.
                  </span>
              </p>
            }
              <button type="submit" 
                  className={`h-12 rounded-lg border-none bg-blue-500 text-white text-xl font-medium cursor-pointer transition duration-150 ease-in-out hover:text-white hover:brightness-75 active:brightness-100 ${!canSave && 'bg-gray-400'}`} 
                  disabled={!canSave && match && validPassword && validUsername}
                  >Sign Up</button>
            
            <Link className='text-white' to='/login'>   
              <button 
                  type='button' 
                  className="pt-1 pb-1 pl-2 pr-2 w-3/4 m-auto rounded-[10px] bg-teal-300 text-white text-xl cursor-pointer font-medium transition-all hover:brightness-90 hover:text-white active:brightness-100"
                  >Log into your Account
              </button>
            </Link>
          </div>
        </form>
      </div>
   )

  return (
    <main className='container h-screen bg-blue-50 flex items-center justify-center midscreen:flex-col midscreen:-mt-10'>
         {loading ? <p style={{textAlign:'center', fontSize:'18px'}}>Registering...</p> : mainContent}
    </main>
  );
}

export default Register;
