import React, {useState,useEffect} from 'react'
import MovieItem from './MovieItem';
import axios from "axios";

const MovieList = ()=> {

    const [movies,setMovies] = useState([]);
    const [query,setQuery] = useState('');

    useEffect(() => {
        
        const key = 'c85933bac8b8a256dd48a7b1573cea01';

    const getMovieData = async()=>{
        const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`); 

        setMovies(res.data.results);
    };
    getMovieData();
       
    }, [])
    
    const SearchMovies = async (e) =>{
        e.preventDefault();
        alert('search movie');
        const key = 'c85933bac8b8a256dd48a7b1573cea01';
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`); 

        setMovies(res.data.results);
        console.log(res.data.results);
    } 
    
    return (
        <div>
            <div className='container'>
                <h5>Trending Movies Today</h5>
                <form className='form' onSubmit={SearchMovies}>
                    <input className='input' type='text' name='query' value={query} onChange={(e)=> setQuery(e.target.value)} placeholder='search movie by name'/>
                    <button className='button' type='submit'>Search</button>
                </form>
                <div className='row'>
                {movies.map((movie)=>(<MovieItem key={movie.id} movie={movie}/>))
                } 
                </div>
            </div>
        </div>
    )
}

export default MovieList
