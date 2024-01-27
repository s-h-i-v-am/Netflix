import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import TrailerVideo from './TrailerVideo'



const Trailer = () => {
  
  const movie = useSelector((store)=> store.Movie?.NowPlaying)  
  if(!movie) return
  
  const mainmovie = movie[0];
  const {original_title,overview,id} = mainmovie;

  return (
    <div className='relative'>
        <TrailerVideo movieId={id}/>
        <div className='absolute pl-12 -translate-y-[50%] top-[50%] w-[40%]'>
            <h1 className='font-bold text-5xl'>{original_title}</h1>
            <p className='w-[80%] my-6 text-[16px]'>{overview}</p>
            <div className='flex gap-3'>
                <button className='bg-white text-black px-10 py-4 font-bold '>Play</button>
                <button className='bg-gray-700 text-white px-10 py-4 font-bold'>More Info</button>
            </div>
        </div>
    </div>
  )
}

export default Trailer