const apiKey = "b24031e146455369bfa5e1f1c8cdee73";

const request = {
  trending: `trending/all/week?api_key=${apiKey}&language=en-US`,
  netflixOriginals: `discover/tv?api_key=${apiKey}&with_networks=213`,
  topRated: `movie/top_rated?api_key=${apiKey}&language=en-US`,
  actionMovies: `discover/movie?api_key=${apiKey}&with_genres=28`,
  comedyMovies: `discover/movie?api_key=${apiKey}&with_genres=35`,
  horrorMovies: `discover/movie?api_key=${apiKey}&with_genres=27`,
  romanceMovies: `discover/movie?api_key=${apiKey}&with_genres=10749`,
  documentries: `discover/movie?api_key=b24031e146455369bfa5e1f1c8cdee73&with_genres=99`,
};

export default request;
