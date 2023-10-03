import React from 'react'
import { Link } from 'react-router-dom'

const API_IMG = 'https://image.tmdb.org/t/p/w500/'

const MovieCards = ({ title, poster_path, vote_average, release_date, overview, name, id, first_air_date, original_title }) => {

  return (
    <div className='movie-card'>
      <img className='card-img-top' src={API_IMG + poster_path} alt={`Poster of ${title}`} />
      <div className='card-body'>
        <Link to={`/infoMovies/${id}`}>
          <h3 className='card-title'>{original_title}</h3>
          <p className='card-text'>{overview}</p>
          <p className='card-text'>{release_date}</p>
          <p className='card-text'>{vote_average}</p>
        </Link>       
      </div>
    </div>
  )
}

export default MovieCards