import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import usePopularMovies from '../Hooks/usePopularMovies';
import GPTSearchPage from './GPTSearchPage';
import Header from './Header'
import Movies from './Movies';
import Trailer from './Trailer';

const Browse = () => {

  const ShowGptPage = useSelector(store => store.Gpt.ShowGptPage)
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      {
        ShowGptPage ? <GPTSearchPage /> : (<div className='absolute top-0 text-white w-full -z-40'>
        <Trailer />
        <Movies />
      </div>)
      }
      
    </div>
  )
}

export default Browse