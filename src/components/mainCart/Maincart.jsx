import React, { useRef } from "react";
import "../mainCart/mainCart.css";

import { useGetMovieQuery } from "../../redux/api/movie-api";
import { IoStar } from "react-icons/io5";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Maincart = () => {
  const { data } = useGetMovieQuery();
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 250; 
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 400; 
    }
  };

  if (!data?.results) {
    return <p>Loading</p>;
  }

  return (
    <>
      <div className="container xl my-20">
        <div className="flex w-full items-center justify-between mt-10 max-[450px]:justify-center">
          <p className="text-mutedColor font-semibold max-[450px]:hidden">На неделе</p>
          <button className="relative group cursor-pointer text-sky-50  overflow-hidden h-16 w-[200px] rounded-md bg-transparent p-2 flex justify-center items-center font-extrabold">
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-red-700"></div>
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-red-600"></div>
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-red-500"></div>
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-red-400"></div>
            <p className="z-10">Показать все</p>
          </button>
        </div>

        <div className="flex items-center gap-5">
          <button
            className="text-2xl font-semibold p-3 rounded-full border border-mutedColor text-mainColor transform duration-300 hover:transform hover:scale-100 hover:bg-mutedColor hover:border-mainColor max-[700px]:text-xl max-[400px]:text-[16px]"
            onClick={scrollLeft}
          >
            <AiOutlineArrowLeft />
          </button>
          <div
            className="w-full flex overflow-x-auto gap-7 mt-5 snap-x scrollUchun"
            ref={scrollContainerRef}
          >
            {data?.results?.map((cartMovie) => (
              <div
                key={cartMovie.id}
                className="w-72 flex-shrink-0 flex flex-col "
              >
                <img
                  onClick={() => navigate(`/movie/${cartMovie.id}`)}
                  src={`https://image.tmdb.org/t/p/original/${cartMovie.poster_path}`}
                  alt={cartMovie.title}
                  className="rounded-xl h-62"
                />
                <p className="text-2xl text-mutedColor">{cartMovie.title}</p>
                <p className="flex items-center text-xl text-mutedColor font-semibold">
                  movie rating system {cartMovie.vote_average} <IoStar />{" "}
                </p>
              </div>
            ))}
          </div>
          <button
            className="text-2xl font-semibold p-3 rounded-full border border-mutedColor text-mainColor  hover:bg-mutedColor hover:border-mainColor max-[700px]:text-xl max-[400px]:text-[16px]"
            onClick={scrollRight}
          >
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Maincart;
3