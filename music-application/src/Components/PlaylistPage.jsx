import { Fade } from "react-awesome-reveal";
import { useSelector, useDispatch } from "react-redux";
import backIcon from "../assets/icons/back.png";
import { pageActions, apiActions } from "../store";
import APIController from "../../APIwork";
export default function PlaylistPage() {
  const playlist = useSelector((state) => state.api.tracks);
  const token = useSelector((state) => state.api.token);
  const playlistName = useSelector((state) => state.api.tracksName);
  const dispatch = useDispatch();
  async function handleChoosing(trackEndPoint) {
    const result = await APIController.getTrack(token, trackEndPoint);
    dispatch(pageActions.changePage("music"));
    dispatch(apiActions.acquireTrack(result));
  }

  function goBack() {
    dispatch(pageActions.changePage("categories"));
  }
  return (
    <div className="PlaylistPage">
      <div className="playlistName">
        <p className="name">{playlistName}</p>
      </div>
      <div className="imageContainer"></div>
      <button onClick={goBack} className="backButton">
        <img className="backIcon" src={backIcon} />
        <span>Back</span>
      </button>
      <Fade>
        <ul className="PlaylistContainer">
          {playlist.tracks.items.map((track) => {
            return (
              <li key={track.track.id}>
                <button onClick={() => handleChoosing(track.track.href)}>
                  <img src={track.track.album.images[0].url} />
                  <p>{track.track.name}</p>
                </button>
              </li>
            );
          })}
        </ul>
      </Fade>
    </div>
  );
}
