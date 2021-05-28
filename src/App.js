import "./App.css";
import React, { useEffect } from "react";
import Row from "./row.js";
import request from "./request";
import Banner from "./banner.js";
import Nav from "./nav.js";
function App() {
  useEffect(() => {});
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.netflixOriginals}
        orignal={true}
      />
      <Row title="Trending Now" fetchUrl={request.trending} />
      <Row title="Top Rated" fetchUrl={request.topRated} />
      <Row title="Action Movies" fetchUrl={request.actionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.comedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.horrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.romanceMovies} />
      <Row title="Documentries" fetchUrl={request.documentries} />
    </div>
  );
}

export default App;
