import Header from "./Components/Header";
import Sidebar from "./Components/SideBar";
import RegistrationModal from "./Components/RegistrationModal";
import { useRef } from "react";

function App() {
  const regModal = useRef();
  function registration() {
    regModal.current.open();
  }
  return (
    <>
      <Header registration={registration} />
      <Sidebar />
      <RegistrationModal ref={regModal} />
    </>
  );
}

export default App;
