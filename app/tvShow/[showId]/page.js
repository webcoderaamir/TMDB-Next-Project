"use client"
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetTvShowsDetails, asyncSimilarSeries } from "@/store/Actions/tvShowsAction";
import { BiListUl } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import TvShowCard from "@/components/TvShowCard";
const Page = (props) => {
  const [cast, setcast] = useState([]);
  const video = useRef(null);
  const iframeVideo = useRef(null);
  const { showId } = props.params;
  const { TvShowsDetails ,similar} = useSelector((state) => state.tvShowReducer);
  const trailer = TvShowsDetails.videos?.results.find(
    (video) => video.type === "Trailer"
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetTvShowsDetails(showId));
    dispatch(asyncSimilarSeries(showId));
    showcast();
  }, []);

  const trailerOpenHandler = () => {
    video.current.style.display = "flex";
    iframeVideo.current.src = `https://www.youtube.com/embed/${trailer?.key}`;
  };

  const trailerCloseHandler = () => {
    video.current.style.display = "none";
    iframeVideo.current.src = " ";
  };

  const errorHandler = () => {
    iframeVideo.current.style.display = "none";
  };

  const showcast = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/${showId}/credits?api_key=11eafabab15fc91d50417227c788a542`
    );
    setcast(data.cast);
  };
  return (
    <>
      <div
        className="relative bg-cover bg-center h-1/2 md:h-screen"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${TvShowsDetails.backdrop_path}?api_key=11eafabab15fc91d50417227c788a542')`,
        }}
      >
        <div className="bg-black bg-opacity-70 text-white flex items-center justify-center px-5 md:px-10 h-1/2 md:h-screen">
          <div className="container mx-auto flex flex-col md:flex-row gap-4">
            <div className="pt-2 w-2/4 md:w-1/2 lg:w-1/4">
              <img
                src={`https://image.tmdb.org/t/p/w500//${TvShowsDetails.poster_path}?api_key=11eafabab15fc91d50417227c788a542`}
                alt=""
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="md:w-1/2 lg:w-3/4 md:pl-10 p-5">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                {TvShowsDetails.name}
              </h1>
              <div className="text-white text-sm mb-4">
                {TvShowsDetails.type} <span className="mx-2">•</span>{" "}
                {TvShowsDetails.genres?.map((elem) => elem.name).join(", ")}{" "}
                <span className="mx-2">•</span>{" "}
                {TvShowsDetails.status}


              </div>
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 text-white py-2 px-4 rounded-full h-12 w-12  flex items-center font-semibold mr-4">
                  <p className="font-bold"> {Math.floor(TvShowsDetails.vote_average * 10)}</p>  <em className=' text-[0.7vw] top-4   right-1'>%</em>
                </div>

                <div className="hidden md:flex lg:flex  items-center gap-4 ">
                  <div className="p-4 h-12 w-12 flex items-center justify-center bg-[#032541] rounded-full ">
                    <BiListUl style={{ color: 'white', fontSize: '20px' }} />
                  </div>
                  <div className="p-4 h-12 w-12 flex items-center justify-center bg-[#032541] rounded-full ">
                    <AiOutlineHeart style={{ color: 'white', fontSize: '20px' }} />
                  </div>
                  <div className="p-4 h-12 w-12 flex items-center justify-center bg-[#032541] rounded-full ">
                    <BsBookmark style={{ color: 'white', fontSize: '20px' }} />
                  </div>
                  <div className="p-4 h-12 w-12 flex items-center justify-center bg-[#032541] rounded-full ">
                    <AiOutlineStar style={{ color: 'white', fontSize: '20px' }} />
                  </div>
                </div>

                <div onClick={trailerOpenHandler} className="flex pl-4 items-center hover:font-normal font-semibold cursor-pointer ">
                  <img src="../play-button.svg" className="h-8 w-8 " alt="" /> <p className="pl-2">Play Trailer</p>
                </div>
              </div>
              <div className="mb-4 font-sans italic ">{TvShowsDetails.tagline}</div>
              <div className="mb-4">
                <h3 className="text-xl font-bold">Overview</h3>
                <p>{TvShowsDetails.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={video} className="hidden bg-opacity-100 absolute top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%] transform-[-50%]  p-10 h-[40vw] w-[90vw] items-center justify-center bg-black z-50 ">
        <div className="flex flex-row-reverse h-[35vw] w-[85vw]  items-center justify-center ">
          <RxCross2 className=" absolute top-0 right-0 m-2" style={{ color: 'white', fontSize: '20px' }} onClick={trailerCloseHandler} />
          <div className="h-full w-full">
            <iframe className="h-full w-full" onError={errorHandler} ref={iframeVideo} src={`https://www.youtube.com/embed/${trailer?.key}`} title="youtube video" allowFullScreen ></iframe>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row items-start md:items-center lg:items-center flex-wrap px-8 py-6">
        <div className=" w-full md:w-3/4 ">
          <h2 className="text-2xl font-bold ">Top Billed Cast</h2>
          <div className="relative w-full">
            <div className="flex overflow-x-auto">
              {cast.map((casts, i) => (
                <div key={i} className=" p-2 pb-6 flex items-center ">
                  <div className="w-40 h-64 rounded-lg overflow-hidden shadow-lg  ">


                    {casts.profile_path ? (
                      <div
                        className="w-full h-44 bg-cover bg-no-repeat bg-top"
                        style={{
                          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${casts.profile_path}?api_key=11eafabab15fc91d50417227c788a542)`
                        }}
                      ></div>
                    ) : (
                      <div className="w-full h-44 flex items-center justify-center bg-gray-200">
                        <img src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png" alt="" />
                      </div>
                    )}

                    <div className="p-4">
                      <h4 className="text-lg font-semibold truncate">{casts.name}</h4>
                      <h5 className="text-gray-400 whitespace-nowrap overflow-hidden truncate">
                        {casts.character}
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-r from-transparent to-white pointer-events-none"></div>
          </div>
        </div>
        <div className="p-5 w-full md:w-[20vw]">
          <div className="mb-5">
            <h4 className="font-semibold">Status</h4>
            <p>{TvShowsDetails.status}</p>
          </div>
          <div className="mb-5">
            <h4 className="font-semibold">Original Title</h4>
            <p>{TvShowsDetails.original_name}</p>
          </div>
          <div className="mb-5">
            <h4 className="font-semibold">Total seasons</h4>
            <p>{TvShowsDetails.number_of_seasons}</p>
          </div>
          <div className="mb-5">
            <h4 className="font-semibold">Last Air Date</h4>
            <p>{TvShowsDetails.last_air_date}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4 md:p-10">
  <div className="flex flex-col md:flex-row justify-between items-center">
    <h2 className="text-xl md:text-2xl font-semibold">Similar Series</h2>
  </div>

  <div className="mt-4 overflow-x-auto flex flex-col md:flex-row">
    {similar.length > 0 ? (
      similar.map((tvshow, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-full md:w-[18vw] ml-0 md:ml-5 mb-5 md:mb-0"
        >
          <TvShowCard tvshow={tvshow} />
        </div>
      ))
    ) : (
      <p className="mt-2 text-center md:text-left">
        No similar series found. Similar series will be updated soon.
      </p>
    )}
  </div>
</div>


    </>
  );
};

export default Page;
