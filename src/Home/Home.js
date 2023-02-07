import React, { useEffect } from 'react'
import './Home.css'
import MovieList from '../Movies/MovieList'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies,fetchAsyncShows } from '../Redux/MovieSlice'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows())
  },[dispatch])
  return (
    <div>
      <div className="banner"></div>
      <MovieList />
    </div>
  )
}

export default Home