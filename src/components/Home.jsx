import React from "react";
import Title from "./Title";
import VideoBG from "./VideoBG";
import MoviesContainer from "./moviesContainer";

const Home = () => {
  return (
    <div>
      <div className="top-title">
        <Title />
        <VideoBG />
      </div>
      <MoviesContainer />
    </div>
  );
};

export default Home;
