import { useSelector, useDispatch } from "react-redux";
import CustomAudio from "../CustomAudio";
import CommentSection from "../CommentSection";
import backIcon from "../../assets/icons/back.png";
import { pageActions } from "../../store";
import { Fade } from "react-awesome-reveal";
export default function MusicPage() {
  const track = useSelector((state) => state.api.track);
  const dispatch = useDispatch();

  function normalDate(givenDate) {
    const date = new Date(givenDate);
    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  }
  function goBack() {
    dispatch(pageActions.changePage("playlist"));
  }
  const trackName = track.name;
  return (
    <div className="MusicPage">
      <div className="backContainer">
        <div className="coverContainer">
          <Fade>
            <img src={track.album.images[0].url} />
          </Fade>
        </div>
        <button onClick={goBack} className="backButton music">
          <img className="backIcon" src={backIcon} />
          <span>Back</span>
        </button>
      </div>
      <div className="infoMusic">
        <Fade>
          <h2>{trackName}</h2>
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
        </Fade>
      </div>
      {track.preview_url && <CustomAudio audioUrl={track.preview_url} />}
      <CommentSection name={trackName} />
    </div>
  );
}
