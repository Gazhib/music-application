import { useEffect, useState } from "react";
import APIController from "../../APIwork";
import { useDispatch } from "react-redux";
import { pageActions, genreActions } from "../store";
import { Fade } from "react-awesome-reveal";
export default function SearchPage() {
  const [genres, setGenres] = useState();
  const dispatch = useDispatch();

  async function handleGenres() {
    const token = await APIController.getToken();
    const genreList = await APIController.getGenres(token);
    setGenres(genreList);
  }

  async function handleChoosing(genreName, genreId) {
    const token = await APIController.getToken();
    const playlist = await APIController.getPlaylistByGenre(token, genreId);
    dispatch(genreActions.changeGenre({genre: genreName, genreArray: playlist}))
    dispatch(pageActions.changePage("genre"))
    setGenres(playlist);
  }

  useEffect(() => {
    async function fetchGenres() {
      await handleGenres();
    }
    fetchGenres();
  }, []);

  return (
    <div className="SearchPage">
      <div className="searchInput">
        <input placeholder="Search..." type="text"></input>
      </div>
      <div className="">
        {genres && (
          <Fade>
            <ul className="GenreList">
              {genres.map((genre) => {
                return (
                  <li key={genre.id}>
                    <button onClick={() => handleChoosing(genre.name, genre.id)}>
                      <img src={genre.icons[0].url} />
                      <p>{genre.name}</p>
                    </button>
                  </li>
                );
              })}
            </ul>
          </Fade>
        )}
      </div>
    </div>
  );
}
