import Header from "./Components/Header";
import Sidebar from "./Components/SideBar";
import RegistrationModal from "./Components/RegistrationModal";
import { useRef } from "react";
import NewsPage from "./Components/Pages/NewsPage";
import { useSelector } from "react-redux";
import SearchPage from "./Components/Pages/SearchPage";
import CategoriesPage from "./Components/Pages/CategoriesPage";
import PlaylistPage from "./Components/Pages/PlaylistPage";
import MusicPage from "./Components/Pages/MusicPage";
import AlbumTrackPage from "./Components/Pages/AlbumTrackPage";
function App() {
  const regModal = useRef();
  function registration() {
    regModal.current.open();
  }

  const page = useSelector((state) => state.page.page);
  let text;
  if (page === "home") {
    text = <NewsPage />;
  } else if (page === "search") {
    text = <SearchPage />;
  } else if (page === "categories") {
    text = <CategoriesPage />;
  } else if (page === "playlist") {
    text = <PlaylistPage />;
  } else if (page === "music") {
    text = <MusicPage />;
  } else if (page === "album") {
    text = <AlbumTrackPage />;
  }

  return (
    <div className="App">
      {text}
      <Header registration={registration} />
      <Sidebar />
      <RegistrationModal ref={regModal} />
    </div>
  );
}

export default App;
