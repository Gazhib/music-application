import { useSelector } from "react-redux";
import { Fade } from "react-awesome-reveal";
export default function GenrePage() {
  const { genre: genreName = "defaultGenre", genreArray: playlists = [] } =
    useSelector((state) => state.genre);
  return (
    <div className="GenrePage">
      <div className="genreName">
        <p className="name">{genreName}</p>
      </div>
      <Fade>
        <ul className="PlaylistList">
          {playlists.map((playlist) => {
            return (
              <li key={playlist.id}>
                <img src={playlist.images[0].url} />
              </li>
            );
          })}
        </ul>
      </Fade>
    </div>
  );
}
