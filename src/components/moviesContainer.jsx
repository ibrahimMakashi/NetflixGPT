import React, { useEffect, useState } from "react";
import MovieBox from "./MovieBox";

const MoviesContainer = () => {
  const [first, setFirst] = useState([]);
  const [second, setSecond] = useState([]);
  const [third, setThird] = useState([]);
  const [fourth, setFourth] = useState([]);
  const [fifth, setFifth] = useState([]);
  const frontMovie = async (query, state) => {
    const res = await fetch(
      `https://www.omdbapi.com/?s=${query}&apikey=3cdabf50`
    );
    const data = await res.json();
    state(data?.Search);
  };

  useEffect(() => {
    frontMovie("avengers", setFirst);
    frontMovie("transformers", setSecond);
    frontMovie("harry potter", setThird);
    frontMovie("superman", setFourth);
    frontMovie("batman", setFifth);
  }, []);



  return (
    <div className="main-movie-container">
      <div className="first-movie">
      </div>
      <div className="movie-container">
        <MovieBox data={third} name={"harry potter"} />
        <MovieBox data={first} name={"The avengers"} />
        <MovieBox data={second} name={"transformers"} />
        <MovieBox data={fourth} name={"superman"} />
        <MovieBox data={fifth} name={"batman"} />
      </div>
    </div>
  );
};

export default MoviesContainer;
