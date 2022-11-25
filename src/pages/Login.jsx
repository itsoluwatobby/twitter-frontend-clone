// import React, { useContext, useEffect, useRef, useState } from 'react';
// import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
// //import { Link, useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import { FaTwitter } from 'react-icons/fa'
// //import { authUsers } from '../../api/axiosFetch';
// //import Spinner from '../assets/Spinner';

// const Login = () => {
//    const [show, setShow] = useState(false);
//    const inputRef = useRef();
//   // const navigate = useNavigate();
//    const [error, setError] = useState(''); 
//    const [loading, setLoading] = useState(false);
//    const [email, setEmail] = useState('');
//    const [password, setPassword] = useState('');

//    useEffect(() => {
//       inputRef.current.focus()
//    }, [])

//    const handleLogin = async(e) => {
//       e.preventDefault()
//       setLoading(true)
//       try{ 
//          // const response = await authUsers.post('/login', 
//          //    {email, password},
//          //    {
//          //       headers: {
//          //       'Content-Type': 'application/json'
//          //       },
//          //       withCredentials: true
//          //    }
//          // )
//          JSON.stringify(localStorage.setItem('isLoggedIn', true))
//          //navigate('/')
//          setEmail('')
//          setPassword('')
//       }
//       catch(error){
//          setLoading(false)
//          !error.response && setError('No Server Response')
//          error.response?.status === 403 && setError('Bad Credentials')
//          error.response?.status === 400 && setError('Invalid Input')
//       }
//       finally{
//          setLoading(false)
//       }
//       await setTimeout(() => {
//          setError(false)
//       }, 2000);
//    }

//    const canSaveLogIn = Boolean(email) && Boolean(password)

//    let errorContent = ( 
//       <div style={errorStyle}>
//          <p>
//             {error}
//          </p>
//       </div>     
//    )

//    let loginContent = (
//     <Container>
//       <div className="loginWrapper">
//          <div className="loginLeft">
//             <h3 className="loginLogo">Oluwatobby 
//             <FaTwitter className='twitter'/></h3>
//             <span className="loginDesc">Connect with friends and tweet across the globe. Connecting made easy</span>
//          </div>
//          <form onSubmit={handleLogin} className="loginRight">
//             <div className="loginBox">
//             <label htmlFor="email">Email:</label>
//                {error && errorContent}
//                <input 
//                   type="email" 
//                   ref={inputRef}
//                   placeholder='johnDoe@mail.co'
//                   id='email'
//                   autoComplete='off'
//                   required
//                   value= {email}
//                   className="loginInput" 
//                   onChange={e => setEmail(e.target.value)}   
//                />
//                <label htmlFor="password">Password:</label>
//                <div className="pass">
//                   <input 
//                      type={show ? "text" : "password"} 
//                      placeholder='Password' 
//                      id='Password' 
//                      value= {password}
//                      required
//                      autoComplete='off'
//                      className="loginInput" 
//                      onChange={e => setPassword(e.target.value)}   
//                   />
//                   {show ? 
//                      <AiFillEyeInvisible 
//                         onClick={
//                            () => setShow(prev => !prev)}
//                            className='eyePass'
//                      /> : 
//                      <AiFillEye 
//                         onClick={
//                            () => setShow(prev => !prev)}
//                            className='eyePass'
//                      />
//                   }
//                </div>
//                <button 
//                   type="submit" 
//                   className={!canSaveLogIn ? 'none' : 'loginButton'} 
//                      disabled={!canSaveLogIn}
//                      >Sign in</button>
//                      {/* <Link className="loginForgot" to='/forgotPassword'> */}
//                         <span>Forgot Password?</span>
//                      {/* </Link> */}
//                <button 
//                   type='button' 
//                   className="loginRegisterButton"
//                   >
//                      {/* <Link className='links' to='/register'> */}
//                         Create a New Account
//                         {/* </Link> */}
//                </button>
//             </div>
//          </form>
//       </div>
//     </Container>
//   );

//   return loading ? <Spinner /> : loginContent
// }

// export default Login;

// const Container = styled.div`
//    width: 100%;
//    height: 100vh;
//    background-color: #f0f2f5;
//    display: flex;
//    align-items: flex-start;
//    justify-content: center;

