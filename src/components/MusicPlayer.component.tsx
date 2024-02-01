import { useEffect, useRef, useState } from "react";
import song from "../assets/song.webp";
import sample from "../assets/sample.mp3";
import { FaPlay } from "react-icons/fa";
import { IoPlayForward } from "react-icons/io5";
import { IoPlayBack } from "react-icons/io5";
import { IoVolumeHigh } from "react-icons/io5";
import { IoVolumeMedium } from "react-icons/io5";
import { IoVolumeLow } from "react-icons/io5";
import { IoVolumeOff } from "react-icons/io5";
import { twMerge } from "tailwind-merge";
import { FaPause } from "react-icons/fa6";
import { FaVolumeMute } from "react-icons/fa";
import MusicPlayerWithLyrics from "./MusicPlayerWithLyrics.component";
function MusicPlayer() {
  const audioPlayerRef = useRef<any>(null);
  const [volume, SetVolume] = useState(0.2);
  const [isMute, setIsMute] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMusicPlayerWithLyrics, setShowMusicPlayerWithLyrics] =
    useState(false);
  const [seekBarPosition, setSeekBarPosition] = useState(0);
  const closeLyrics = () => {
    console.log("close clicked");
    setShowMusicPlayerWithLyrics(false);
  };

  const handleImageClick = () => {
    setShowMusicPlayerWithLyrics(true);
  };

  const playAudio = () => {
    if (isPlaying) {
      audioPlayerRef.current.play();
    } else {
      audioPlayerRef.current.pause();
    }
  };

  const muteAudio = () => {
    audioPlayerRef.current.muted = isMute;
  };

  const setVolume = () => {
    audioPlayerRef.current.volume = volume;
  };

  const setSeek = (seekBarPosition: number) => {
    const TIME = (seekBarPosition / 100) * audioPlayerRef.current.duration;
    if (isFinite(TIME) && TIME >= 0) {
      audioPlayerRef.current.currentTime =
        (seekBarPosition / 100) * audioPlayerRef.current.duration;

      setSeekBarPosition(seekBarPosition);
    }
  };
  const updateSeekBar = (customTime = NaN) => {
    if (!Number.isNaN(customTime)) {
      setSeek(customTime);
    }
    if (
      isFinite(audioPlayerRef.current.duration) &&
      audioPlayerRef.current.duration > 0
    ) {
      const newPosition =
        (audioPlayerRef.current.currentTime / audioPlayerRef.current.duration) *
        100;
      setSeekBarPosition(Math.ceil(newPosition));
    }
  };

  useEffect(() => {
    setVolume();
  }, [volume]);

  useEffect(() => {
    muteAudio();
  }, [isMute]);

  useEffect(() => {
    playAudio();
  }, [isPlaying]);

  useEffect(() => {
    if (audioPlayerRef && audioPlayerRef.current) {
      console.log("use effect 1 called");
      audioPlayerRef.current.addEventListener("timeupdate", updateSeekBar);
      audioPlayerRef.current.addEventListener("ended", () => {
        setIsPlaying(false);
        setSeekBarPosition(0);
      });
      return () => {
        audioPlayerRef.current.removeEventListener("timeupdate", updateSeekBar);
      };
    }
  }, [audioPlayerRef]);

  return (
    <>
      {
        <div
          className={twMerge(
            "bg-[#2c2b2b]  p-2 flex justify-between items-center  text-white w-full rounded-lg md:rounded-none md:px-52",
            showMusicPlayerWithLyrics ? "hidden" : ""
          )}
        >
          <div className="flex items-center space-x-2 md:order-2 md:p-1 md:bg-black rounded-lg">
            <div>
              <img
                src={song}
                alt={song}
                className="aspect-square rounded-lg w-12"
                onClick={() => handleImageClick()}
              />
            </div>
            <div>
              <div className="text-white text-center">One Love - Single</div>
              <div className="hidden md:block">
                <audio ref={audioPlayerRef}>
                  <source src={sample} type="audio/mpeg" />
                </audio>
                <input
                  type="range"
                  value={seekBarPosition}
                  min={0}
                  max={100}
                  onChange={(e) => updateSeekBar(parseInt(e.target.value))}
                  className="h-[4px] bg-white w-[24rem]"
                />
              </div>
            </div>
          </div>
          <div className="md:order-1">
            <div className="flex space-x-5 text-white text-opacity-85">
              <IoPlayBack className="h-5 w-5 opacity-75 hover:opacity-95" />
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
              <IoPlayForward className="h-5 w-5 opacity-75 hover:opacity-95" />
            </div>
          </div>
          <div className="md:order-3 hidden md:flex items-center space-x-1">
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
                className="h-5 w-5"
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
                SetVolume(parseFloat(e.target.value)), setVolume();
              }}
              className="h-[4px] bg-white"
            />
          </div>
        </div>
      }
      {
        <div
          className={twMerge(
            "fixed top-0 left-0",
            showMusicPlayerWithLyrics ? "block" : "hidden"
          )}
        >
          <MusicPlayerWithLyrics closeLyrics={closeLyrics} />
        </div>
      }
    </>
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
