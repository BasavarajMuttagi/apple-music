import {
  IoPlayBack,
  IoPlayForward,
  IoVolumeHigh,
  IoVolumeLow,
  IoVolumeMedium,
  IoVolumeOff,
} from "react-icons/io5";
import song from "../assets/song.webp";
import lyrics from "../assets/lyrics.svg";
import lyricsafter from "../assets/lyricsafter.svg";
import { FaPlay } from "react-icons/fa";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { FaChevronDown } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { FaVolumeMute } from "react-icons/fa";
function MusicPlayerWithLyrics({
  closeLyrics,
  controls: { SetVolume, updateVolume, updateSeekBar, setIsMute, setIsPlaying },
  data: { seekBarPosition, volume, isPlaying, isMute },
}: any) {
  const [showLyrics, SetShowLyrics] = useState(false);

  return (
    <div className="backdrop-blur-sm bg-black/60 h-dvh w-dvw">
      <div>
        <FaChevronDown
          className="absolute h-7 w-7 text-white text-opacity-80 top-2  left-40 z-50"
          type="button"
          onClick={() => closeLyrics()}
        />
      </div>

      <div className="flex flex-col justify-around items-center h-full p-5">
        <div
          className={twMerge(
            "space-y-2",
            showLyrics
              ? "flex flex-row  items-center justify-evenly  w-full rounded-lg p-2"
              : ""
          )}
        >
          <div className={twMerge("flex", showLyrics ? "flex-none h-12" : "")}>
            <img
              src={song}
              alt={song}
              className={twMerge("aspect-square rounded-lg")}
              onClick={() => SetShowLyrics(false)}
            />
          </div>
          <div
            className={twMerge(
              "text-white text-center text-lg font-nunito font-semibold",
              showLyrics
                ? "text-white text-center text-lg font-nunito font-semibold"
                : ""
            )}
          >
            One Love - Single
          </div>
        </div>
        <div
          className={twMerge(
            "text-white text-wrap  text-center font-bold font-nunito overflow-y-auto no-scrollbar  text-xl w-screen h-[40%]",
            showLyrics ? "block masked-overflow" : "hidden"
          )}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ducimus
          voluptas pariatur esse deleniti, quia cum ex alias rem et quidem
          perferendis blanditiis qui beatae suscipit quod. Dignissimos eveniet
          neque illum dolore asperiores totam ad earum, quibusdam esse ratione,
          non id. Debitis illo iure modi ipsam, soluta incidunt sapiente,
          obcaecati asperiores at quod porro quibusdam cumque aut ullam commodi
          dolorum enim recusandae sunt, sint magni? Ipsam culpa nobis harum?
          Pariatur, ipsam ex iusto dignissimos sit amet dicta nisi saepe? Ad
          voluptatem distinctio porro dignissimos itaque maiores qui
          repudiandae, atque corrupti veritatis totam fugiat cum sit omnis
          assumenda aut architecto tenetur, consequuntur et ut? Expedita,
          officia! Corrupti vero a, accusamus aspernatur eos fugit vitae sit
          exercitationem, placeat officia voluptatum aliquid ullam sint,
          quibusdam consectetur? Obcaecati nam saepe laboriosam maiores neque
          amet, nostrum nemo laudantium itaque nisi, laborum voluptas blanditiis
          earum tempore fugit dolore quo iure, voluptatem quaerat! Maiores fuga
          asperiores modi omnis, facere qui aperiam! Ipsum, quo voluptatum saepe
          at, maxime libero non placeat voluptatem ducimus, cum rerum fuga
          quibusdam cupiditate! Reprehenderit laboriosam quis consequuntur
          officiis veniam, autem nobis iusto dicta! Esse laudantium tempora,
          asperiores non maxime eum est distinctio alias dignissimos doloribus
          odio magni quaerat id blanditiis tempore, nobis corporis.
        </div>
        <div className="space-y-6 w-full">
          <div className="flex items-center">
            {/* <GetVolumeIndicator volume={volume} /> */}
            <input
              type="range"
              value={seekBarPosition}
              min={0}
              max={100}
              onChange={(e) => updateSeekBar(parseInt(e.target.value))}
              className="h-[4px] bg-white w-full"
            />
          </div>
          <div className=" text-white text-opacity-85 flex justify-between">
            <IoPlayBack className="h-8 w-8 opacity-75 hover:opacity-95" />
            {!isPlaying ? (
              <FaPlay
                className="h-5 w-5 opacity-75 hover:opacity-95"
                onClick={() => setIsPlaying(true)}
              />
            ) : (
              <FaPause
                className="h-5 w-5 opacity-75 hover:opacity-95"
                onClick={() => setIsPlaying(false)}
              />
            )}
            <IoPlayForward className="h-8 w-8 opacity-75 hover:opacity-95" />
          </div>
          <div className="flex items-center">
            {!isMute && (
              <span
                onClick={() => {
                  setIsMute(true);
                }}
              >
                <GetVolumeIndicator volume={volume} />
              </span>
            )}
            {isMute && (
              <FaVolumeMute
                className="h-5 w-5 text-white text-opacity-85"
                onClick={() => {
                  setIsMute(false);
                }}
              />
            )}
            <input
              type="range"
              value={volume}
              min={0}
              max={1}
              step={0.1}
              onChange={(e) => {
                SetVolume(parseFloat(e.target.value)), updateVolume();
              }}
              className="h-[4px] bg-white w-full"
            />
          </div>
          <div>
            <img
              src={lyrics}
              alt={lyrics}
              className={twMerge("h-10 w-10", showLyrics ? "hidden" : "block")}
              onClick={() => SetShowLyrics(!showLyrics)}
            />
            <img
              src={lyricsafter}
              alt={lyricsafter}
              className={twMerge("h-10 w-10", showLyrics ? "block" : "hidden")}
              onClick={() => SetShowLyrics(!showLyrics)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayerWithLyrics;

const GetVolumeIndicator = ({ volume }: { volume: number }) => {
  if (volume == 0) {
    return <IoVolumeOff className="h-5 w-5 text-white text-opacity-85" />;
  }
  if (volume > 0 && volume <= 33 / 100) {
    return <IoVolumeLow className="h-5 w-5 text-white text-opacity-85" />;
  }
  if (volume > 33 / 100 && volume <= 66 / 100) {
    return <IoVolumeMedium className="h-5 w-5 text-white text-opacity-85" />;
  }
  if (volume > 66 / 100) {
    return <IoVolumeHigh className="h-5 w-5 text-white text-opacity-85" />;
  }

  return <IoVolumeOff className="h-5 w-5 text-white text-opacity-85" />;
};
