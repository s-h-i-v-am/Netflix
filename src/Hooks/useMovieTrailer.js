import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utilis/constants";
import { addMovieTrailer } from "../utilis/MovieSlice";

const useMovieTrailer = (movieId)=>{

    const dispatch = useDispatch();
  
    async function GetMovieTrailer()
    {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,API_OPTIONS)
        const moveiclips = await data.json();

        const filterTrailer = moveiclips.results.filter((clip)=> clip.type === "Trailer");
        const trailer = filterTrailer.length ? filterTrailer[0] : moveiclips.results[0] ;
        dispatch(addMovieTrailer(trailer));
    }  

    useEffect(()=>{
        GetMovieTrailer();
    },[])

}

export default useMovieTrailer