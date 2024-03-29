import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import user from "../../images/user.jpg";
import { FaSearch } from "react-icons/fa";

import "./Header.scss";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

export default function Header() {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if(term=== "") return alert("Please Enter Something")
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("")

    console.log(term);
  };
  return (
    <div className="header">
      <div className="logo">
        {" "}
        <Link to="/">Movie App</Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search Moives or Show"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            <FaSearch className="fa fa-search"></FaSearch>
          </button>
        </form>
      </div>

      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
}
