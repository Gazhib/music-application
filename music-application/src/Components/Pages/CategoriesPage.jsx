import { useSelector, useDispatch } from "react-redux";
import { Fade } from "react-awesome-reveal";
import APIController from "../../../APIwork";
import backIcon from "../../assets/icons/back.png";
import { pageActions, apiActions } from "../../store";
export default function CategoriesPage() {
  const { genre: genreName = "defaultGenre", genreArray: playlists = [] } =
    useSelector((state) => state.api);
  const token = useSelector((state) => state.api.token);
  const dispatch = useDispatch();
  async function handleChoosing(tracksEndPoint, playlistName) {
    const tracks = await APIController.getTracks(token, tracksEndPoint);
    dispatch(apiActions.acquireTracks(tracks));
    dispatch(apiActions.acquireTracksName(playlistName))
    dispatch(pageActions.changePage("playlist"));
  }

  function goBack(){
    dispatch(pageActions.changePage("search"))
  }

  return (
    <div className="GenrePage">
      <div className="genreName">
        <p className="name">{genreName}</p>
      </div>
      <button onClick={goBack} className="backButton">
        <img className="backIcon" src={backIcon} />
        <span>Back</span>
      </button>
      <Fade>
        <ul className="PlaylistList">
          {playlists.map((playlist, index) => {
            return (
              <li key={`${playlist.id}-${index}`}>
                <button onClick={() => handleChoosing(playlist.href, playlist.name)}>
                  <img src={playlist.images[0].url} />
                  <h3>{playlist.name}</h3>
                </button>
              </li>
            );
          })}
        </ul>
      </Fade>
    </div>
  );
}
