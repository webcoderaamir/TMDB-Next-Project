"use client"
import SearchResult from "@/components/SearchResult";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { ImSearch } from "react-icons/im";

const SearchMovie = ({ params }) => {
  const router = useRouter();
  const [search, setSearch] = useState(params.searchMovie);
  const [searchData, setSearchData] = useState([]);

  const searchMovieData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/multi?query=${search}&api_key=11eafabab15fc91d50417227c788a542`
      );
      setSearchData(data.results);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    searchMovieData();
  }, [search]);

  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };

  return (
    <>
      <div className="text-white">
        <form onSubmit={submitHandler} className="flex items-center px-4 py-2">
          <ImSearch
            className="absolute left-6"
            style={{ color: "#01B4E4", fontSize: "20px" }}
          />

          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search.replace(/%20/g, " ")}
            type="text"
            placeholder="Search for a movie, tv show, person..."
            className="w-full px-10 py-2 rounded-lg focus:outline-none border text-black"
          />
        </form>

        <div className="container mx-auto py-8 px-4 text-black">
          {searchData.length === 0 ? (
            <p>No content found.</p>
          ) : (
            searchData.map((movie, index) => <SearchResult movie={movie} />)
          )}
        </div>
      </div>
    </>
  );
};

export default SearchMovie;
