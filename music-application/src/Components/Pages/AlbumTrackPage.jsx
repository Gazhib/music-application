import { Fade } from "react-awesome-reveal";
import { useSelector, useDispatch } from "react-redux";
import backIcon from "../../assets/icons/back.png";
import { pageActions } from "../../store";
import CustomAudio from "../CustomAudio";
import CommentSection from "../CommentSection";
export default function AlbumTrackPage() {
  const albumTracks = useSelector((state) => state.api.album);
  const albumName = useSelector((state) => state.api.albumName);
  const dispatch = useDispatch();

  function goBack() {
    dispatch(pageActions.changePage("home"));
  }
  return (
    <div className="AlbumTrackPage">
      <div className="playlistName">{albumName}</div>
      <div className="coverAndButton">
        <div className="coverContainer album">
          <Fade>
            <img src={albumTracks.images[1].url} />
          </Fade>
        </div>
        <button onClick={goBack} className="backButton">
          <img className="backIcon" src={backIcon} />
          <span>Back</span>
        </button>
      </div>
      <div>
        <Fade>
          <ul className="AlbumTracksContainer">
            {albumTracks.tracks.items.map((track) => {
              return (
                <li key={track.id}>
                  <CustomAudio audioUrl={track.preview_url} />
                  <p>{track.name}</p>
                </li>
              );
            })}
          </ul>
        </Fade>
      </div>
      <CommentSection name={albumName} />
    </div>
  );
}
