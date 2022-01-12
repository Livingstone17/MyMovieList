import React from 'react'

function MovieItem({movie}) {

    const baseUrl = "https://image.tmdb.org/t/p/w500/";

    return (
        <div className='card moviecard'>
            <div className='card-body'>
                <img src={`${baseUrl}${movie.poster_path}`} className="img-fluid"/>
                <div className='rating-container'>
                    <h5 className='rating'>{movie.vote_average}</h5>
                </div>
               
            </div>
            
        </div>
    )
}

export default MovieItem
