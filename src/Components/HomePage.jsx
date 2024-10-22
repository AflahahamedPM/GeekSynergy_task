import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  console.log(movies);
  

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const response = await fetch("https://www.omdbapi.com/?s=kannada&apikey=31f202a0");
    const data = await response.json();
    
    if (data.Search) {
        const moviesWithVoting = data.Search.map((movie) => ({
          ...movie,
          voting: (Math.random() * 5).toFixed(0),
        }));
        
        const sortedMovies = moviesWithVoting.sort((a, b) => b.voting - a.voting);
        
        setMovies(sortedMovies);
      }
    };

  return (
    <>
    <div
      className="flex justify-between relative mb-16"
      onClick={isOpen ? () => handleClick() : undefined}
    >
        <header className="text-6xl font-semibold font-serif text-blue-950">
            GeekSynergy
        </header>
      <button
        onClick={() => handleClick()}
        className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-3 rounded-xl transition duration-150 ease-in-out"
      >
        Company info
      </button>
      {isOpen && (
        <div className="absolute top-12 right-1  px-5 py-6 border-[1px] border-gray-300 bg-white rounded-lg z-10 text-left">
          <p>
            <span className="font-bold">Company:</span> Geeksynergy Technologies
            Pvt Ltd
          </p>
          <p>
            <span className="font-bold">Address:</span> Sanjayanagar,
            Bengaluru-56
          </p>
          <p>
            <span className="font-bold">Phone:</span> XXXXXXXXX09
          </p>
          <p>
            <span className="font-bold">Email:</span> XXXXX@gmail.com
          </p>
        </div>
      )}
    </div>
    
    <div className="grid grid-cols-3 gap-4">
    {
        movies.length != 0 && (
            movies.filter((movie)=>movie.Type === "movie").map((movie)=>(
                <MovieCard key={movie.imdbID} Title={movie.Title} Year={movie.Year} Poster={movie.Poster} Voting={movie.voting}/>
            ))
        )
    }
    </div>
    </>
  );
};

export default HomePage;
