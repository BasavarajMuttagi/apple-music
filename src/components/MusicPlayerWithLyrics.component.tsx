import song from "../assets/song.webp";
function MusicPlayerWithLyrics() {
  return <div>
        <div>
          <img
            src={song}
            alt={song}
            className="aspect-square rounded-lg w-12"
          />
        </div>
  </div>;
}

export default MusicPlayerWithLyrics;
