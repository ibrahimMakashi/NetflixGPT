import React, { useRef } from "react";

const MovieBox = ({ data, name }) => {
  const reference = useRef();

  const handleSlide = (direction) => {
    console.log("hi");
    const slide = 300;
    reference.current.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };
  return (
    <div className="movie-slide-container">
      <div className="movie-slide " ref={reference}>
        <h1>{name}</h1>
          <button
            className="poster-left-btn"
            onClick={() => handleSlide("left")}
          >
            
←
          </button>
        <div  className="movie-poster-slider flex gap-3.5">
          {data.map((item) => (
            <div className="movie-poster">
              <img src={item?.Poster} alt="" />
            </div>
          ))}
        </div>
          <button
            className="poster-right-btn"
            onClick={() => handleSlide("right")}
          >
            →
          </button>
      </div>
    </div>
  );
};

export default MovieBox;
