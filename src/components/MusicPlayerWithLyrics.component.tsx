import {
  IoCloseOutline,
  IoPlayBack,
  IoPlayForward,
  IoVolumeHigh,
  IoVolumeLow,
  IoVolumeMedium,
  IoVolumeOff,
} from "react-icons/io5";
import song from "../assets/song.webp";
import { FaPlay } from "react-icons/fa";
import { useState } from "react";
function MusicPlayerWithLyrics({ closeLyrics }: any) {
  const [volume, SetVolume] = useState(0);
  const [PlayerPosition, SetPlayerPosition] = useState(0);
  return (
    <div className="absolute top-0 left-0 h-screen w-screen  flex justify-center items-center p-2 backdrop-blur-sm bg-black/70">
      <div className="absolute top-5 left-5">
        <IoCloseOutline
          className="h-10 w-10 text-brand"
          type="button"
          onClick={() => closeLyrics()}
        />
      </div>

      <div className="flex items-center">
        <div className="col-span-1 hidden md:block space-y-8">
          <img
            src={song}
            alt={song}
            className="aspect-square rounded-lg w-[40rem] h-[40rem]"
          />
          <div className="md:order-3 hidden md:flex items-center space-x-1">
            <GetVolumeIndicator volume={volume} />
            <input
              type="range"
              value={PlayerPosition}
              min={0}
              max={100}
              onChange={(e) => SetPlayerPosition(parseInt(e.target.value))}
              className="h-[4px] bg-white w-[38rem]"
            />
          </div>
          <div className="flex justify-around text-white text-opacity-85">
            <IoPlayBack className="h-8 w-8 opacity-75 hover:opacity-95" />
            <FaPlay className="h-8 w-8 opacity-75 hover:opacity-95" />
            <IoPlayForward className="h-8 w-8 opacity-75 hover:opacity-95" />
          </div>
          <div className="md:order-3 hidden md:flex items-center space-x-1">
            <GetVolumeIndicator volume={volume} />
            <input
              type="range"
              value={volume}
              min={0}
              max={100}
              onChange={(e) => SetVolume(parseInt(e.target.value))}
              className="h-[4px] bg-white w-[38rem]"
            />
          </div>
        </div>
        <div className="h-30 text-white text-wrap  text-center p-4  font-bold font-nunito overflow-y-auto no-scrollbar masked-overflow text-xl w-screen  md:text-4xl md:w-[40rem] md:h-full">
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
      </div>
    </div>
  );
}

export default MusicPlayerWithLyrics;

const GetVolumeIndicator = ({ volume }: { volume: number }) => {
  if (volume == 0) {
    return <IoVolumeOff className="h-5 w-5 text-white" />;
  }
  if (volume > 0 && volume <= 33) {
    return <IoVolumeLow className="h-5 w-5 text-white" />;
  }
  if (volume > 33 && volume <= 66) {
    return <IoVolumeMedium className="h-5 w-5 text-white" />;
  }
  if (volume > 66) {
    return <IoVolumeHigh className="h-5 w-5 text-white" />;
  }

  return <IoVolumeOff className="h-5 w-5 text-white" />;
};
