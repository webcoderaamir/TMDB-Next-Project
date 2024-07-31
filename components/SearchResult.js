import Link from 'next/link';
import React from 'react'

const SearchResult = ({movie}) => {

    function convertNumericToDate(numericDate) {
        const dateObj = new Date(numericDate);
    
        const monthNames = [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];
    
        const suffixes = ["st", "nd", "rd", "th"];
    
        // Get the day, month, and year components
        const day = dateObj.getDate();
        const month = monthNames[dateObj.getMonth()];
        const year = dateObj.getFullYear();
    
        let suffix;
        if (day >= 11 && day <= 13) {
          suffix = "th";
        } else {
          const index = Math.min(day % 10, 3);
          suffix = suffixes[index];
        }
    
        const alphanumericDate = `${month} ${day}${suffix}, ${year}`;
        return alphanumericDate;
      }
  return (
    <div key={movie.id} className="flex bg-white shadow-lg rounded-lg p-4 mb-4">
    <div >
      <Link
        href={
          movie.media_type === "movie"
            ? `/movie/${movie.id}`
            : `/tvshow/${movie.id}`
        }
      >
        <div  className="w-32 h-48 rounded-md bg-no-repeat bg-top bg-cover " style={{backgroundImage:`url('https://image.tmdb.org/t/p/w500/${movie.poster_path}?api_key=11eafabab15fc91d50417227c788a542')`}}>

        </div>

      </Link>
    </div>
    <div className="flex gap-4 flex-col p-4 overflow-hidden truncate">
      <h2 className="text-xl font-semibold">
        {movie.title || movie.name}
      </h2>
      <p className="text-gray-400">
        {convertNumericToDate(
          movie.release_date || movie.first_air_date 
        )}
      </p>
      <p className="text-black whitespace-nowrap truncate">{movie.overview}</p>
    </div>
  </div>
  )
}

export default SearchResult