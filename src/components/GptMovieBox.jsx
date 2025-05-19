import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const GptMovieBox = () => {
  const movieArray = useSelector((store) => store.gpt.gptArray);
  const [movies, setMovies] = useState([]);

  const movieData = async (movie) => {
    const res = await fetch(
      `https://www.omdbapi.com/?s=${movie}&apikey=3cdabf50`
    );
    const data = await res.json();
    // console.log(data?.Search[0]);
    return data?.Search[0];
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await Promise.all(
        movieArray.map(async (item) => await movieData(item))
      );
      setMovies(response.filter(Boolean));
    };

    if (movieArray.length > 0) {
      fetchMovies();
    }
  }, [movieArray]);

  console.log(movies);
  return (
    <div className="gpt-movie-container flex">
      {movies.map((item, index) => (
        <div className="gpt-movie-card">
          <h2>{item?.Title}</h2>
          <img src={item?.Poster} alt="" />
          <p>Year : {item?.Year}</p>
        </div>
      ))}
    </div>
  );
};

export default GptMovieBox;
