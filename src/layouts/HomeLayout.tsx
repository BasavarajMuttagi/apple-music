import { useRef, useState } from "react";
import LeftSideNavMenu from "../components/LeftSideNavMenu.component";
import { Outlet } from "react-router-dom";
import { IoCloseOutline, IoReorderTwoOutline } from "react-icons/io5";
import logo from "../assets/logo.svg";
import profile from "../assets/profile.svg";
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
    <div>
      <div className="fixed top-0 left-0 w-full ">
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
          className="-z-10 absolute w-full  -translate-y-full duration-300 focus:translate-y-0 focus:duration-300 md:translate-y-0 md:block"
        >
          <LeftSideNavMenu />
        </div>
      </div>

      <div className="absolute bg-[#1f1f1f] -z-20">
        <Outlet />
      </div>
    </div>
  );
}

export default HomeLayout;
