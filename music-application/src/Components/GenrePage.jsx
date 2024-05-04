import { useSelector, useDispatch } from "react-redux";
import { Fade } from "react-awesome-reveal";
import APIController from "../../APIwork";
import { pageActions, genreActions } from "../store";
export default function GenrePage() {
  const { genre: genreName = "defaultGenre", genreArray: playlists = [] } =
    useSelector((state) => state.genre);
  const token = useSelector(state => state.genre.token)
  const dispatch = useDispatch();

  async function handleChoosing(tracksEndPoint) {
    const tracks = await APIController.getTracks(token, tracksEndPoint)
    dispatch(genreActions.acquireTracks(tracks))
    dispatch(pageActions.changePage("playlist"));
  }

  return (
    <div className="GenrePage">
      <div className="genreName">
        <p className="name">{genreName}</p>
      </div>
      <Fade>
        <ul className="PlaylistList">
          {playlists.map((playlist, index) => {
            return (
              <li key={`${playlist.id}-${index}`}>
                <button onClick={() => handleChoosing(playlist.href)}>
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
