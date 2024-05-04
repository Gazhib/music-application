import { Fade } from "react-awesome-reveal";
import { useSelector, useDispatch } from "react-redux";
import { pageActions, genreActions } from "../store";
import APIController from "../../APIwork";
export default function PlaylistPage() {
  const playlist = useSelector((state) => state.genre.tracks);
  const token = useSelector(state => state.genre.token)
  const dispatch = useDispatch();
  async function handleChoosing(trackEndPoint){
    const result = await APIController.getTrack(token, trackEndPoint)
    dispatch(pageActions.changePage("music"))
    dispatch(genreActions.acquireTrack(result))
  }
  return (
    <div className="PlaylistPage">
      <div className="imageContainer"></div>
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
