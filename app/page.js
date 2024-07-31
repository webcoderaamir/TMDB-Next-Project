"use client";
import { asyncGetTrendingMovies } from "@/store/Actions/moviesAction";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import MovieCard from "@/components/MovieCard";

const Page = () => {
  const [search, setsearch] = useState("");
  const { TrendingMovies, errors } = useSelector((state) => state.movieReducer);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(asyncGetTrendingMovies()).then(() => {});
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };

  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat h-96 relative"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/hoVj2lYW3i7oMd1o7bPQRZd1lk1.jpg")`,
        }}
      >
        <div className="bg-black bg-opacity-50 h-full overflow-hidden flex flex-col justify-center items-center">
          <div className="container px-10 mx-auto text-start py-8 flex flex-col gap-6">
            <div>
              <h1 className="text-6xl font-bold text-white">Welcome To Movies Hub.</h1>
              <h4 className="text-2xl text-white">
                Millions of movies, TV shows, and people to discover. Explore
                now.
              </h4>
            </div>
            <div className="mt-4">
              <form onSubmit={submitHandler} className="flex">
                <input
                  onChange={(e) => setsearch(e.target.value)}
                  value={search}
                  type="text"
                  placeholder="Search for a movie, TV show, person....."
                  className="w-full md:w-[90vw] px-4 py-2 rounded-full focus:outline-none text-black"
                />
                <button className="right-5 md:right-16 absolute bg-[#19CFB4] hover:bg-[#19CFB4] hover:text-black font-semibold text-white px-4 py-2 rounded-full">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12 p-10 mb-10">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Trending Movies</h2>
        </div>

        <div
          className="mt-4 overflow-x-auto flex flex-col md:flex-row sm:bg-none"
          style={{
            backgroundImage: `url("https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            padding: "10px",
          }}
        >
          {TrendingMovies.map((movie, index) => (
            <div
              key={index}
              className="flex-shrink-0 md:max-w-[17vw] md:mr-10 mb-10 md:mb-0"
            >
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
