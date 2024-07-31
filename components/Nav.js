import Link from "next/link";
import { BiPlusMedical } from "react-icons/bi";
import { TbMessageLanguage } from "react-icons/tb";
import { ImSearch } from "react-icons/im";

const Nav = () => {
  return (
    <div className="bg-[#032541] py-4 px-6 relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-6 mb-4 md:mb-0">
          <Link href="/">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt=""
              className="h-10 w-36 cursor-pointer"
            />
          </Link>
          <div className="relative group">
            <p className="cursor-pointer hover:text-white text-white font-semibold">
              Movies
            </p>
            <div className="z-10 absolute rounded-sm w-max top-10 left-0 bg-white text-black py-2 px-4 space-y-2 opacity-0 group-hover:opacity-100">
              <Link href="/popular" className="block hover:text-blue-500">
                Popular
              </Link>
              <Link href="/now_playing" className="block hover:text-blue-500">
                Now Playing
              </Link>
              <Link href="/upcoming" className="block hover:text-blue-500">
                Upcoming
              </Link>
              <Link href="/top_rated" className="block hover:text-blue-500">
                Top Rated
              </Link>
            </div>
          </div>
          <div className="z-10 relative group">
            <p className="cursor-pointer hover:text-white text-white font-semibold">
              TV Shows
            </p>
            <div className="z-10 absolute top-10 left-0 bg-white text-black w-max rounded-sm py-2 px-4 space-y-2 opacity-0 group-hover:opacity-100">
              <Link href="/tv/popular" className="block hover:text-blue-500">
                Popular
              </Link>
              <Link
                href="/tv/airing_today"
                className="block hover:text-blue-500"
              >
                Arriving Today
              </Link>
              <Link href="/tv/on_the_air" className="block hover:text-blue-500">
                On TV
              </Link>
              <Link href="/tv/top_rated" className="block hover:text-blue-500">
                Top Rated
              </Link>
            </div>
          </div>
          <p className="cursor-pointer hidden md:flex lg:flex hover:text-white text-white font-semibold">
            People
          </p>
          <p className="cursor-pointer hidden md:flex lg:flex hover:text-white text-white font-semibold">
            More
          </p>
        </div>
        <div className=" hidden  items-center gap-6 text-white font-semibold md:flex lg:flex">
          <p>
            <BiPlusMedical
              className="font-bold"
              style={{ color: "white", fontSize: "20px" }}
            />
          </p>
          <p>
            <TbMessageLanguage
              className="font-bold"
              style={{ color: "white", fontSize: "25px" }}
            />
          </p>
          <p>Login</p>
          <p>Join TMDB</p>
          <Link href={"/"}>
            <ImSearch
              className="font-bold"
              style={{ color: "#01B4E4", fontSize: "20px" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
