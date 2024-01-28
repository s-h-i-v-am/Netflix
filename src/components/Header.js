import React, { useEffect } from 'react'
import logo from "../assets/Netflix_Logo_PMS.png"
import { signOut } from "firebase/auth";
import { auth } from '../utilis/Firebase';
import { useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import {useDispatch} from "react-redux"
import {addUser, removeUser} from "../../src/utilis/UserSlice"
import { ToggleGptPage } from '../utilis/GptSlice';
import { languages } from '../utilis/languages';
import { changelanguage } from '../utilis/LanguageSlice';

const Header = () => {
    
  const dispatch = useDispatch();
  const GptPage = useSelector(store => store.Gpt.ShowGptPage);
  const navigate = useNavigate();
  const user = useSelector((store) => store.User)

  

    useEffect(()=>{

      const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/");
      }

    });

    return () => unsubscribe();

  },[])

  function handleSignOut()
    {
        signOut(auth).then(() => {
            
          }).catch((error) => {
            // An error happened.
            navigate("/error")
          });
  }
    
  function handleGptPage()
    {
      dispatch(ToggleGptPage())
    }

  function handleLanguage(e)
  {
    dispatch(changelanguage(e.target.value))
  }

  return (
    <div className='max-w-[1180px] w-10/12 mx-auto py-2 flex items-center justify-between'>
        <img className='w-40' src={logo} alt="" />
        {user && (
          <div className='flex items-center gap-4'>
            {GptPage && <select className='outline px-4 py-2 border-0' onChange={handleLanguage}>
               {
                 languages.map((lang)=>(
                   <option 
                   key={lang.identifier} 
                   value={lang.identifier}
                   >
                    {lang.name}
                   </option>
                 ))
               } 
            </select>}
            <button onClick={handleGptPage} className='bg-white px-4 py-3 font-bold rounded-md'>{GptPage ? "Home Page" : "GPT Page"}</button> 
            <button onClick={handleSignOut} className='bg-red-600 py-3 rounded-md px-4 font-bold text-white'>Sign Out</button>
            <img className='w-[30px] h-[30px]' src={user?.photoURL} alt="" />
          </div>
        )
          
        }
    </div>
  )
}

export default Header