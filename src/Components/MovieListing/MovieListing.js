import React from "react";
import Slider from "react-slick";
import { settings } from "../../common/settings";
import { useSelector } from "react-redux";
import { getAlMovies ,getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

export default function MovieListing() {

  const movies = useSelector(getAlMovies);
  const shows = useSelector(getAllShows);
  console.log(movies);
  let renderMovies = "";
  let renderShows ="";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

    renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="shows-error">
        <h3>{shows.Error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container"><Slider {...settings}>{renderMovies}</Slider></div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="show-container"><Slider  {...settings}>{renderShows}</Slider></div>
      </div>
    </div>
  );
}
