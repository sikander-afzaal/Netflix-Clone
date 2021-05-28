import React, { useState, useEffect } from "react";
import "./banner.css";

function Banner() {
  const baseURL = "https://image.tmdb.org/t/p/original/";

  const [movies, setMovie] = useState([]);

  useEffect(() => {
    function fetchData() {
      fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=b24031e146455369bfa5e1f1c8cdee73&with_networks=213`
      )
        .then((response) => response.json())
        .then((request) => {
          setMovie(
            request.results[Math.floor(Math.random() * request.results.length)]
          );
        });
    }
    fetchData();
  }, []);

  return (
    <div className="banner__wrapper">
      <div
        style={{
          backgroundImage: `url("${baseURL}${movies.backdrop_path}")`,
        }}
        className="banner"
      >
        <div className="banner__contents">
          <h1 className="banner__h1">{movies.name || movies.title || ""}</h1>
          <div className="btn__div">
            <button className="btn">Play</button>
            <button className="btn">My List</button>
          </div>
          <p className="banner__p">{movies.overview}</p>
        </div>
      </div>
      <div className="banner__fade"></div>
    </div>
  );
}

export default Banner;
