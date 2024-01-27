import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utilis/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addMovieTrailer } from '../utilis/MovieSlice';
import useMovieTrailer from '../Hooks/useMovieTrailer';

const TrailerVideo = ({movieId}) => {
  
  const trailerVideo = useSelector(store => store.Movie?.movieTrailer)
  useMovieTrailer(movieId)
  
  return (
    <div className='aspect-video bg-black' >
        <iframe
        className='w-full h-full opacity-50' 
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1`}
        >
        </iframe>
    </div>
  )
}

export default TrailerVideo