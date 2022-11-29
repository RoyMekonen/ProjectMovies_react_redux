import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {FaStar, FaCalendar, FaFilm, FaThumbsUp} from "react-icons/fa"

import "./MovieDetail.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,removeSelectedMovieOrShow
} from "../../features/movies/movieSlice";

export default function MovieDetail() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  console.log(data);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return ()=>{
      dispatch(removeSelectedMovieOrShow())
    }
  }, [dispatch, imdbID]);
  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (<div>...Loading</div>)
      :(
      <>
      <div className="section-left">
        <div className="movie-title">{data.Title}</div>
        <div className="movie-rating">
          <span>
            IMDB Rating - <FaStar className="fa fa-star"></FaStar>
            {data.imdbRating}
          </span>
          <span>
            IMDB Votes - <FaThumbsUp className="fa fa-thumbs-up"> </FaThumbsUp>
            {data.imdbVotes}
          </span>
          <span>
            Runtime - <FaFilm className="fa fa-film"></FaFilm>
            {data.Runtime}
          </span>
          <span>
            Year -  <FaCalendar className="fa fa-calender"></FaCalendar>
            {data.Year}
          </span>
        </div>
        <div className="movie-plot">{data.Plot}</div>
        <div className="movie-info">
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Starts</span>
            <span>{data.Actors}</span>
          </div>
          <div>
            <span>Genres</span>
            <span>{data.Genre}</span>
          </div>
          <div>
            <span>Languages</span>
            <span>{data.Language}</span>
          </div>
          <div>
            <span>Awards</span>
            <span>{data.Awards}</span>
          </div>
        </div>
      </div>
      <div className="section-right">
        <img src={data.Poster} alt={data.Title} />
      </div>
      </>
      )}
    </div>
  );
}
