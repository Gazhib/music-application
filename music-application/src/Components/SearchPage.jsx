import { useEffect, useState } from "react";
import APIController from "../../APIwork";
export default function SearchPage() {
  const [genres, setGenres] = useState();
  async function handleGenres() {
    const token = await APIController.getToken();
    const genreList = await APIController.getGenres(token);
    setGenres(genreList);
  }

  async function handleChoosing(genreId) {
    const token = await APIController.getToken();
    const playlist = await APIController.getPlaylistByGenre(token, genreId);
    console.log(playlist);
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
          <ul className="GenreList">
            {genres.map((genre) => {
              return (
                <li key={genre.id}>
                  <button onClick={() => handleChoosing(genre.id)}>
                    <img src={genre.icons[0].url} />
                    <p>{genre.name}</p>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
