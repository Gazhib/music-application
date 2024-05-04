import Header from "./Components/Header";
import Sidebar from "./Components/SideBar";
import RegistrationModal from "./Components/RegistrationModal";
import { useRef } from "react";
import NewsPage from "./Components/NewsPage";

function App() {
  const regModal = useRef();
  function registration() {
    regModal.current.open();
  }
  return (
    <div className="App">
      <NewsPage />
      <Header registration={registration} />
      <Sidebar />
      <RegistrationModal ref={regModal} />
    </div>
  );
}

export default App;
