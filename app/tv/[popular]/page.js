"use client"

import { changePage } from "@/store/Reducers/movieReducer";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncTvShows } from "@/store/Actions/tvShowsAction";
import TvShowCard from "@/components/TvShowCard";
import Pagination from "@/components/Pagination";

const Page = ({ params }) => {
  const { TvShows } = useSelector((state) => state.tvShowReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAsyncTvShows(params.popular));
  }, [TvShows]);


  return (
    <>
          <div className="container mx-auto mt-12 px-10 mb-10 ">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold"> TV Show</h2>
        </div>


        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {TvShows.map((tvShow, index) => (
              <TvShowCard tvshow={tvShow} key={index} />
            ))}
          </div>
          <Pagination/>
        </div>
    </>
  );
};

export default Page;
