import React, { useEffect, useState } from "react";
import "./row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchUrl, orignal }) {
  const [movies, setMovie] = useState([]);
  const [trailerUrl, settrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      fetch(`https://api.themoviedb.org/3/${fetchUrl}`)
        .then((response) => response.json())
        .then((request) => setMovie(request.results));
    }
    fetchData();
  }, [fetchUrl]);
  const baseURL = "https://image.tmdb.org/t/p/original/";

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      settrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          settrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="row">
      <h1 className="row__title">{title}</h1>
      <div className="row__poster-div">
        {movies.map((movie) => {
          return (
            <img
              onClick={() => handleClick(movie)}
              key={movie.id}
              className={`row__poster ${orignal && "row__bigger"}`}
              src={`${baseURL}${
                orignal ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name || ""}
            />
          );
        })}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
