import React, {useState,useEffect} from 'react'
import MovieItem from './MovieItem';
import axios from "axios";

const MovieList = ()=> {

    const [movies,setMovies] = useState([]);

    useEffect(() => {
        const key = 'c85933bac8b8a256dd48a7b1573cea01';

    const getMovieData = async()=>{
        const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`); 

        setMovies(res.data.results);
    };
    getMovieData();
       
    }, [])

    
    return (
        <div>
            <div className='container'>
                <h5>Trending Movies Today</h5>
                <div className='row'>
                {movies.map((movie)=>(<MovieItem key={movie.id} movie={movie}/>))
                } 
                </div>
            </div>
        </div>
    )
}

export default MovieList
