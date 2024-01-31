import {  useState } from "react";
import song from "../assets/song.webp";
import { FaPlay } from "react-icons/fa";
import { IoPlayForward } from "react-icons/io5";
import { IoPlayBack } from "react-icons/io5";
import { IoVolumeHigh } from "react-icons/io5";
import { IoVolumeMedium } from "react-icons/io5";
import { IoVolumeLow } from "react-icons/io5";
import { IoVolumeOff } from "react-icons/io5";
function MusicPlayer() {
  const [volume, SetVolume] = useState(0);

  return (
    <div className="bg-[#2c2b2b]  p-2 flex justify-between items-center  text-white w-full rounded-lg md:rounded-none md:px-52">
      <div className="flex items-center space-x-2 md:order-2">
        <div>
          <img
            src={song}
            alt={song}
            className="aspect-square rounded-lg w-12"
          />
        </div>
        <div>
          <span className="text-white">One Love - Single</span>
        </div>
      </div>
      <div className="md:order-1">
        <div className="flex space-x-5 text-white text-opacity-85">
          <IoPlayBack className="h-5 w-5 opacity-75 hover:opacity-95" />
          <FaPlay className="h-5 w-5 opacity-75 hover:opacity-95" />
          <IoPlayForward className="h-5 w-5 opacity-75 hover:opacity-95" />
        </div>
      </div>
      <div className="md:order-3 hidden md:flex items-center space-x-1">
        <GetVolumeIndicator volume={volume} />
        <input
          type="range"
          value={volume}
          min={0}
          max={100}
          onChange={(e) => SetVolume(parseInt(e.target.value))}
          className="h-[4px] bg-white"
        />
      </div>
    </div>
  );
}

export default MusicPlayer;

const GetVolumeIndicator = ({ volume }: { volume: number }) => {
  if (volume == 0) {
    return <IoVolumeOff className="h-5 w-5" />;
  }
  if (volume > 0 && volume <= 33) {
    return <IoVolumeLow className="h-5 w-5" />;
  }
  if (volume > 33 && volume <= 66) {
    return <IoVolumeMedium className="h-5 w-5" />;
  }
  if (volume > 66) {
    return <IoVolumeHigh className="h-5 w-5" />;
  }

  return <IoVolumeOff className="h-5 w-5" />;
};
