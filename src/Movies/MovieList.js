import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies,getAllShows } from '../Redux/MovieSlice'
import MovieCard from './MovieCard'
import './Movielist.css'

const MovieList = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows)
  // console.log(movies)
  let renderMovies,renderShows = ''

  renderMovies = movies.Response === "True" ? (
    movies.Search.map ((movie,index) => 
      <MovieCard key={index} data={movie} />
    )
  ) : (
    <div className='movie-error'>
      <h2>{movies.Error}</h2>
    </div>
  )
  renderShows = shows.Response === "True" ? (
    shows.Search.map ((movie,index) => 
      <MovieCard key={index} data={movie} />
    )
  ) : (
    <div className='movie-error'>
      <h2>{shows.Error}</h2>
    </div>
  )
  return (
    <div className='movie-wrapper'>
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {renderMovies}
        </div>
        <div className="show-list">
          <h2>Shows</h2>
          <div className="movie-container">

          {renderShows}
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default MovieList 