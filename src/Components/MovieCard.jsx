import React, { memo } from "react";

const MovieCard = memo(({Title, Year, Poster, Voting}) => {
    // const rating = (Math.random() * 5).toFixed(1);
  return (
    <div className="border-[1px] border-gray-200 rounded-xl mb-10 w-72 h-96 bg-blue-950 hover:bg-gray-500 hover:cursor-pointer text-left">
      <p className="font-bold text-lg font-mono mb-1 text-white mt-2 ml-4">{Title}</p>
      <p className="pb-2 text-sm text-white ml-4 mb-1"><span className=" font-light font-mono">Released Year:</span> <span className="font-bold">{Year}</span></p>
      <p className="pb-2 text-sm text-white ml-4 mb-1"><span className=" font-light font-mono">Voted by:</span> <span className="font-bold">{Voting} people</span></p>
      <img src={Poster} alt="" className="w-8/12 h-4/6 ml-12 rounded-xl"/>
    </div>
  );
});

export default MovieCard;
