import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utilis/constants";
import { addPopularMovies } from "../utilis/MovieSlice";


const usePopularMovies = ()=>{

  const dispatch = useDispatch();

  async function GetPopularMovies()
  {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1',API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  }

  useEffect(()=>{
    GetPopularMovies();
  },[])

}

export default usePopularMovies;