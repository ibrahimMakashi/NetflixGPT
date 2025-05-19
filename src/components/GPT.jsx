import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addGptArray } from "../utils/gptSlice";
import GptMovieBox from "./GptMovieBox";

const GPT = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch()

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);
  

    try {
      const res = await axios.post(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          model: "llama3-70b-8192",
          messages: [
            {
              role: "system",
              content: `You are a movie recommendation engine. 
Always return exactly 5 movie names based on the user's input.
Only return the movie names, strictly comma-separated, with no numbering or extra text. 
Example format: Movie 1, Movie 2, Movie 3, Movie 4, Movie 5`,
            },
            {
              role: "user",
              content: query,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer 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`, // ← Replace this
            "Content-Type": "application/json",
          },
        }
      );

      const reply = res.data.choices[0].message.content;
      const movieArray = reply.split(",").map((item) => item.trim());

      console.log(movieArray);
      dispatch(addGptArray(movieArray))
      
    } catch (error) {
      console.error("Error from Groq:", error);
      
    }

    setLoading(false);
  };


  return (
    <div className="gpt ">
      <div className="gpt-search-box">
        <input
          type="text"
          placeholder="Search movies here"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>{loading ? 'GPT searching' : 'Search'}</button>
      </div>
      <div className="response-box">
        <GptMovieBox/>
      </div>
    </div>
  );
};

export default GPT;
