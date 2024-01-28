import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const Movies = () => {
  
  const nowPlayings = useSelector(store => store.Movie?.NowPlaying);
  const popularMovies = useSelector(store => store.Movie?.PopularMovies);
  if(!nowPlayings || !popularMovies) return;

  return (
    <div className='bg-black px-10'>
        <MovieList title={"Now Playing"} movies={nowPlayings}/>
        <MovieList title={"Popular"} movies={popularMovies}/>
        <MovieList title={"Trending"} movies={nowPlayings}/>
        <MovieList title={"Now Playing"} movies={nowPlayings}/>
    </div>
  )
}

export default Movies