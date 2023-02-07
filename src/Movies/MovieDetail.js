import './MovieDetail.css'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAsyncMovieOrShowDetail, getSelectedMovieOrShow,removeSelectedMovieOrShow } from '../Redux/MovieSlice';

const MovieDetail = (props) => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector(getSelectedMovieOrShow)
  console.log(detail)
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID))
    return ()=>{
      dispatch(removeSelectedMovieOrShow())
    }
  }, [dispatch, imdbID])
  return (
    <div className='movie-section'>
      <div className="section-left">
        <div className="movie-title">{detail.Title}</div>
        <div className="movie-rating">
          <span>IMDB Rating <i className='fa fa-star'></i> : {detail.imdbRating}</span>
          <span>IMDB Votes <i className='fa fa-thumbs-up'></i> : {detail.imdbVotes}</span>
          <span>Runtime <i className='fa fa-film'></i> : {detail.Runtime}</span>
          <span>Year <i className='fa fa-calendar'></i> : {detail.Year}</span>
        </div>
        <div className="movie-plot">
          {detail.Plot}
        </div>
        <div className="movie-info">
          <div>
            <span>Director :</span>
            <span>{detail.Director}</span>
          </div>
          <div>
            <span>Star :</span>
            <span>{detail.Actors}</span>
          </div>
          <div>
            <span>Generes :</span>
            <span>{detail.Genre}</span>
          </div>
          <div>
            <span>Language :</span>
            <span>{detail.Language}</span>
          </div>
          <div>
            <span>Awards :</span>
            <span>{detail.Awards}</span>
          </div>
        </div>
      </div>
      <div className="section-right">
        <img src={detail.Poster} alt={detail.Title} />
      </div>

    </div>
  )
}

export default MovieDetail
