import { useEffect, useState } from "react";
import APIController from "../../../APIwork";
import { useDispatch, useSelector } from "react-redux";
import { pageActions, apiActions } from "../../store";
import { Fade } from "react-awesome-reveal";
import PTA from "./PTA";

export default function SearchPage() {
  const [genres, setGenres] = useState([]);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.api.token);
  useEffect(() => {
    const fetchGenres = async () => {
      const genreList = await APIController.getGenres(token);
      setGenres(genreList);
    };
    fetchGenres();
  }, [token]);
  const temp = (
    <Fade>
      <div>
        <ul className="GenreList">
          {genres.map((genre) => (
            <li key={genre.id}>
              <button onClick={() => handleChoosing(genre.name, genre.id)}>
                <img src={genre.icons[0].url} />
                <p>{genre.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Fade>
  );
  const [text, setText] = useState();

  async function handleChoosing(genreName, genreId) {
    const playlist = await APIController.getPlaylistByGenre(token, genreId);
    dispatch(
      apiActions.changeGenre({ genre: genreName, genreArray: playlist })
    );
    dispatch(pageActions.changePage("categories"));
    setGenres(playlist);
  }

  async function handleSearch(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    const searchField = data.search;
    const albumInfo = await APIController.searchAlbums(
      token,
      searchField,
      "album"
    );
    const trackInfo = await APIController.searchAlbums(
      token,
      searchField,
      "track"
    );
    const playlistInfo = await APIController.searchAlbums(
      token,
      searchField,
      "playlist"
    );
    console.log(trackInfo.tracks);
    setText(
      <PTA
        searchField={searchField}
        trackInfo={trackInfo.tracks}
        albumInfo={albumInfo.albums}
        playlistInfo={playlistInfo.playlists}
      />
    );
  }

  return (
    <div className="SearchPage">
      <div className="searchForm">
        <form onSubmit={handleSearch} className="searchInput">
          <input name="search" placeholder="Search..." type="text" />
        </form>
      </div>
      {text ? text : temp}
    </div>
  );
}
