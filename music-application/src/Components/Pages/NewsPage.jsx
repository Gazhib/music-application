/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { apiActions, pageActions } from "../../store";
import APIController from "../../../APIwork";

export default function NewsPage() {
  const isSideBar = useSelector((state) => state.ui.sideBar);
  const title = "New Releases";
  const [releases, setReleases] = useState([]);
  const [token, setToken] = useState();
  const dispatch = useDispatch();
  async function getNewReleases(token) {
    const getReleases = await APIController.getNewReleases(token);
    setReleases(getReleases.albums.items);
  }

  async function handleChoosing(tracksEndPoint, albumName) {
    const albumTracks = await APIController.getAlbumTracks(
      token,
      tracksEndPoint
    );
    console.log(albumTracks);
    dispatch(apiActions.acquireAlbum(albumTracks));
    dispatch(apiActions.acquireAlbumName(albumName));
    dispatch(pageActions.changePage("album"));
  }

  async function getNewToken() {
    const token = await APIController.getToken();
    dispatch(apiActions.acquireToken(token));
    return token;
  }

  useEffect(() => {
    async function initialize() {
      const token = await getNewToken();

      setToken(token);
      if (releases.length === 0) {
        getNewReleases(token);
      }
    }

    initialize();
  }, []);

  return (
    <div className={`NewsPage ${isSideBar ? "side" : ""}`}>
      <div className="playlistName">{title}</div>
      <div>
        <Fade>
          <ul className="AlbumsContainer">
            {releases.map((album) => {
              return (
                <li key={album.id}>
                  <button
                    onClick={() => handleChoosing(album.href, album.name)}
                  >
                    <img src={album.images[0].url} />
                    <p>{album.name}</p>
                  </button>
                </li>
              );
            })}
          </ul>
        </Fade>
      </div>
    </div>
  );
}
