import Link from 'next/link'
import React from 'react'
import Progress from './Progress';
const MovieCard = ({ movie }) => {

    
    function convertNumericToDate(numericDate) {
        // Parse the numeric date into a Date object
        const dateObj = new Date(numericDate);

        // Define arrays for month names and suffixes
        const monthNames = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        const suffixes = ["st", "nd", "rd", "th"];

        // Get the day, month, and year components
        const day = dateObj.getDate();
        const month = monthNames[dateObj.getMonth()];
        const year = dateObj.getFullYear();

        // Determine the day suffix (st, nd, rd, th)
        let suffix;
        if (day >= 11 && day <= 13) {
            suffix = "th";
        } else {
            const index = Math.min(day % 10, 3);
            suffix = suffixes[index];
        }

        // Construct the alphanumeric date string
        const alphanumericDate = `${month} ${day}${suffix}, ${year}`;
        return alphanumericDate;
    }

    return (
        <>
        {movie.poster_path ? (
            <div key={movie.id} className="relative bg-gray-100 rounded-lg shadow-md">
                <div className='relative'>
                    <Link href={`/movie/${movie.id}`}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}?api_key=11eafabab15fc91d50417227c788a542`}
                            alt=""
                            className="w-full h-auto rounded-t-lg"
                        />
                    </Link>

                    <div className='bg-black absolute -bottom-6 left-4 rounded-full  h-10 w-10 flex items-center justify-center text-white p-3 '>
                        <Progress progress={Math.floor(movie.vote_average * 10)} />
                        <p className='font-bold'>{Math.floor(movie.vote_average * 10)}</p> <em className='absolute text-[0.7vw] top-4   right-1'>%</em>
                    </div>
                </div>
                <div className="p-4 mt-4">
                    <Link href={`/movie/${movie.id}`}>
                        <div className="text-lg font-semibold text-black hover:text-blue-400 overflow-hidden" style={{ maxWidth: '250px', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                            {movie.title}
                        </div>
                    </Link>
                    <p className="text-gray-600">
                        {convertNumericToDate(movie.release_date)}
                    </p>
                </div>
            </div>
        ) : (
            <div className="animate-pulse space-y-2 h-64">
                <div className="bg-gray-200 h-72"></div>
            </div>
        )}
    </>


    )
}



export default MovieCard