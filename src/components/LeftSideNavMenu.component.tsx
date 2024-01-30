import logo from "../assets/logo.svg";
import listen from "../assets/listen.svg";
import browse from "../assets/browse.svg";
import radio from "../assets/radio.svg";
import recent from "../assets/recent.svg";
import artists from "../assets/artists.svg";
import albums from "../assets/albums.svg";
import songs from "../assets/songs.svg";
import madeforyou from "../assets/madeforyou.svg";
import allplaylists from "../assets/allplaylists.svg";
import favoritesongs from "../assets/favoritesongs.svg";
import search from "../assets/searchicon1.svg";
import { CiSearch } from "react-icons/ci";


function LeftSideNavMenu() {
  return (
    <nav className="relative overflow-auto space-y-1 bg-[#282828] h-dvh  text-white text-opacity-85 text-lg md:w-[260px] md:text-base">

      <div className="hidden md:flex flex-col items-center  p-2 md:items-start  md:p-7">
        <img src={logo} alt="logo" />
      </div>

      <div className="px-7 space-y-5 md:p-5">
        <div className="hidden  md:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="p-1   border-[1px] bg-[#1f1f1f] border-[#ffffff26] rounded-sm focus:outline outline-2 outline-brand px-7 md:max-w-[220px]"
            />
            <span className="absolute top-[0.5rem] left-1">
              <CiSearch className="h-5 w-5 text-white" />
            </span>
          </div>
        </div>
        <div>
          <ul className="md:space-y-2">
            <li className="flex items-center space-x-4 rounded-md p-1 cursor-pointer hover:bg-[#ebebf51a]">
              <span>
                <img
                  src={listen}
                  alt={"listen"}
                  className="h-8 w-8 md:h-6 md:w-6"
                />
              </span>
              <span>Listen Now</span>
            </li>
            <li className="flex items-center space-x-4 rounded-md p-1 cursor-pointer hover:bg-[#ebebf51a]">
              <span>
                <img
                  src={browse}
                  alt={"browse"}
                  className="h-8 w-8 md:h-6 md:w-6"
                />
              </span>
              <span>Browse</span>
            </li>
            <li className="flex items-center space-x-4 rounded-md p-1 cursor-pointer hover:bg-[#ebebf51a]">
              <span>
                <img
                  src={radio}
                  alt={"radio"}
                  className="h-8 w-8 md:h-6 md:w-6"
                />
              </span>
              <span>Radio</span>
            </li>
            <li className="flex items-center space-x-4 rounded-md p-1 cursor-pointer hover:bg-[#ebebf51a]">
              <span>
                <img
                  src={search}
                  alt={"search"}
                  className="h-8 w-8 md:h-6 md:w-6"
                />
              </span>
              <span>Search</span>
            </li>
          </ul>
        </div>

        <div className="space-y-1">
          <h3 className="text-sm text-[#98989d] p-2 font-bold -ml-3">
            Library
          </h3>
          <ul className="md:space-y-2">
            <li className="flex items-center space-x-4 rounded-md p-1 cursor-pointer hover:bg-[#ebebf51a]">
              <span>
                <img
                  src={recent}
                  alt={"recent"}
                  className="h-8 w-8 md:h-6 md:w-6"
                />
              </span>
              <span>Recently Added</span>
            </li>
            <li className="flex items-center space-x-4 rounded-md p-1 cursor-pointer hover:bg-[#ebebf51a]">
              <span>
                <img
                  src={artists}
                  alt={"artists"}
                  className="h-8 w-8 md:h-6 md:w-6"
                />
              </span>
              <span>Artists</span>
            </li>
            <li className="flex items-center space-x-4 rounded-md p-1 cursor-pointer hover:bg-[#ebebf51a]">
              <span>
                <img
                  src={albums}
                  alt={"albums"}
                  className="h-8 w-8 md:h-6 md:w-6"
                />
              </span>
              <span>Albums</span>
            </li>
            <li className="flex items-center space-x-4 rounded-md p-1 cursor-pointer hover:bg-[#ebebf51a]">
              <span>
                <img
                  src={songs}
                  alt={"songs"}
                  className="h-8 w-8 md:h-6 md:w-6"
                />
              </span>
              <span>Songs</span>
            </li>
            <li className="flex items-center space-x-4 rounded-md p-1 cursor-pointer hover:bg-[#ebebf51a]">
              <span>
                <img
                  src={madeforyou}
                  alt={"madeforyou"}
                  className="h-8 w-8 md:h-6 md:w-6"
                />
              </span>
              <span>Made for You</span>
            </li>
          </ul>
        </div>

        <div className="space-y-1">
          <h3 className="text-sm text-[#98989d] p-2 font-bold -ml-3">
            Playlists
          </h3>
          <ul className="md:space-y-2">
            <li className="flex items-center space-x-4 rounded-md p-1 cursor-pointer hover:bg-[#ebebf51a]">
              <span>
                <img
                  src={allplaylists}
                  alt={"allplaylists"}
                  className="h-8 w-8 md:h-6 md:w-6"
                />
              </span>
              <span>All Playlists</span>
            </li>
            <li className="flex items-center space-x-4 rounded-md p-1 cursor-pointer hover:bg-[#ebebf51a]">
              <span>
                <img
                  src={favoritesongs}
                  alt={"favoritesongs"}
                  className="h-8 w-8 md:h-6 md:w-6"
                />
              </span>
              <span>Favorite Songs</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default LeftSideNavMenu;
