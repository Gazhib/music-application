import Header from "./Components/Header";
import Sidebar from "./Components/SideBar";
import RegistrationModal from "./Components/RegistrationModal";
import { useRef } from "react";
import NewsPage from "./Components/NewsPage";
import { useSelector } from "react-redux";
import SearchPage from "./Components/SearchPage";
import GenrePage from "./Components/GenrePage";
import PlaylistPage from "./Components/PlaylistPage";
import MusicPage from "./Components/MusicPage";
function App() {
  const regModal = useRef();
  function registration() {
    regModal.current.open();
  }

  const page = useSelector(state => state.page.page)
  let text;
  if (page === "home"){
    text = <NewsPage />
  } else if (page === "search"){
    text = <SearchPage />
  } else if (page === "genre"){
    text = <GenrePage />
  } else if (page === "playlist"){
    text = <PlaylistPage />
  } else if (page === "music"){
    text = <MusicPage />
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