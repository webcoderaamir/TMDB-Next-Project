"use client";
import MovieCard from "@/components/MovieCard";
import Pagination from "@/components/Pagination";
import { asyncGetMovies } from "@/store/Actions/moviesAction";
import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Page = ({ params }) => {
  const { Movies, page } = useSelector((state) => state.movieReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetMovies(params.popular));
  }, [page, Movies]);

  return (
    <>
      <div className="container mx-auto mt-12 px-10 mb-10 ">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold"> Movies</h2>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {Movies.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </div>
        <Pagination />
      </div>
    </>
  );
};

export default Page;
