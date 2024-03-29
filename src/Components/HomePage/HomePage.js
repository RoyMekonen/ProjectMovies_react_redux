import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";
export default function HomePage() {
  const dispatch = useDispatch();
  const movieText ="Harry";
  const seriesText = "Friends"
  useEffect(() => {
 dispatch(fetchAsyncMovies(movieText));
  dispatch(fetchAsyncShows(seriesText))
  }, [dispatch]);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
}
