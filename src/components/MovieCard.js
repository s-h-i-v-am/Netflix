import React from 'react'
import { IMG_URL } from '../utilis/constants'


const MovieCard = ({posterpath}) => {
  return (
    <div className='w-48 inline-block mr-4'>
        <img src={IMG_URL + posterpath} alt="" />
    </div>
  )
}

export default MovieCard