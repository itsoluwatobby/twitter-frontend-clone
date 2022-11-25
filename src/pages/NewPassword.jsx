// import React, { useEffect, useState } from 'react';
// import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
// //import { Link, useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import { FaTimes, FaCheck, FaInfoCircle, FaTwitter } from 'react-icons/fa';
// //import { authUsers } from "../../api/axiosFetch";

// const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,24}$/

// const NewPassword = () => {
//    //const navigate = useNavigate();
//    const [show, setShow] = useState(false);
//    const [error, setError] = useState('');
//    const [loading, setLoading] = useState(false);
//    const [validPassword, setValidPassword] = useState(false);
//    const [success, setSuccess] = useState(false);
//    const [password, setPassword] = useState('');

//    useEffect(() => {
//       const validPass = PASSWORD_REGEX.test(password);
//       setValidPassword(validPass)
//    }, [password])

//    const handleRegister = async(e) => {
//       e.preventDefault()
//       setLoading(true)
//       try{
//          const pass = PASSWORD_REGEX.test(password)
//          if(pass){
//             // const response = await authUsers.post('/register', 
//             // {password})
//             setSuccess(true)
//             setPassword('')
//             //navigate('/login')
//          }
//          else setError('Inputs are not valid')
//       } 
//       catch(error){
//          setSuccess(false)
//          setLoading(false)
//          !error.response && setError('No Server Response')
//          error.response?.status === 403 && setError('Bad Credentials')
//          error.response?.status === 400 && setError('Invalid Input')
//       }finally{
//          setSuccess(false)
//          setLoading(false)
//       }
//    }

//    const canSave = Boolean(password)

//    let successContent = ( 
//       <div style={successStyle}>
//          <p>
//             Registration Successful!!
//          </p>
//       </div>     
//    )

//    let errorContent = ( 
//       <div style={errorStyle}>
//          <p>
//             {error}
//          </p>
//       </div>     
//    )

//    let mainContent = (
//       <div className="loginWrapper">
//          <div className="loginLeft">
//             <h3 className="loginLogo">Oluwatobby <FaTwitter className='twitter'/></h3>
//             <span className="loginDesc">Connect with friends and the world around you on Oluwatobby</span>
//          </div>
//          <div className="loginRight">
//             <form onSubmit={handleRegister} className="loginBox" onClick={() => setError(false)}>
//                {success && successContent}
//                {error && errorContent}
//                <label htmlFor='password'>
//                   Password: {!password ? '' : validPassword ? <FaCheck className='green'/> : <FaTimes className='red'/> }
//                </label>
//                <div className="pass">
//                   <input 
//                      type={show ? "text" : "password"} 
//                      placeholder='Password' 
//                      id="password"
//                      required
//                      value={password}
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
//                {!validPassword && password &&
//                   <p style={passStyle}>
//                      <FaInfoCircle />
//                      <span>
//                         must contain at least a letter, a number, a symbol, a minimum of 5 and maximum of 25 characters. Avoid using<span className='quotes'>quotes</span>
//                      </span>
//                   </p>
//                }
            
//                   <button type="submit" 
//                      className={!canSave ? 'none' : 'loginButton'} 
//                      disabled={!canSave && validPassword}
//                      >reset password</button>
//                {/* <Link className='links' to='/login'>    */}
//                   <button 
//                      type='button' 
//                      className="loginRegisterButton"
//                      >Log into your Account
//                   </button>
//                {/* </Link> */}
//             </form>
//          </div>
//       </div>
//    )

//   return (
//     <Container>
//          {loading ? <p style={{textAlign:'center', fontSize:'18px'}}>Registering...</p> : mainContent}
//     </Container>
//   );
// }

// export default NewPassword;

// const Container = styled.div`
//    width: 100%;
//    height: 100vh;
//    background-color: #f0f2f5;
//    display: flex;
//    align-items: center;
//    justify-content: center;

//    label{
//       display: flex;
//       align-items: center;
//       gap: 0.2rem;
//       font-weight: 600;
//       margin-bottom: 0;
//    }

//    .quotes{
//       text-transform: uppercase;
//       font-size: 12px;
//       color: red;
//    }

//    .green{
//       color: green;
//       font-size: 22px;
//       padding: 0;
//       margin: -5px 0 -10px 0;
//    }

//    .red{
//       color: red;
//       font-size: 24px;
//       margin: -10px 0;
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
//         display: flex;
//         flex-direction: column;
//         gap: 0.2rem;

//         .loginLogo{
//           font-size: 50px;
//           font-weight: 800;
//           color: #1775ee;
//           display: flex;
//           align-items: center;
//           gap: 1rem;

//           .twitter{
//              box-shadow: -2px 4px 16px rgba(0,0,0,0.5);
//              border-radius: 50%;
//              font-size: 65px;
//           }
//        }

//          .loginDesc{
//           margin-top: -2rem;
//           font-size: 24px;
//           text-transform: capitalize;
//          }
//       }

//       .loginRight{
//          padding: 10px;
//          position: relative;

//          .loginBox{
//             padding: 15px 20px;
//             background-color: #ffffff;
//             border-radius: 10px;
//             display: flex;
//             flex-direction: column;
//             gap: 0.3rem;
//             box-shadow: -2px 4px 16px rgba(0,0,0,0.2);
//             justify-content: space-between;

//             .loginInput{
//                min-height: 45px;
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

//             p{
//                span{
//                   padding-left: 10px;
//                }
//             }

//             .loginButton{
//                min-height: 50px;
//                border-radius: 10px;
//                border: none;
//                background-color: #1775ee;
//                color: white;
//                font-size: 20px;
//                margin-top: 0.5rem;
//                font-weight: 500;
//                text-transform: capitalize;
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

//             .none{
//                min-height: 50px;
//                border-radius: 10px;
//                border: none;
//                background-color: lightgray;
//                color: white;
//                font-size: 20px;
//                margin-top: 0.5rem;
//                text-transform: capitalize;
//                font-weight: 500;
//                cursor: pointer;
//                transition: all 0.25s ease-in-out;
//             }

//             .loginForgot{
//                text-align: center;
//                color: #1775ee;
//             }

//             .loginRegisterButton{
//                padding: 5px 10px;
//                width: 100%;
//                align-self: center;
//                border-radius: 10px;
//                border: none;
//                background-color: #42b72a;
//                color: white;
//                margin-top: 0.2rem;
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
//          }
//       }

//       @media (max-width: 768px){
//          flex-direction: column;
//          gap: 0.4rem;
//       }
//    }

//    @media (max-width: 768px){
//       align-items: flex-start;
//       margin-top: -2rem;
//    }
// `

// const successStyle = {
//    display: 'flex', width: '70%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'cyan', borderRadius: '10px', padding: '20px', color: 'green', fontSize: '24px', right: '28px', top: '40px', zIndex: '5', position: 'absolute'
// }

// const errorStyle = {
//    display: 'flex', width: '70%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightgray', borderRadius: '10px', padding: '20px', color: 'red', fontSize: '24px', right: '28px', top: '40px', zIndex: '5', position: 'absolute', whiteSpace: 'nowrap'
// }

// const passStyle = {
//    width: '97%', margin: '-2px 0 -3px 0', padding: '2px 5px 2px 5px', backgroundColor: 'black', borderRadius: '10px', color: 'white', textTransform: 'lowercase', fontSize: '14px', display: 'flex', flexDirection: 'column', textAlign: 'left'
// }
