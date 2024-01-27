import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import usePopularMovies from '../Hooks/usePopularMovies';
import Header from './Header'
import Movies from './Movies';
import Trailer from './Trailer';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      <div className='absolute top-0 text-white w-full -z-40 bg-green-950'>
        <Trailer />
        <Movies />
      </div>
    </div>
  )
}

export default Browse