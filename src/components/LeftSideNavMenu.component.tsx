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
import { CiSearch } from "react-icons/ci";
function LeftSideNavMenu() {
  return (
    <div className="flex flex-col justify-start items-center h-full w-full md:items-start">
      <nav className="font-lato font-semibold text-white text-opacity-85 mx-auto  p-4 space-y-8 w-[330px]  md:w-[300px]">
        <div className="w-full">
          <img src={logo} alt="logo" />
        </div>
        {/* main section */}
        <div className="space-y-6 w-full">
          <div className="relative ">
            <input
              type="text"
              placeholder="Search"
              className="w-full text-xs p-2 bg-[#1f1f1f] border-[1px] border-[#ffffff26] rounded-[0.280rem] px-7 focus:outline outline-2 outline-brand focus:placeholder:hidden"
            />
            <span className="absolute top-[0.5rem] left-[0.5rem]">
              <CiSearch className="h-4 w-4" />
            </span>
          </div>
          <div>
            <ul className="space-y-2">
              <li className="flex items-center space-x-4">
                <span>
                  <img src={listen} alt={"listen"} className="stroke-brand" />
                </span>
                <span>Listen Now</span>
              </li>
              <li className="flex items-center space-x-4">
                <span>
                  <img src={browse} alt={"browse"} />
                </span>
                <span>Browse</span>
              </li>
              <li className="flex items-center space-x-4">
                <span>
                  <img src={radio} alt={"radio"} />
                </span>
                <span>Radio</span>
              </li>
            </ul>
          </div>
        </div>
        {/* library section */}
        <div className="w-full">
          <ul className="space-y-2">
            <li className="flex items-center space-x-4">
              <span>
                <img src={recent} alt={"recent"} />
              </span>
              <span>Recently Added</span>
            </li>
            <li className="flex items-center space-x-4">
              <span>
                <img src={artists} alt={"artists"} />
              </span>
              <span>Artists</span>
            </li>
            <li className="flex items-center space-x-4">
              <span>
                <img src={albums} alt={"albums"} />
              </span>
              <span>Albums</span>
            </li>
            <li className="flex items-center space-x-4">
              <span>
                <img src={songs} alt={"songs"} />
              </span>
              <span>Songs</span>
            </li>
            <li className="flex items-center space-x-4">
              <span>
                <img src={madeforyou} alt={"madeforyou"} />
              </span>
              <span>Made for You</span>
            </li>
          </ul>
        </div>
        {/* playlist section */}
        <div className="w-full">
          <ul className="space-y-2">
            <li className="flex items-center space-x-4">
              <span>
                <img src={allplaylists} alt={"allplaylists"} />
              </span>
              <span>All Playlists</span>
            </li>
            <li className="flex items-center space-x-4">
              <span>
                <img src={favoritesongs} alt={"favoritesongs"} />
              </span>
              <span>Favorite Songs</span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default LeftSideNavMenu;
