import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    
    // console.log(movies)

    return (
    <div className='pt-10'>

        <h1 className='font-bold text-3xl'>{title}</h1>

        <div className='whitespace-nowrap mt-6 overflow-x-auto'>
            {
            movies?.map((movie)=>(
                <MovieCard key={movie.id} posterpath={movie?.poster_path}/>
            ))
            }
        </div>
        

    </div>
  )
}

export default MovieList