import { useRef, useState } from "react";
import LeftSideNavMenu from "../components/LeftSideNavMenu.component";
import { Outlet } from "react-router-dom";
import { IoCloseOutline, IoReorderTwoOutline } from "react-icons/io5";
import logo from "../assets/logo.svg";
import profile from "../assets/profile.svg";
import MusicPlayer from "../components/MusicPlayer.component";
function HomeLayout() {
  const [isChecked, setIsChecked] = useState(false);
  const navRef = useRef<any>(null);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      navRef.current?.focus();
    } else {
      navRef.current?.blur();
    }
  };

  return (
    <div className="md:flex md:h-screen">
      <div className="fixed top-0 left-0 w-full md:static md:w-fit ">
        <div className="p-2 flex justify-between items-center bg-[#282828]  md:hidden">
          <div>
            <input
              type="checkbox"
              className="hidden"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label>
              <IoReorderTwoOutline
                className={`text-brand h-8 w-8 ${
                  isChecked ? "hidden" : "block "
                }`}
                onClick={handleCheckboxChange}
              />
              <IoCloseOutline
                className={`text-brand h-8 w-8 ${
                  isChecked ? "block" : "hidden"
                }`}
                onClick={handleCheckboxChange}
              />
            </label>
          </div>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div>
            <img src={profile} alt="profile" className="h-8 w-8" />
          </div>
        </div>
        <div
          ref={navRef}
          tabIndex={-1}
          className="-z-10 absolute w-full  -translate-y-full duration-300 focus:translate-y-0 focus:duration-300 md:translate-y-0 md:duration-0 md:relative md:w-fit md:z-0"
        >
          <LeftSideNavMenu />
        </div>
      </div>

      <div className="max-w-full">
        <div className="fixed w-full p-2  bottom-0 md:static md:p-0 md:rounded-none">
          <MusicPlayer />
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default HomeLayout;
