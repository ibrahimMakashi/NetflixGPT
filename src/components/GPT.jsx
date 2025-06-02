import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addGptArray } from "../utils/gptSlice";
import GptMovieBox from "./GptMovieBox";

const GPT = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);

    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

    // Combine instructions and user input into one message
    const prompt = `
You are a movie recommendation engine.
Always return exactly 5 movie names based on the user's input.
Only return the movie names, strictly comma-separated, with no numbering or extra text.
Example format: Movie 1, Movie 2, Movie 3, Movie 4, Movie 5

User query: ${query}
    `.trim();

    try {
      const res = await axios.post(
        url,
        {
          contents: [
            {
              role: "user",
              parts: [{ text: prompt }],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const reply = res.data.candidates?.[0]?.content?.parts?.[0]?.text || "";
      const movieArray = reply.split(",").map((m) => m.trim());

      console.log("Gemini response:", movieArray);
      dispatch(addGptArray(movieArray));
    } catch (error) {
      console.error("Gemini error:", error.response || error.message);
    }

    setLoading(false);
  };

  return (
    <div className="gpt">
      <div className="gpt-search-box">
        <input
          type="text"
          placeholder="Search movies here"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch} disabled={loading}>
          {loading ? "GPT searching" : "Search"}
        </button>
      </div>
      <div className="response-box">
        <GptMovieBox />
      </div>
    </div>
  );
};

export default GPT;
