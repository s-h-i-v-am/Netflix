import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./Login"
import Browse from './Browse'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utilis/Firebase';
import {useDispatch} from "react-redux"
import {addUser, removeUser} from "../../src/utilis/UserSlice"




const Body = () => {

  const dispatch = useDispatch();
  const router = createBrowserRouter([

    {
      path:"/",
      element:<Login />
    },
    {
      path:"/browse",
      element:<Browse />
    },
  
  ])

  useEffect(()=>{

      onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
      } else {
        // User is signed out
        dispatch(removeUser())
      }

    });
  },[])


  return (
    <RouterProvider router={router} />
  )
}

export default Body