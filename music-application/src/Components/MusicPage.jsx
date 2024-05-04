import { useSelector } from "react-redux";
import CustomAudio from "./CustomAudio";

export default function MusicPage() {
  const track = useSelector((state) => state.genre.track);
  console.log(track)
  function normalDate(givenDate) {
    const date = new Date(givenDate);
    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  }

  return (
    <div className="MusicPage">
      <div className="coverContainer">
        <img src={track.album.images[0].url} />
      </div>
      <div className="infoMusic">
        <h2>{track.name}</h2>
        <h3>
          <span className="artists">Artists: </span>
          {track.artists.map((artist, index) => {
            return (
              <span key={index}>
                {artist.name}
                {index === track.artists.length - 1 ? " " : ", "}{" "}
              </span>
            );
          })}
        </h3>
        <h3>
          <span className="artists">Release date: </span>
          {normalDate(track.album.release_date)}
        </h3>
      </div>
      {track.preview_url && <CustomAudio audioUrl={track.preview_url}/>}
    </div>
  );
}
