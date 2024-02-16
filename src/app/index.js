"use client";

import { useEffect, useState } from "react";
export default function Search() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const api_key = process.env.NEXT_PUBLIC_API_KEY;
  const [title, setTitle] = useState('');
  useEffect(() => {
    let timer;
    
    if (title) {
      setLoading(true);
      timer = setTimeout(() => {
        fetch(`https://www.omdbapi.com/?t=${title}&apikey=${api_key}`)
          .then((res) => res.json())
          .then((data) => {
            setData(data);
            setLoading(false);
          })
          .catch((err) => {
            console.error("Error fetching data:", err);
            setLoading(false);
            setData(null);
          });
      }, 200);
    }
    return () => clearTimeout(timer);
  }, [title]);

  return (
    <section className="movie-box">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter movie title"
        id="title"
      />

      {isLoading && <p>Loading...</p>}
      {!isLoading && !data && <p></p>}
      
      {!isLoading && data && (
        <div>
          <h1>{data.Title}</h1>
          <p>{data.Plot}</p>
          {data.Poster && <img src={data.Poster} alt={data.Title} />}
        </div>
      )}
    </section>
  );
}
