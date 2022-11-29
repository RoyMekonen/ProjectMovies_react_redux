import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import MovieDetail from "./Components/MovieDetail/MovieDetail";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import "./App.scss";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/" component={HomePage} element={<HomePage />} />
            <Route
              path="/movie/:imdbID"
              component={MovieDetail}
              element={<MovieDetail />}
            />
            <Route component={PageNotFound} element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
