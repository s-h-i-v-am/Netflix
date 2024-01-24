import React, { useRef, useState } from 'react'
import { CheckValidation } from '../utilis/Validation';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utilis/Firebase"
import {Navigate, useNavigate} from "react-router-dom"
import Header from './Header';
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utilis/UserSlice';

const Login = () => {
  
  const [isSignIn, setisSignIn] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState(null)
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();  
  const dispatch = useDispatch();


  function handleForm(e)
  {
    e.preventDefault();
    // Validation
    const message = CheckValidation(email.current.value , password.current.value);
    setErrorMessage(message);

    if(message) return;

    if(!isSignIn)
    {
        // Sign In Logic
        signInWithEmailAndPassword(auth, email.current.value , password.current.value)
        .then((userCredential) => {
            const user = userCredential.user;
            navigate("/browse");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage)
        });
    }
    else
    {
        // Sign up Logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;


            updateProfile(user , {
                displayName: name.current.value, photoURL: "https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
              }).then(() => {

                const {uid,email,displayName,photoURL} = auth.currentUser;
                dispatch(
                    addUser({
                        uid:uid,
                        email:email,
                        displayName:displayName,
                        photoURL:photoURL
                    })
                )
                navigate("/browse");
              }).catch((error) => {
                setErrorMessage(error.message)
              });
              

            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage)
        });
    }
}   


  return (
    <div className='relative w-full min-h-screen bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg")] bg-no-repeat bg-center bg-cover'>
        
        <Header />

        <form onSubmit={handleForm} className='bg-[rgba(0,0,0,0.8)] py-14 px-8 rounded-md w-[30%] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white'>
            <h1 className='font-bold text-3xl'>{isSignIn ? "Sign Up" :"Sign In"}</h1>
            {isSignIn && <input 
            ref={name}
            type="text" 
            placeholder='Your Name' 
            className='w-full p-3 mt-8 bg-gray-800 outline-none'/>}

            <input
            ref={email} 
            type="email" 
            placeholder='Enter Email' 
            className='w-full p-3 mt-6 bg-gray-800 outline-none'/>

            <input
            ref={password} 
            type="password" 
            placeholder='Enter Password' 
            className='w-full p-3 mt-6 bg-gray-800 outline-none'/>

            <p className='text-red-700 font-bold mt-4'>{ErrorMessage}</p>

            <button className='w-full mt-8 bg-red-800 p-3 rounded-md'>{isSignIn ? "Sign Up" :"Sign In"}</button>
            
            <p onClick={()=> setisSignIn(!isSignIn)} className='mt-14 cursor-pointer'>{isSignIn ? "Already Registered? Sign In Now" : "New to Netflix? Sign Up Now"}</p>
        </form>
    </div>
  )
}

export default Login