//    label{
//       display: flex;
//       align-items: center;
//       gap: 0.2rem;
//       font-weight: 600;
//       margin-bottom: 0;
//    }

//    .loginWrapper{
//       width: 70%;
//       height: 70%;
//       display: flex;
//       gap: 2rem;

//       .loginLeft, 
//       .loginRight{
//          flex: 1;
//          display: flex;
//          flex-direction: column;
//          justify-content: center;
//       }

//       .loginLeft{
//          display: flex;
//          flex-direction: column;
//          gap: 0.2rem;

//          .loginLogo{
//             font-size: 50px;
//             font-weight: 800;
//             color: #1775ee;
//             display: flex;
//             align-items: center;
//             gap: 1rem;

//             .twitter{
//                box-shadow: -2px 4px 16px rgba(0,0,0,0.5);
//                border-radius: 50%;
//                font-size: 65px;
//             }
//          }

//          .loginDesc{
//             margin-top: -2rem;
//             font-size: 24px;
//             text-transform: capitalize;
//          }
//       }

//       .loginRight{
//          position: relative;

//          .loginBox{
//             height: 300px;
//             padding: 20px;
//             background-color: #ffffff;
//             border-radius: 10px;
//             display: flex;
//             flex-direction: column;
//             box-shadow: -2px 4px 16px rgba(0,0,0,0.2);
//             justify-content: space-between;

//             .loginInput{
//                height: 45px;
//                border-radius: 10px;
//                border: 1px solid gray;
//                font-size: 18px;
//                padding-left: 10px;

//                &:focus{
//                   outline: none
//                }
//             }

//             .pass{
//                display: flex;
//                align-items: center;
//                border-radius: 10px;
//                border: 1px solid gray;
//                position: relative;

//                .eyePass{
//                   position: absolute;
//                   right: 5px;
//                   font-size: 28px;
//                   cursor: pointer;
//                   color: rgba(0,0,0,0.8);
//                }

//                .loginInput{
//                   border: none;
//                   border-radius: 10px;
//                   flex: 2;
//                   box-sizing: object-fit;
//                }
//             }

//             .loginButton{
//                height: 50px;
//                border-radius: 10px;
//                border: none;
//                background-color: #1775ee;
//                color: white;
//                font-size: 20px;
//                font-weight: 500;
//                cursor: pointer;
//                transition: all 0.25s ease-in-out;

//                &:hover{
//                   filter: brightness(0.7);
//                   color: white;
//                }

//                &:active{
//                   filter: brightness(1);
//                }
//             }

//             .loginForgot{
//                text-align: center;
//                color: #1775ee;
//                cursor: pointer;
//                text-decoration: none;
//                font-weight: 500;
//                display: inline;
//                transition: opacity 0.24s ease-in;

//                &:hover{
//                   opacity: 0.8;
//                }
//             }

//             .loginRegisterButton{
//                padding: 7px 10px;
//                width: 70%;
//                margin: 0 auto;
//                border-radius: 10px;
//                border: none;
//                background-color: #42b72a;
//                color: white;
//                font-size: 20px;
//                font-weight: 500;
//                cursor: pointer;
//                transition: all 0.25s ease-in-out;

//                &:hover{
//                   filter: brightness(0.7);
//                   color: white;
//                }

//                &:active{
//                   filter: brightness(1);
//                }

//                .links{
//                   color: white;
//                   text-decoration: none;
//                }
//             }

//             .none{
//                height: 50px;
//                border-radius: 10px;
//                border: none;
//                background-color: lightgray;
//                color: white;
//                font-size: 20px;
//                font-weight: 500;
//                cursor: pointer;
//                transition: all 0.25s ease-in-out;
//             }
//          }
//       }

//       @media (max-width: 768px){
//          flex-direction: column;
//          gap: 0.5rem;
//       }
//    }

//    @media (max-width: 768px){
//       align-items: flex-start;
//       margin-top: -2rem;
//    }
// `
// const errorStyle={
//    display: 'flex', width: '72%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightgray', borderRadius: '10px', padding: '18px', color: 'red', fontSize: '24px', right: '28px', top: '40px', zIndex: '5', position: 'absolute', whiteSpace: 'nowrap'
// }