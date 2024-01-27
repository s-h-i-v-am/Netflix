import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utilis/constants";
import { addNowPlayingMovies } from "../utilis/MovieSlice";


const useNowPlayingMovies = ()=>{

  const dispatch = useDispatch();

  async function GetNowPlayingMovies()
  {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(()=>{
    GetNowPlayingMovies();
  },[])

}

export default useNowPlayingMovies;