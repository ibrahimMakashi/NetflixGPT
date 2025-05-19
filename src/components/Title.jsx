import React, { useEffect, useState } from "react";

const Title = () => {
  const [first, setFirst] = useState("");
  const frontMovie = async () => {
    const movie = "tt15354916";
    const res = await fetch(
      `https://www.omdbapi.com/?i=${movie}&apikey=3cdabf50`
    );
    const data = await res.json();
    setFirst(data);
  
  };

  useEffect(() => {
    frontMovie();
  }, []);
  return (
    <div className="title">
      <div className="title-info">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQhs9Sw7F68WjTseaTzGWVvBH92eOSSwRRqg&s"
          alt=""
        />
        <h1>
          {first?.Title} - {first?.Plot}
        </h1>
        <div>
          <button className="title-btn-play">Play</button>
          <button className="title-btn-more-info">More info</button>
        </div>
      </div>
    </div>
  );
};

export default Title;
